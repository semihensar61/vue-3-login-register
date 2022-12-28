export const state = {
  tab: "login", // stores which tab is open
  login: {
    email: "",
    password: ""
  },
  register: {
    fullName: "",
    email: "",
    password: ""
  }
}

export type State = typeof state