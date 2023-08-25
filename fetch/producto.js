/**
 * @returns {Promise<Response>}
 */
export async function getProducts() {
  return await fetch("api/producto", {
    method: "GET",
  });
}
