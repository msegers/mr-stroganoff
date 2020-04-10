type Config = {
  API: {
    BASE_PATH: string;
    RECIPE: string;
    FERMENTABLE: string;
  }
}

export const Config: Config = {
  API: {
    BASE_PATH: 'http://localhost:3000',
    RECIPE: '/recipe',
    FERMENTABLE: '/fermentable',
  }
}