export default async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const domainService = req.scope.resolve("domainService");
  const updated = await domainService.update(id, data);
  res.json({ domain: updated });
};
