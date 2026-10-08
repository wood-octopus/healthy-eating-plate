const FOODS = [
  { id: "rice", name: "白米饭", group: "谷薯", zone: "grain", grams: 50, grain: 50, meta: "50克 · 精制", swatch: "#e2c56a" },
  { id: "brown", name: "糙米", group: "谷薯", zone: "grain", grams: 50, grain: 50, whole: 50, meta: "50克 · 全谷物", swatch: "#c4a15a" },
  { id: "oat", name: "燕麦", group: "谷薯", zone: "grain", grams: 50, grain: 50, whole: 50, meta: "50克 · 全谷物", swatch: "#d7c48a" },
  { id: "millet", name: "小米", group: "谷薯", zone: "grain", grams: 50, grain: 50, whole: 50, meta: "50克 · 全谷物", swatch: "#e6c84a" },
  { id: "corn", name: "玉米", group: "谷薯", zone: "grain", grams: 50, grain: 50, whole: 50, meta: "50克 · 全谷物", swatch: "#f0d24a" },
  { id: "buckwheat", name: "荞麦", group: "谷薯", zone: "grain", grams: 50, grain: 50, whole: 50, meta: "50克 · 全谷物", swatch: "#8c6b4a" },
  { id: "adzuki", name: "红豆", group: "谷薯", zone: "grain", grams: 50, grain: 50, whole: 50, meta: "50克 · 杂豆，算全谷物", swatch: "#a33b3b" },
  { id: "bun", name: "馒头", group: "谷薯", zone: "grain", grams: 50, grain: 50, meta: "50克 · 精制", swatch: "#f3e6c8" },
  { id: "sweetpotato", name: "红薯", group: "谷薯", zone: "grain", grams: 70, tuber: 70, meta: "70克 · 薯类", swatch: "#e08a45" },
  { id: "potato", name: "土豆", group: "谷薯", zone: "grain", grams: 70, tuber: 70, meta: "70克 · 薯类", swatch: "#d7c07a" },
  { id: "greens", name: "青菜", group: "蔬菜", zone: "veg", grams: 100, veg: 100, dark: 100, meta: "100克 · 深色", swatch: "#2f7d57" },
  { id: "spinach", name: "菠菜", group: "蔬菜", zone: "veg", grams: 100, veg: 100, dark: 100, meta: "100克 · 深色", swatch: "#1f6b45" },
  { id: "broccoli", name: "西兰花", group: "蔬菜", zone: "veg", grams: 100, veg: 100, dark: 100, meta: "100克 · 深色", swatch: "#3e8f55" },
  { id: "carrot", name: "胡萝卜", group: "蔬菜", zone: "veg", grams: 80, veg: 80, dark: 80, meta: "80克 · 深色", swatch: "#e07a32" },
  { id: "tomato", name: "番茄", group: "蔬菜", zone: "veg", grams: 100, veg: 100, dark: 100, meta: "100克 · 深色", swatch: "#d64545" },
  { id: "cabbage", name: "大白菜", group: "蔬菜", zone: "veg", grams: 100, veg: 100, meta: "100克 · 浅色", swatch: "#b7c98a" },
  { id: "cucumber", name: "黄瓜", group: "蔬菜", zone: "veg", grams: 100, veg: 100, meta: "100克 · 浅色", swatch: "#7dae62" },
  { id: "mushroom", name: "香菇", group: "蔬菜", zone: "veg", grams: 80, veg: 80, meta: "80克 · 菌类", swatch: "#8d6a45" },
  { id: "apple", name: "苹果", group: "水果", zone: "fruit", grams: 150, fruit: 150, meta: "150克", swatch: "#d4534a" },
  { id: "pear", name: "梨", group: "水果", zone: "fruit", grams: 150, fruit: 150, meta: "150克", swatch: "#d6d08a" },
  { id: "orange", name: "橙子", group: "水果", zone: "fruit", grams: 150, fruit: 150, meta: "150克", swatch: "#ef8b2c" },
  { id: "banana", name: "香蕉", group: "水果", zone: "fruit", grams: 100, fruit: 100, meta: "100克", swatch: "#f0c83a" },
  { id: "grape", name: "葡萄", group: "水果", zone: "fruit", grams: 150, fruit: 150, meta: "150克", swatch: "#7a4e8a" },
  { id: "kiwi", name: "猕猴桃", group: "水果", zone: "fruit", grams: 100, fruit: 100, meta: "100克", swatch: "#8f9a3a" },
  { id: "fish", name: "鱼", group: "鱼禽蛋肉和豆", zone: "protein", grams: 50, animal: 50, aquatic: 50, meta: "50克", swatch: "#4f86b5" },
  { id: "shrimp", name: "虾", group: "鱼禽蛋肉和豆", zone: "protein", grams: 50, animal: 50, aquatic: 50, meta: "50克 · 水产", swatch: "#e07a78" },
  { id: "chicken", name: "鸡肉", group: "鱼禽蛋肉和豆", zone: "protein", grams: 50, animal: 50, livestock: 50, meta: "50克 · 禽肉", swatch: "#e7b089" },
  { id: "duck", name: "鸭肉", group: "鱼禽蛋肉和豆", zone: "protein", grams: 50, animal: 50, livestock: 50, meta: "50克 · 禽肉", swatch: "#c4896a" },
  { id: "pork", name: "瘦猪肉", group: "鱼禽蛋肉和豆", zone: "protein", grams: 50, animal: 50, livestock: 50, meta: "50克 · 畜肉", swatch: "#d98986" },
  { id: "beef", name: "瘦牛肉", group: "鱼禽蛋肉和豆", zone: "protein", grams: 50, animal: 50, livestock: 50, meta: "50克 · 畜肉", swatch: "#a85a52" },
  { id: "egg", name: "鸡蛋", group: "鱼禽蛋肉和豆", zone: "protein", grams: 50, animal: 50, egg: 50, meta: "50克 · 含蛋黄", swatch: "#f0d48a" },
  { id: "tofu", name: "北豆腐", group: "鱼禽蛋肉和豆", zone: "protein", grams: 60, soy: 20, meta: "60克 · 约合大豆20克", swatch: "#efe6d4" },
  { id: "tofuDry", name: "豆腐干", group: "鱼禽蛋肉和豆", zone: "protein", grams: 45, soy: 20, meta: "45克 · 约合大豆20克", swatch: "#e4d2a8" },
  { id: "soymilk", name: "豆浆", group: "鱼禽蛋肉和豆", zone: "protein", grams: 300, soy: 20, meta: "300克 · 约合大豆20克", swatch: "#f3ead0" },
  { id: "sausage", name: "火腿肠", group: "鱼禽蛋肉和豆", zone: "protein", grams: 40, animal: 40, processed: 40, salt: 1.2, oil: 6, meta: "40克 · 加工肉", swatch: "#c46b62" },
  { id: "milk", name: "牛奶", group: "奶和坚果", zone: "milk", grams: 300, milk: 300, meta: "300毫升", swatch: "#f7f4ee" },
  { id: "yogurt", name: "酸奶", group: "奶和坚果", zone: "milk", grams: 150, milk: 150, meta: "150毫升", swatch: "#f3efe4" },
  { id: "nuts", name: "坚果", group: "奶和坚果", zone: "nut", grams: 10, nuts: 10, meta: "10克 · 一小把", swatch: "#a67c52" },
  { id: "walnut", name: "核桃", group: "奶和坚果", zone: "nut", grams: 10, nuts: 10, meta: "10克", swatch: "#6e4b32" },
  { id: "peanut", name: "花生", group: "奶和坚果", zone: "nut", grams: 10, nuts: 10, meta: "10克", swatch: "#c4a15a" }
];

