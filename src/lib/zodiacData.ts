export type ZodiacInfo = {
  id: number; // 0 for Rat, 1 for Ox, etc.
  icon: string;
  name: { zh: string; en: string };
  story: { zh: string; en: string };
  traits: {
    pos: { zh: string; en: string };
    neg: { zh: string; en: string };
    keywords: { zh: string; en: string };
  };
};

export const ZODIACS: ZodiacInfo[] = [
  {
    id: 0,
    icon: '🐭',
    name: { zh: '鼠 (Rat)', en: 'Rat' },
    story: {
      zh: '老鼠深知自己身形弱小，在奔跑和游泳毫无优势。夜深时它找到了猫提议一同出发，清晨却悄然独行。来到河边，老鼠面对滔滔江水，灵机一动跳上老牛背，轻声说帮牛看路。过河后就在牛即将踏上岸的一瞬间，老鼠猛地一跃抢先落地，成为第一个进入天门的动物。',
      en: 'The rat knew it was small and weak, at a disadvantage in running and swimming. It suggested traveling together with the cat but snuck out alone at dawn. Encountering a wide river, the quick-witted rat jumped onto the ox\'s back, offering to navigate. Just as the ox reached the riverbank, the rat leaped forward, landing first and claiming the top spot in the zodiac.'
    },
    traits: {
      pos: { zh: '聪明、反应快、善于把握时机', en: 'Smart, quick-witted, great at seizing opportunities' },
      neg: { zh: '有时容易患得患失、过于计较细节', en: 'Sometimes worries about gains and losses, overly detail-oriented' },
      keywords: { zh: '策略灵活、生存能力强、目光敏锐', en: 'Strategic, adaptable, perceptive' },
    }
  },
  {
    id: 1,
    icon: '🐮',
    name: { zh: '牛 (Ox)', en: 'Ox' },
    story: {
      zh: '牛从不与人争。早早就默默下水，河水湍急，它低着头稳稳向前。当老鼠跳上它背时，它没有驱赶，只是继续前行。就在它以为自己将成为第一时，老鼠却抢先一步。牛没有愤怒也没有抱怨，只是平静地上岸。玉皇大帝赞叹它：“你虽第二，却最有德。”',
      en: 'The ox never argued. It steadily plunged into the fierce river early on. When the rat hopped on its back, the ox simply kept going, focused on reaching the other side. Though the rat jumped ahead at the last second, taking first place, the ox showed no anger or complaint. The Jade Emperor praised it: "You are second, but the most virtuous."'
    },
    traits: {
      pos: { zh: '勤奋、可靠、踏实、有耐力', en: 'Diligent, dependable, grounded, enduring' },
      neg: { zh: '偶尔有些认死理，不太愿意轻易改变', en: 'Occasionally set in their ways, hesitant to change' },
      keywords: { zh: '坚持、责任感强、长期主义', en: 'Perseverable, deeply responsible, long-term focus' },
    }
  },
  {
    id: 2,
    icon: '🐯',
    name: { zh: '虎 (Tiger)', en: 'Tiger' },
    story: {
      zh: '尽管被称为山中之王，虎知道真正的王者必须经得起考验。它毫不犹豫冲入猛烈的河水中，一次次被激流冲退，但它从不放弃。它怒吼着再次跃入水中，用利爪和力量对抗自然，最终冲破水流成功上岸，赢得了所有动物的敬畏。',
      en: 'Despite being the king of the forest, the tiger knew true kings must prove themselves. It dove straight into the raging river. The fierce currents pushed it back repeatedly, but the tiger refused to quit. Roaring, it fought the waters with powerful claws and immense strength, eventually bursting onto the shore and earning the awe of all animals.'
    },
    traits: {
      pos: { zh: '勇敢、果断、自带气场', en: 'Brave, decisive, natural leader' },
      neg: { zh: '偶尔过于急躁，有些争强好胜', en: 'Occasionally overly eager, strongly competitive' },
      keywords: { zh: '力量、威望、富有冒险精神', en: 'Strength, authority, adventurous' },
    }
  },
  {
    id: 3,
    icon: '🐰',
    name: { zh: '兔 (Rabbit)', en: 'Rabbit' },
    story: {
      zh: '兔子既不会游泳又没有力量，但它不愿放弃。它在河岸边发现了露出水面的石头，精准地跳跃前行。中途石头断开险些落水时，它抓住了一根漂浮的树枝，借着水流克服了漫长危险的漂流，最终成功上岸。',
      en: 'The rabbit couldn\'t swim and lacked strength, yet refused to give up. It spotted stones protruding from the river and leaped precisely from one to another. When the path broke, it grabbed a floating log, drifting through the dangerous currents until it safely reached the far bank through sheer resourcefulness.'
    },
    traits: {
      pos: { zh: '谨慎、细腻、善于思考与感受', en: 'Cautious, thoughtful, highly empathetic' },
      neg: { zh: '思虑较多、偶尔缺乏安全感', en: 'Overthinks at times, occasionally lacks a sense of security' },
      keywords: { zh: '适应力好、心思缜密、懂得规避风险', en: 'Adaptable, detail-oriented, risk-aware' },
    }
  },
  {
    id: 4,
    icon: '🐲',
    name: { zh: '龙 (Dragon)', en: 'Dragon' },
    story: {
      zh: '龙是唯一能飞的，本可轻松夺冠。但途中它看到大地干裂，便停下脚步降下甘霖。后来又看到兔子在水中遇险，便吹风将它送上岸。当抵达天门时名次已落后。玉皇大帝问为何不争第一，它答复：“众生更重要。”',
      en: 'As the only flying animal, the dragon could have easily won. But seeing a drought-stricken village on the way, it stopped to make rain. Later, it spotted the rabbit struggling in the water and blew a gust of wind to help it ashore. Arriving late, the Emperor asked why it didn\'t take first place. The dragon replied, "The suffering of living beings was more important."'
    },
    traits: {
      pos: { zh: '大气、有责任心、格局宽广', en: 'Magnanimous, responsible, visionary' },
      neg: { zh: '追求完美、偶尔有些不切实际', en: 'Perfectionist, occasionally sets unrealistic expectations' },
      keywords: { zh: '大局观、奉献精神、使命感强', en: 'Big-picture thinker, altruistic, mission-driven' },
    }
  },
  {
    id: 5,
    icon: '🐍',
    name: { zh: '蛇 (Snake)', en: 'Snake' },
    story: {
      zh: '蛇知道自己游得快却怕急流，于是悄悄缠在了马的腿上。当马即将上岸时，蛇突然窜出，拔得头筹排在了马前面。凭借伪装和审时度势，它成功拿到了生肖第六的位置。',
      en: 'The snake was a fast swimmer but feared the fierce rapids, so it discreetly wrapped itself around the horse\'s leg. Just as the horse was about to step onto the riverbank, the snake slithered forward, surprising the horse and crossing the finish line first, securing the sixth spot through awareness and timing.'
    },
    traits: {
      pos: { zh: '智慧、敏锐、充满神秘感', en: 'Wise, perceptive, wonderfully mysterious' },
      neg: { zh: '防备心较重、外表容易显得疏远', en: 'Defensive, exterior can occasionally appear distant' },
      keywords: { zh: '洞察力强、为人沉着、直觉极佳', en: 'Insightful, composed, uncommonly intuitive' },
    }
  },
  {
    id: 6,
    icon: '🐴',
    name: { zh: '马 (Horse)', en: 'Horse' },
    story: {
      zh: '马在水中奔腾驰骋，原本遥遥领先。但快到终点时，隐藏在它身上搭便车的蛇突然跃出。马受惊后撤了一步散了势头，只得屈居第七，却也因它那率直真奔的性格让人铭记。',
      en: 'Galloping through the waters, the horse was making great time and seemed destined for a high rank. Near the finish line, the sneaky snake suddenly darted out from its hiding spot. Startled, the horse reared back, losing momentum and finishing seventh, but remaining admired for its straightforward and passionate spirit.'
    },
    traits: {
      pos: { zh: '热情、奔放、独立且有冲劲', en: 'Enthusiastic, free-spirited, independent, driven' },
      neg: { zh: '偶尔缺乏耐心、容易在小事上急进', en: 'Occasionally lacks patience, can be eager over small details' },
      keywords: { zh: '热爱自由、充满活力、行动力十足', en: 'Freedom-loving, energetic, action-oriented' },
    }
  },
  {
    id: 7,
    icon: '🐐',
    name: { zh: '羊 (Goat)', en: 'Goat' },
    story: {
      zh: '羊、猴、鸡三只动物都不会游泳。鸡找来了一块横木，猴和羊帮忙把它推下水。三人齐心协力向对岸划去，彼此鼓励。靠岸后，大家推让一番，温和善良的羊首先上岸，排在了第八。',
      en: 'The goat, monkey, and rooster couldn\'t swim. The rooster found a wooden board, while the monkey and goat helped push it into the water. Working together in harmony, they paddled across the river. Upon reaching the shore, they politely deferred to each other, yielding the eighth place to the gentle and kind goat.'
    },
    traits: {
      pos: { zh: '温和、包容、富有极强的同情心', en: 'Gentle, forgiving, highly empathetic' },
      neg: { zh: '思虑较多、遇到选择时容易摇摆不定', en: 'Tends to overthink, might waver when making choices' },
      keywords: { zh: '内心柔软、重视团队、性格内敛', en: 'Kind-hearted, team player, softly spoken' },
    }
  },
  {
    id: 8,
    icon: '🐵',
    name: { zh: '猴 (Monkey)', en: 'Monkey' },
    story: {
      zh: '聪明机智的猴子与羊、鸡一起乘坐木排过河。在途中发挥了它灵活应变的特长，在急流中不断调整重心，确保木排平稳。紧跟着羊之后，猴子活蹦乱跳地上了岸，排在第九。',
      en: 'The clever monkey rode the wooden board across the river with the goat and rooster. It used its agility to keep the raft balanced whenever the strong currents threatened to flip them. Following right after the goat, the vibrant monkey happily hopped onto the shore in ninth place.'
    },
    traits: {
      pos: { zh: '机智、灵活、幽默且富有创意', en: 'Clever, flexible, humorous, highly innovative' },
      neg: { zh: '兴趣跳跃较快、偶尔有些难以定心', en: 'Interests shift quickly, occasionally hard to settle down' },
      keywords: { zh: '聪明外露、思路多变、适应力极强', en: 'Intelligent, versatile, deeply adaptable' },
    }
  },
  {
    id: 9,
    icon: '🐔',
    name: { zh: '鸡 (Rooster)', en: 'Rooster' },
    story: {
      zh: '是鸡首先在河边发现了那块可以救命的木排，它不仅有出色的观察力，还在渡河中如同指挥官一样协调大家。尽管最后上了岸只排名第十，它仍为自己的贡献感到无比骄傲。',
      en: 'It was the observant rooster who first spotted the life-saving wooden board. Acting as a conductor, it organized the group\'s efforts to paddle across the river safely. Even though it stepped onto the land tenth, the rooster crowed with pride for a job well done.'
    },
    traits: {
      pos: { zh: '勤奋、自信、做事有条理和责任感', en: 'Hard-working, confident, organized, deeply responsible' },
      neg: { zh: '标准较高、偶尔容易让人觉得有些严苛', en: 'Holds high standards, occasionally perceived as a bit strict' },
      keywords: { zh: '热爱秩序、乐于表现、实干家', en: 'Orderly, expressive, highly practical' },
    }
  },
  {
    id: 10,
    icon: '🐶',
    name: { zh: '狗 (Dog)', en: 'Dog' },
    story: {
      zh: '狗本来是个游泳的好手，完全可以名列前茅。但水流清澈凉爽，让它忍不住在水里痛快地洗了个澡，尽情嬉戏忘了比赛。等它洗完澡跑上岸时，只能排到第十一名。',
      en: 'As a strong swimmer, the dog could have easily placed much higher. However, the cool, clear water was too tempting. It couldn\'t resist the urge to take a refreshing bath and play in the river, entirely forgetting about the race until it finished eleventh.'
    },
    traits: {
      pos: { zh: '忠诚、直率、具有强烈的正义感', en: 'Loyal, straightforward, strong sense of justice' },
      neg: { zh: '性格过于直爽、偶尔可能不太顾忌他人感受', en: 'Very upfront, occasionally overlooks nuances in others\' feelings' },
      keywords: { zh: '待人真诚、默默守护、值得信赖', en: 'Sincere, protective, deeply dependable' },
    }
  },
  {
    id: 11,
    icon: '🐷',
    name: { zh: '猪 (Pig)', en: 'Pig' },
    story: {
      zh: '猪在比赛中途觉得肚子饿了，便停下来大吃了一顿。吃饱后睡意袭来又呼呼大睡了一觉。等到它醒来慢悠悠游过河时，成为了最后一个到达的生肖，但它依然满脸开心、心满意足。',
      en: 'Halfway through the race, the pig felt very hungry and stopped for a feast. After eating heavily, it felt sleepy and took a long nap. By the time it finally woke up and paddled across the river, it was the last arrival. Yet, it remained perfectly content and happy.'
    },
    traits: {
      pos: { zh: '乐观、豁达、善良且常有福气相伴', en: 'Optimistic, open-minded, deeply kind, fortunate' },
      neg: { zh: '比较随性、偶尔容易安于现状', en: 'Very easy-going, occasionally prone to settling for the status quo' },
      keywords: { zh: '懂得知足、享受生活、为人纯真', en: 'Content, pleasure-seeking, genuinely pure' },
    }
  }
];
