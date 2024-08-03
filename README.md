# Getting Deployed
> [!NOTE]
> You'll need [Docker](https://www.docker.com/) to run this project. <br />
> It's also recommended that you have [BuildKit](https://docs.docker.com/build/buildkit/) installed on your machine in order to speed up a build process.


## 1. Clone this repository

```sh
git clone https://github.com/intaniger/pdpa-wdc.git && cd pdpa-wdc/
```

## 2. Setup the `.env` file

```sh
echo PDPA_WDC_PG_PASSWORD=$(head -c 21 /dev/urandom | base64 | sed  's/\//+/g') > .env # random pg password
echo PUBLIC_PDPA_WDC_PGRST_ENDPOINT=http://localhost:3000 >> .env
```
> [!NOTE] 
> If you're using a non-linux operating system, please replace `$(head -c 21 /dev/urandom | base64 | sed  's/\//+/g')` with your own randomized password instead.

Each environment variable will affect the behavior of the system, as listed below:

| Environment Variable Name | How it is used? |
| :---: | --- |
| PDPA_WDC_PG_PASSWORD | The root PostgreSQL password is used to set up the `pg` service. <br />  The `pgrst` service also uses this variable in order to connect to `pg` before its startup. |
| PUBLIC_PDPA_WDC_PGRST_ENDPOINT | HTTP URL of the `pgrst` service that will be locally available for the webpage to connect to in order to retrieve and create a new Data Mapping record |

## 3. `docker compose up`

As the title says, let's get it running!

```sh
docker compose up -d && open http://localhost/
```

The website will be opened at [localhost](http://localhost/).

## 🏗️ Compose Components

1. `pg`: PostgreSQL, Relational Database, is used for record persistence.
2. `pgrst`: [PostgREST](https://docs.postgrest.org/en/v12/), a standalone API server with zero setup that exposes database operations via the RESTful API.
  > [!TIP]
  > Q: Does this imply that I can do whatever is harmful to the database through this API?
  > <br /> A: The configuration of `pgrst` uses a role `webuser`, which has restricted permissions; refer to [3.roles.sql](db/3.roles.sql) for further details.
3. `front-end`: The main webpage, built with [Astro](https://astro.build/), [Svelte](https://svelte.dev/), [tailwindcss](https://tailwindcss.com/), and assistance from [daisyUI](https://daisyui.com/)