const FOOD_BY_ID = Object.fromEntries(FOODS.map((food) => [food.id, food]));
const GROUPS = ["谷薯", "蔬菜", "水果", "鱼禽蛋肉和豆", "奶和坚果"];
const MEALS = [
  { id: "breakfast", name: "早餐" },
  { id: "lunch", name: "午餐" },
  { id: "dinner", name: "晚餐" }
];
const COOKS = [
  { id: "steam", name: "蒸或煮", oil: 5 },
  { id: "stir", name: "炒", oil: 10 },
  { id: "fry", name: "煎或炸", oil: 15 }
];
const TASTES = [
  { id: "light", name: "清淡", salt: 0.8 },
  { id: "home", name: "家常", salt: 1.6 },
  { id: "heavy", name: "偏咸", salt: 2.6 }
];
const DRINKS = [
  { id: "water", name: "白水或茶", sugar: 0 },
  { id: "sugary", name: "含糖饮料", sugar: 28 }
];
const COOK_BY_ID = Object.fromEntries(COOKS.map((item) => [item.id, item]));
const TASTE_BY_ID = Object.fromEntries(TASTES.map((item) => [item.id, item]));
const DRINK_BY_ID = Object.fromEntries(DRINKS.map((item) => [item.id, item]));
const MAX_PER_MEAL = 6;

const SAMPLE = {
  breakfast: { items: { oat: 1, egg: 1, milk: 1, apple: 1 }, cook: "steam", taste: "light", drink: "water" },
  lunch: { items: { rice: 2, fish: 1, greens: 2, tofu: 1 }, cook: "stir", taste: "light", drink: "water" },
  dinner: { items: { brown: 1, sweetpotato: 1, chicken: 1, broccoli: 1, cabbage: 1, orange: 1, nuts: 1 }, cook: "stir", taste: "light", drink: "water" }
};

const GUIDE_KEY = "plate-guide-open";

const state = {
  meal: "breakfast",
  guideOpen: readGuideOpen(),
  meals: {
    breakfast: emptyMeal(),
    lunch: emptyMeal(),
    dinner: emptyMeal()
  }
};

function readGuideOpen() {
  try {
    return localStorage.getItem(GUIDE_KEY) === "1";
  } catch (error) {
    return false;
  }
}

function writeGuideOpen(open) {
  try {
    localStorage.setItem(GUIDE_KEY, open ? "1" : "0");
  } catch (error) {
    /* 浏览器禁止本地存储时，这一次打开仍然有效。 */
  }
}

function emptyMeal() {
  return { items: {}, cook: "stir", taste: "home", drink: "water" };
}

function round1(value) {
  return Math.round(value * 10) / 10;
}

