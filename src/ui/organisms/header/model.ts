import { createEffect } from "effector"

import { request } from "libs/request"

export const exportOperations = createEffect(async () =>
  request({ url: `/kitty-tron/us-central1/exportOperations` }))


