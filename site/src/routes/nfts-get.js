import { CID } from 'multiformats'
import { HTTPError } from '../errors.js'
import { verifyToken } from '../utils/utils.js'
import * as nfts from '../models/nfts.js'
import { JSONResponse } from '../utils/json-response.js'

/**
 * @param {FetchEvent} event
 * @param {Record<string,string>} params
 * @returns {Promise<Response>}
 */
export const status = async (event, params) => {
  const token = await verifyToken(event)
  if (!token.ok) {
    return HTTPError.respond(token.error)
  }
  const user = token.user

  const status = await nfts.get({ user, cid: params.cid })
  return new JSONResponse({
    ok: true,
    value: status,
  })
}