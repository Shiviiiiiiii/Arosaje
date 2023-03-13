# Ikonik api

ikonik-api is the API of the Ikonik Project, development in Node.js.

## Installation

Use the package manager [node](https://nodejs.org/en/download/) to install.

```bash
npm install
```

## Database

Copy/Paste **.env.example** and rename it to **.env** with local information.

```bash
npx sequelize-cli db:migrate
```

Import default seeders.

```bash
npx sequelize-cli db:seed:all
```
## Usage

Start project.

```bash
npm run dev
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
