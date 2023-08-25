/**
 * @returns {Promise<Response>}
 */
export async function getCategories() {
  return await fetch("http://localhost:3000/api/categoria", {
    method: "GET",
  });
}