function fmt(value) {
  const rounded = round1(value);
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[char]));
}

function mealHasFood(meal) {
  return Object.values(meal.items).some((count) => count > 0);
}

function blankTotals() {
  return {
    grain: 0, whole: 0, tuber: 0, veg: 0, dark: 0, fruit: 0,
    animal: 0, aquatic: 0, livestock: 0, egg: 0, processed: 0,
    milk: 0, soy: 0, nuts: 0, salt: 0, oil: 0, sugar: 0,
    kinds: 0, kindSet: new Set(), mealsWithFood: 0, sugaryDrinks: 0
  };
}

function addFood(totals, food, count) {
  const keys = ["grain", "whole", "tuber", "veg", "dark", "fruit", "animal", "aquatic", "livestock", "egg", "processed", "milk", "soy", "nuts", "salt", "oil"];
  keys.forEach((key) => {
    totals[key] += (food[key] || 0) * count;
  });
  totals.kindSet.add(food.id);
}

function dayTotals(source = state) {
  const totals = blankTotals();
  MEALS.forEach(({ id }) => {
    const meal = source.meals[id];
    if (!mealHasFood(meal)) return;
    totals.mealsWithFood += 1;
    totals.oil += COOK_BY_ID[meal.cook].oil;
    totals.salt += TASTE_BY_ID[meal.taste].salt;
    totals.sugar += DRINK_BY_ID[meal.drink].sugar;
    if (meal.drink === "sugary") totals.sugaryDrinks += 1;
    Object.entries(meal.items).forEach(([foodId, count]) => {
      if (count > 0) addFood(totals, FOOD_BY_ID[foodId], count);
    });
  });
  totals.kinds = totals.kindSet.size;
  ["salt", "oil", "sugar", "soy"].forEach((key) => {
    totals[key] = round1(totals[key]);
  });
  return totals;
}

function rangeTone(value, min, max) {
  if (value < min) return "low";
  if (max != null && value > max) return "high";
  return "ok";
}

function worst(tones) {
  const rank = { high: 3, low: 2, warn: 1, ok: 0 };
  return tones.slice().sort((a, b) => rank[b] - rank[a])[0];
}

function grainTone(totals) {
  if (totals.grain < 200) return "low";
  if (totals.grain > 300 || totals.tuber > 100 || totals.whole > 150) return "high";
  if (totals.tuber < 50 || totals.whole < 50) return "warn";
  return "ok";
}

function vegTone(totals) {
  if (totals.veg < 300) return "low";
  if (totals.dark / totals.veg < 0.5) return "warn";
  return "ok";
}

function animalTone(totals) {
  if (totals.animal < 120) return "low";
  if (totals.animal > 200 || totals.livestock > 75) return "high";
  if (totals.processed > 0) return "warn";
  return "ok";
}

function dairyTone(totals) {
  return worst([
    rangeTone(totals.milk, 300, 500),
    totals.soy < 15 ? "low" : totals.soy > 30 ? "warn" : "ok",
    totals.nuts <= 0 ? "warn" : totals.nuts > 20 ? "high" : "ok"
  ]);
}

function toneLabel(tone) {
  return { ok: "合适", low: "还缺", warn: "可调整", high: "偏多" }[tone];
}

function fillPct(value, target) {
  if (target <= 0) return 0;
  return Math.max(0, Math.min(100, (value / target) * 100));
}

function layers(totals) {
  const darkPct = totals.veg > 0 ? Math.round((totals.dark / totals.veg) * 100) : 0;
  return [
    {
      name: "奶、豆、坚果",
      width: "58%",
      tone: dairyTone(totals),
      fill: fillPct(Math.min(totals.milk, 300) + Math.min(totals.soy, 15) + Math.min(totals.nuts, 10), 300 + 15 + 10),
      detail: `奶 ${fmt(totals.milk)} 毫升 · 大豆 ${fmt(totals.soy)} 克 · 坚果 ${fmt(totals.nuts)} 克`
    },
    {
      name: "鱼禽蛋瘦肉",
      width: "70%",
      tone: animalTone(totals),
      fill: fillPct(totals.animal, 120),
      detail: `${fmt(totals.animal)} 克 · 水产 ${fmt(totals.aquatic)} · 禽畜 ${fmt(totals.livestock)} · 蛋 ${fmt(totals.egg)}`
    },
    {
      name: "水果",
      width: "80%",
      tone: rangeTone(totals.fruit, 200, 350),
      fill: fillPct(totals.fruit, 200),
      detail: `${fmt(totals.fruit)} 克 · 大约 200～350 克`
    },
    {
      name: "蔬菜",
      width: "90%",
      tone: vegTone(totals),
      fill: fillPct(totals.veg, 300),
      detail: `${fmt(totals.veg)} 克 · 深色 ${darkPct}%`
    },
    {
      name: "谷薯",
      width: "100%",
      tone: grainTone(totals),
      fill: fillPct(totals.grain, 200),
      detail: `谷类 ${fmt(totals.grain)} 克，全谷物 ${fmt(totals.whole)} · 薯类 ${fmt(totals.tuber)} 克`
    }
  ];
}

