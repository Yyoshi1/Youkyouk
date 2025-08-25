export async function getQuickResponses(lang: string) {
  const res = await fetch(`/api/chat/responses?lang=${lang}`);
  if (!res.ok) throw new Error("Failed to fetch quick responses");
  return res.json();
}

export async function addQuickResponse(lang: string, text: string) {
  const res = await fetch(`/api/chat/responses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ lang, text }),
  });
  if (!res.ok) throw new Error("Failed to add quick response");
  return res.json();
}

export async function deleteQuickResponse(id: string) {
  const res = await fetch(`/api/chat/responses/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete quick response");
  return res.json();
}
