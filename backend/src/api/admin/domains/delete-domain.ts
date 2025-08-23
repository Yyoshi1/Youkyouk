export default async (req, res) => {
  const { id } = req.params;
  const domainService = req.scope.resolve("domainService");
  await domainService.delete(id);
  res.json({ deleted: true });
};