function buildInsights(totals) {
  if (totals.mealsWithFood === 0) {
    return {
      tone: "info",
      headline: "从早餐开始摆",
      lines: [{ rule: "餐盘", text: "点下面的食物加到这一餐。宝塔把早餐、午餐和晚餐加在一起，餐盘只显示当前这一餐。" }]
    };
  }

  const issues = [];
  const push = (tone, rule, text, pin = false) => issues.push({ tone, rule, text, pin });

  if (totals.salt > 5) push("high", "准则五", `食盐大约 ${fmt(totals.salt)} 克，超过了一天 5 克。家常、偏咸和火腿肠都会算进去。`);
  if (totals.oil > 30) push("high", "准则五", `烹调油大约 ${fmt(totals.oil)} 克，超过了 25～30 克。煎炸最费油。`);
  if (totals.sugar > 50) push("high", "准则五", `添加糖大约 ${fmt(totals.sugar)} 克，超过了 50 克。`);
  else if (totals.sugar > 25) push("warn", "准则六", `添加糖大约 ${fmt(totals.sugar)} 克。最好停在 25 克以下，一杯含糖饮料往往就到了。`);
  if (totals.processed > 0) push("warn", "准则四", `加工肉大约 ${fmt(totals.processed)} 克。火腿肠、腊肉这类深加工肉制品要少吃。`);
  if (totals.veg < 300) push("low", "准则三", `蔬菜大约 ${fmt(totals.veg)} 克，还没到 300 克，最好餐餐都有。`, true);
  else if (totals.dark / totals.veg < 0.5) push("warn", "准则三", `深色蔬菜大约占 ${Math.round((totals.dark / totals.veg) * 100)}%，最好到一半。青菜、西兰花、胡萝卜算深色。`);
  if (totals.fruit < 200) push("low", "准则三", `水果大约 ${fmt(totals.fruit)} 克，还没到 200 克。果汁不能代替鲜果。`, true);
  else if (totals.fruit > 350) push("warn", "准则三", `水果大约 ${fmt(totals.fruit)} 克，建议大约 200～350 克。`);
  if (totals.grain < 200) push("low", "准则一", `谷类大约 ${fmt(totals.grain)} 克，还没到 200 克。主食要留在餐盘里。`);
  else if (totals.grain > 300) push("warn", "准则一", `谷类大约 ${fmt(totals.grain)} 克，超过了大约 300 克。`);
  if (totals.grain >= 100 && totals.whole < 50) push("low", "准则三", `全谷物大约 ${fmt(totals.whole)} 克。谷类里最好有 50～150 克燕麦、糙米或小米。`);
  else if (totals.whole > 150) push("warn", "准则三", `全谷物大约 ${fmt(totals.whole)} 克，略多于 150 克。`);
  if (totals.tuber === 0) push("low", "准则一", "还没有薯类。红薯大约 50～100 克，可以替换一部分主食。");
  else if (totals.tuber > 100) push("warn", "准则一", `薯类大约 ${fmt(totals.tuber)} 克，建议大约 50～100 克。`);
  if (totals.animal < 120) push("low", "准则四", `鱼、禽、蛋、瘦肉大约 ${fmt(totals.animal)} 克，还没到 120 克。`);
  else if (totals.animal > 200) push("high", "准则四", `鱼、禽、蛋、瘦肉大约 ${fmt(totals.animal)} 克，超过了大约 200 克。`);
  if (totals.livestock > 75) push("warn", "准则四", `禽畜肉大约 ${fmt(totals.livestock)} 克。一天大约 40～75 克，可以留位置给鱼。`);
  if (totals.aquatic === 0 && totals.livestock >= 50) push("warn", "准则四", "今天还没有鱼。动物性食物里，可以优先选鱼。");
  if (totals.egg === 0 && totals.mealsWithFood >= 2) push("warn", "准则四", "今天还没有鸡蛋。大约每天一个，蛋黄一起吃。");
  if (totals.milk < 300) push("low", "准则三", `奶大约 ${fmt(totals.milk)} 毫升，还没到 300 毫升。`);
  else if (totals.milk > 500) push("warn", "准则三", `奶大约 ${fmt(totals.milk)} 毫升。超过 500 毫升时，可以考虑低脂或脱脂。`);
  if (totals.soy < 15) push("low", "准则三", `大豆大约 ${fmt(totals.soy)} 克。一般成年人一天大约 15～25 克，北豆腐 60 克大约就是 20 克大豆。`);
  else if (totals.soy > 30) push("warn", "准则三", `大豆大约 ${fmt(totals.soy)} 克。一般成年人 15～25 克就合适，全素饮食才会更高。`);
  if (totals.nuts === 0) push("low", "准则三", "还没有坚果。大约每天 10 克，一小把。");
  else if (totals.nuts > 20) push("warn", "准则三", `坚果大约 ${fmt(totals.nuts)} 克。大约每天 10 克就合适。`);
  if (totals.kinds < 12) push("low", "准则一", `现在有 ${totals.kinds} 种食物。一天尽量到 12 种以上，同一种加份数不算新的种类。`);

  const closeEnough = totals.mealsWithFood === 3
    && totals.salt <= 5
    && totals.oil <= 30
    && totals.sugar <= 25
    && totals.processed === 0
    && totals.veg >= 300
    && totals.dark / totals.veg >= 0.5
    && totals.fruit >= 200 && totals.fruit <= 350
    && totals.grain >= 200 && totals.grain <= 300
    && totals.whole >= 50 && totals.whole <= 150
    && totals.tuber >= 50 && totals.tuber <= 100
    && totals.animal >= 120 && totals.animal <= 200
    && totals.livestock <= 75
    && totals.aquatic > 0
    && totals.egg > 0
    && totals.milk >= 300 && totals.milk <= 500
    && totals.soy >= 15 && totals.soy <= 30
    && totals.nuts > 0 && totals.nuts <= 20
    && totals.kinds >= 12
    && totals.sugaryDrinks === 0;

  if (closeEnough) {
    return {
      tone: "ok",
      headline: "这一天和平衡膳食比较接近",
      lines: [
        { rule: "准则一", text: `三餐合在一起大约有 ${totals.kinds} 种食物。` },
        { rule: "准则三", text: `蔬菜大约 ${fmt(totals.veg)} 克，深色约占 ${Math.round((totals.dark / totals.veg) * 100)}%。水果大约 ${fmt(totals.fruit)} 克。` },
        { rule: "准则五", text: `食盐大约 ${fmt(totals.salt)} 克，烹调油大约 ${fmt(totals.oil)} 克，添加糖大约 ${fmt(totals.sugar)} 克。` },
        { rule: "准则六", text: "喝的是白水或茶。这是和膳食宝塔的对照，不是体检结果。" }
      ]
    };
  }

  const rank = { high: 0, warn: 1, low: 2 };
  const highs = issues.filter((item) => item.tone === "high").sort((a, b) => rank[a.tone] - rank[b.tone]);
  const pinned = issues.filter((item) => item.pin && item.tone !== "high");
  const others = issues.filter((item) => item.tone !== "high" && !item.pin)
    .sort((a, b) => rank[a.tone] - rank[b.tone]);
  const lines = [];
  [...highs, ...pinned, ...others].forEach((item) => {
    if (lines.length < 6 && !lines.includes(item)) lines.push(item);
  });
  const headline = totals.mealsWithFood < 3
    ? `还差 ${3 - totals.mealsWithFood} 餐没摆，下面是已经累加的结果`
    : "和宝塔比，还有几处可以调整";
  return {
    tone: issues.some((item) => item.tone === "high") ? "high" : "warn",
    headline,
    lines
  };
}

