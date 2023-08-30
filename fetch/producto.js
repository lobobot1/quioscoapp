/**
 * @returns {Promise<Response>}
 */
export async function getProducts() {
  return await fetch("http://localhost:3000/api/producto", {
    method: "GET",
  });
}
