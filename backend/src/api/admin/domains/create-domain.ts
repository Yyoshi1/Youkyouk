export default async (req, res) => {
  const { domain_name, model_type } = req.body;
  const domainService = req.scope.resolve("domainService");
  const domain = await domainService.create({ domain_name, model_type });
  res.json({ domain });
};