function meter(label, valueText, width, tone) {
  return `<div class="meter ${tone}">
    <div class="meter-top"><span>${label}</span><strong>${valueText}</strong></div>
    <div class="bar" aria-hidden="true"><span style="width:${Math.max(0, Math.min(100, width))}%"></span></div>
  </div>`;
}

function metersHtml(totals) {
  const saltTone = totals.salt > 5 ? "high" : "ok";
  const oilTone = totals.oil > 30 ? "high" : "ok";
  const sugarTone = totals.sugar > 50 ? "high" : totals.sugar > 25 ? "warn" : "ok";
  const kindTone = totals.kinds >= 12 ? "ok" : "low";
  return [
    meter("食盐", `${fmt(totals.salt)}<small> / 5克</small>`, (totals.salt / 5) * 100, saltTone),
    meter("烹调油", `${fmt(totals.oil)}<small> / 30克</small>`, (totals.oil / 30) * 100, oilTone),
    meter("添加糖", `${fmt(totals.sugar)}<small> / 25克</small>`, (totals.sugar / 25) * 100, sugarTone),
    meter("种类", `${totals.kinds}<small> / 12种</small>`, (totals.kinds / 12) * 100, kindTone)
  ].join("");
}

function chipsHtml(items, zone) {
  const rows = FOODS.filter((food) => food.zone === zone && items[food.id] > 0);
  if (!rows.length) return `<p class="empty-note">还空着</p>`;
  return `<ul class="chips">${rows.map((food) => `<li><b>${esc(food.name)}</b><span>×${items[food.id]}</span></li>`).join("")}</ul>`;
}

function sideText(items, zone, empty) {
  const rows = FOODS.filter((food) => food.zone === zone && items[food.id] > 0);
  if (!rows.length) return empty;
  return rows.map((food) => `${esc(food.name)} ×${items[food.id]}`).join("、");
}

function segment(name, options, current, mealKey) {
  return `<div class="segment" role="group" aria-label="${esc(name)}">${options.map((option) => `
    <button type="button" data-set="${mealKey}" data-value="${option.id}" aria-pressed="${current === option.id}">${esc(option.name)}</button>
  `).join("")}</div>`;
}

