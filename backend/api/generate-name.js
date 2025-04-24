export default function generateName(req, res) {
  const { firstName, lastName, birthDate, nationality } = req.body;

  // 模拟中文名字生成逻辑
  const names = [
    {
      name: "辰溪",
      meaning: "辰，星辰；溪，柔情之水。象征高远与细腻。",
      source: "灵感来自宋词“溪云初起日沉阁”"
    },
    {
      name: "洛妍",
      meaning: "洛，古水名；妍，美丽而有智慧。",
      source: "出自《洛神赋》"
    },
    {
      name: "青雯",
      meaning: "青，清新；雯，彩云之纹。寓意纯净且充满灵性。",
      source: "源于《诗经》之意境"
    }
  ];

  // 模拟更个性化处理（可拓展）
  const selected = names.map((n, i) => ({
    ...n,
    name: `${lastName[0] || '李'}${n.name}`
  }));

  res.json(selected);
}