function plateHtml(mealId) {
  const meal = state.meals[mealId];
  const mealName = MEALS.find((item) => item.id === mealId).name;
  return `<section class="card plate-card">
    <h2>${mealName}的餐盘</h2>
    <p class="hint">四格是这一餐。奶和坚果放在旁边。宝塔统计的是一整天。</p>
    <div class="plate-row">
      <div class="plate" aria-label="${mealName}餐盘">
        <div class="quad grain"><span class="quad-label">谷薯</span>${chipsHtml(meal.items, "grain")}</div>
        <div class="quad veg"><span class="quad-label">蔬菜</span>${chipsHtml(meal.items, "veg")}</div>
        <div class="quad protein"><span class="quad-label">鱼禽蛋豆</span>${chipsHtml(meal.items, "protein")}</div>
        <div class="quad fruit"><span class="quad-label">水果</span>${chipsHtml(meal.items, "fruit")}</div>
      </div>
      <div class="side-col">
        <div class="cup"><strong>奶</strong><span>${sideText(meal.items, "milk", "还没有")}</span></div>
        <div class="nut-dish"><strong>坚果</strong><span>${sideText(meal.items, "nut", "还没有")}</span></div>
      </div>
    </div>
    <div class="controls">
      <div class="control-block">
        <span class="control-label">这一餐怎么做</span>
        ${segment("做法", COOKS, meal.cook, "cook")}
      </div>
      <div class="control-block">
        <span class="control-label">这一餐咸淡</span>
        ${segment("口味", TASTES, meal.taste, "taste")}
      </div>
      <div class="control-block">
        <span class="control-label">这一餐喝什么</span>
        ${segment("饮料", DRINKS, meal.drink, "drink")}
      </div>
    </div>
    <div class="demo-actions">
      <button type="button" class="primary" data-action="sample">填入示例的一天</button>
      <button type="button" data-action="clear">清空</button>
    </div>
  </section>`;
}

function pagodaHtml(totals) {
  const body = layers(totals).map((layer) => `
    <div class="layer" style="width:${layer.width}">
      <div class="layer-fill ${layer.tone}" style="width:${layer.fill}%"></div>
      <div class="layer-text">
        <div><b>${layer.name}</b><small>${esc(layer.detail)}</small></div>
        <span class="pill ${layer.tone}">${toneLabel(layer.tone)}</span>
      </div>
    </div>
  `).join("");
  return `<section class="card pagoda-card">
    <h2>一整天的宝塔</h2>
    <p class="hint">对照的是大约 1600～2400 千卡的一般成年人。条带变满，表示到了建议量的下限。</p>
    <div class="pagoda" aria-label="平衡膳食宝塔">
      <div class="roof" aria-hidden="true"></div>
      ${body}
    </div>
    <p class="estimate">蒸或煮按大约 5 克油，炒大约 10 克，煎或炸大约 15 克。清淡、家常、偏咸按大约 0.8、1.6、2.6 克盐。含糖饮料按一杯大约 28 克添加糖。只有摆上了食物的那一餐才会计入。</p>
  </section>`;
}

function insightsHtml(insights) {
  return `<section class="card insights ${insights.tone}" aria-live="polite">
    <h2>${esc(insights.headline)}</h2>
    <ul>${insights.lines.map((line) => `<li><span class="kicker">${esc(line.rule)}</span><p>${esc(line.text)}</p></li>`).join("")}</ul>
  </section>`;
}

function foodsHtml() {
  const meal = state.meals[state.meal];
  const groups = GROUPS.map((group) => {
    const cards = FOODS.filter((food) => food.group === group).map((food) => {
      const count = meal.items[food.id] || 0;
      return `<div class="food ${count ? "is-on" : ""}">
        <button type="button" class="food-add" data-add="${food.id}">
          <span class="swatch" style="--swatch:${food.swatch}"></span>
          <span><strong>${esc(food.name)}</strong><small>${esc(food.meta)}</small></span>
          <em class="qty">${count ? `×${count}` : ""}</em>
        </button>
        ${count ? `<button type="button" class="food-sub" data-sub="${food.id}" aria-label="减少一份${esc(food.name)}">−</button>` : ""}
      </div>`;
    }).join("");
    return `<div class="group"><h3>${group}</h3><div class="foods">${cards}</div></div>`;
  }).join("");
  return `<section class="picker">
    <div class="picker-head">
      <h2>食物</h2>
      <p>点一下加一份，角上的减号拿掉一份。份量按指南换算，不能再拆。</p>
    </div>
    ${groups}
  </section>`;
}

function guideHtml() {
  if (!state.guideOpen) return "";
  return `<section class="guide-panel" id="guide-panel">
    <h2>今天这盘饭怎么玩</h2>
    <p>把早餐、午餐和晚餐摆进餐盘。宝塔变满，并且食盐、烹调油、添加糖停在限度内，就说明这一天靠近平衡膳食。对照的是大约 1600～2400 千卡的一般成年人，不是个人饮食处方。</p>
    <h2>画面</h2>
    <ul>
      <li>三餐切换只改当前餐盘。有食物的那一餐，标签上有一个小点。</li>
      <li>食盐、烹调油、添加糖和食物种类，统计的是一整天。</li>
      <li>餐盘四格是谷薯、蔬菜、鱼禽蛋豆、水果，旁边是奶和坚果。</li>
      <li>宝塔把三餐加在一起。还缺、可调整、合适、偏多四个词标在每一层旁边。条带变满只表示到了下限，不是越多越好。</li>
    </ul>
    <h2>操作</h2>
    <ul>
      <li>点食物加一份，角上的减号拿掉一份。同一餐里同一种最多 6 份。</li>
      <li>每一餐可以改做法、咸淡和喝什么。</li>
      <li>新的一餐默认是炒、家常、白水或茶。餐盘还空着时，这三个先不计。放上任意一种食物后，油、盐和饮料里的糖就计入全天。</li>
      <li>填入示例的一天，用来看靠近宝塔的样子。清空回到空白。</li>
      <li>早餐的蔬菜格可以空着。午餐和晚餐补上以后，宝塔里的蔬菜仍然可以是合适。</li>
    </ul>
    <h2>一份是多少</h2>
    <p>份量固定。同一种点两次是两份，种类仍然只算 1 种。</p>
    <div class="guide-table-wrap">
      <table>
        <thead><tr><th>食物</th><th>一份</th><th>怎么计入</th></tr></thead>
        <tbody>
          <tr><td>白米饭、馒头</td><td>各 50 克</td><td>精制谷类</td></tr>
          <tr><td>糙米、燕麦、小米、玉米、荞麦、红豆</td><td>各 50 克</td><td>谷类，同时算全谷物。红豆按杂豆计</td></tr>
          <tr><td>红薯、土豆</td><td>各 70 克</td><td>薯类，不占谷类那 200 克</td></tr>
          <tr><td>青菜、菠菜、西兰花、番茄</td><td>各 100 克</td><td>深色蔬菜</td></tr>
          <tr><td>胡萝卜</td><td>80 克</td><td>深色蔬菜</td></tr>
          <tr><td>大白菜、黄瓜</td><td>各 100 克</td><td>浅色蔬菜</td></tr>
          <tr><td>香菇</td><td>80 克</td><td>菌类，算蔬菜，不算深色</td></tr>
          <tr><td>苹果、梨、橙子、葡萄</td><td>各 150 克</td><td>水果</td></tr>
          <tr><td>香蕉、猕猴桃</td><td>各 100 克</td><td>水果</td></tr>
          <tr><td>鱼、虾、鸡肉、鸭肉、瘦猪肉、瘦牛肉、鸡蛋</td><td>各 50 克</td><td>鱼虾算水产，鸡鸭猪牛算禽畜。鸡蛋大约一个，含蛋黄</td></tr>
          <tr><td>北豆腐</td><td>60 克</td><td>大约相当于大豆 20 克</td></tr>
          <tr><td>豆腐干</td><td>45 克</td><td>大约相当于大豆 20 克</td></tr>
          <tr><td>豆浆</td><td>300 克</td><td>大约相当于大豆 20 克</td></tr>
          <tr><td>火腿肠</td><td>40 克</td><td>加工肉，自带约 1.2 克盐和 6 克油</td></tr>
          <tr><td>牛奶</td><td>300 毫升</td><td>奶</td></tr>
          <tr><td>酸奶</td><td>150 毫升</td><td>奶。两杯大约到 300 毫升</td></tr>
          <tr><td>坚果、核桃、花生</td><td>各 10 克</td><td>大约一小把。种类分开算</td></tr>
        </tbody>
      </table>
    </div>
    <h2>做法、咸淡、饮料</h2>
    <p>这是估算，用来看出差别。酱油、咸菜和外卖浇汁没有单独的卡片，算在咸淡里。</p>
    <div class="guide-table-wrap">
      <table>
        <thead><tr><th>选择</th><th>这一餐大约加上</th></tr></thead>
        <tbody>
          <tr><td>蒸或煮</td><td>油 5 克</td></tr>
          <tr><td>炒</td><td>油 10 克</td></tr>
          <tr><td>煎或炸</td><td>油 15 克</td></tr>
          <tr><td>清淡</td><td>盐 0.8 克</td></tr>
          <tr><td>家常</td><td>盐 1.6 克</td></tr>
          <tr><td>偏咸</td><td>盐 2.6 克</td></tr>
          <tr><td>白水或茶</td><td>添加糖 0</td></tr>
          <tr><td>含糖饮料</td><td>添加糖 28 克</td></tr>
        </tbody>
      </table>
    </div>
    <h2>一天怎样算合适</h2>
    <div class="guide-table-wrap">
      <table>
        <thead><tr><th>项目</th><th>合适</th></tr></thead>
        <tbody>
          <tr><td>谷类</td><td>200～300 克，其中全谷物 50～150 克</td></tr>
          <tr><td>薯类</td><td>50～100 克</td></tr>
          <tr><td>蔬菜</td><td>至少 300 克，深色至少一半</td></tr>
          <tr><td>水果</td><td>200～350 克</td></tr>
          <tr><td>鱼禽蛋瘦肉</td><td>合计 120～200 克；禽畜肉大约不超过 75 克</td></tr>
          <tr><td>奶</td><td>300～500 毫升</td></tr>
          <tr><td>大豆</td><td>大约 15～25 克。豆腐和豆浆按大豆折，不要按盘子上的克数相加</td></tr>
          <tr><td>坚果</td><td>大约 10 克</td></tr>
          <tr><td>食盐、烹调油、添加糖</td><td>不超过 5 克、30 克、25 克。油的建议是 25～30 克，不到 25 克不算失败</td></tr>
          <tr><td>种类</td><td>至少 12 种。加工肉只要出现就会提醒少吃</td></tr>
        </tbody>
      </table>
    </div>
    <h2>比较接近</h2>
    <p>三餐都摆了食物，并且谷薯、蔬菜、水果、鱼禽蛋瘦肉、奶、大豆、坚果和种类都在范围内，有鱼也有蛋，没有加工肉和含糖饮料，盐、油、糖也不超，页面会写成「这一天和平衡膳食比较接近」。少任何一餐，只会说还差几餐没摆。</p>
    <h2>示例的一天</h2>
    <ul>
      <li>早餐：蒸或煮、清淡、白水。燕麦、鸡蛋、牛奶、苹果各 1 份。</li>
      <li>午餐：炒、清淡、白水。白米饭 2 份，鱼、北豆腐各 1 份，青菜 2 份。</li>
      <li>晚餐：炒、清淡、白水。糙米、红薯、鸡肉、西兰花、大白菜、橙子、坚果各 1 份。</li>
    </ul>
    <p>加总大约是 15 种食物，蔬菜 400 克且深色约占 75%，食盐 2.4 克，烹调油 25 克，添加糖 0。</p>
  </section>`;
}

function render() {
  const guideScroll = document.querySelector(".guide-panel")?.scrollTop || 0;
  const totals = dayTotals();
  const insights = buildInsights(totals);
  const mealButtons = MEALS.map((meal) => {
    const on = meal.id === state.meal;
    const marked = mealHasFood(state.meals[meal.id]);
    return `<button type="button" role="tab" aria-selected="${on}" data-meal="${meal.id}">${meal.name}${marked ? `<span class="dot" aria-hidden="true"></span>` : ""}</button>`;
  }).join("");
  document.getElementById("app").innerHTML = `
    <header class="hero">
      <div class="seal" aria-hidden="true">膳</div>
      <div class="hero-copy">
        <p class="eyebrow">平衡膳食 · 摆一餐</p>
        <h1>今天这盘饭</h1>
        <p class="lede">按《中国居民膳食指南（2022）》，把早餐、午餐和晚餐摆进餐盘。<br>盐、油、糖和食物种类，会累进同一座宝塔。</p>
      </div>
      <button type="button" class="guide-toggle" data-action="guide" aria-expanded="${state.guideOpen}" aria-controls="guide-panel">${state.guideOpen ? "收起指南" : "游戏指南"}</button>
    </header>
    ${guideHtml()}
    <div class="sticky">
      <div class="meal-switch" role="tablist">${mealButtons}</div>
      <div class="meters">${metersHtml(totals)}</div>
      <p class="sticky-line">${esc(insights.headline)}</p>
    </div>
    <div class="layout">
      ${plateHtml(state.meal)}
      <div class="side">
        ${pagodaHtml(totals)}
        ${insightsHtml(insights)}
      </div>
    </div>
    ${foodsHtml()}
    <footer class="foot">
      <p>克数对应指南里能量需要大约 1600～2400 千卡的一般成年人，用来理解平衡膳食，不是个人饮食处方，也不能代替医生或临床营养师的建议。油、盐和添加糖是按做法、口味和一杯甜饮料估算的，真实菜肴差别很大。婴幼儿、孕期、高龄老年人和慢性病饮食没有放进计分。</p>
    </footer>
  `;
  const panel = document.querySelector(".guide-panel");
  if (panel) panel.scrollTop = guideScroll;
}

function changeCount(foodId, delta) {
  const meal = state.meals[state.meal];
  const next = (meal.items[foodId] || 0) + delta;
  if (next <= 0) delete meal.items[foodId];
  else meal.items[foodId] = Math.min(MAX_PER_MEAL, next);
  render();
}

function onClick(event) {
  const target = event.target.closest("button");
  if (!target) return;
  if (target.dataset.meal) {
    state.meal = target.dataset.meal;
    render();
    return;
  }
  if (target.dataset.add) {
    changeCount(target.dataset.add, 1);
    return;
  }
  if (target.dataset.sub) {
    changeCount(target.dataset.sub, -1);
    return;
  }
  if (target.dataset.set) {
    state.meals[state.meal][target.dataset.set] = target.dataset.value;
    render();
    return;
  }
  if (target.dataset.action === "sample") {
    state.meals = {
      breakfast: structuredClone(SAMPLE.breakfast),
      lunch: structuredClone(SAMPLE.lunch),
      dinner: structuredClone(SAMPLE.dinner)
    };
    state.meal = "breakfast";
    render();
    return;
  }
  if (target.dataset.action === "clear") {
    state.meals = { breakfast: emptyMeal(), lunch: emptyMeal(), dinner: emptyMeal() };
    state.meal = "breakfast";
    render();
    return;
  }
  if (target.dataset.action === "guide") {
    state.guideOpen = !state.guideOpen;
    writeGuideOpen(state.guideOpen);
    render();
  }
}

function sampleState() {
  return {
    meal: "breakfast",
    meals: {
      breakfast: structuredClone(SAMPLE.breakfast),
      lunch: structuredClone(SAMPLE.lunch),
      dinner: structuredClone(SAMPLE.dinner)
    }
  };
}

document.getElementById("app").addEventListener("click", onClick);
render();

window.PlateDebug = {
  dayTotals,
  buildInsights,
  sampleState,
  FOODS
};
