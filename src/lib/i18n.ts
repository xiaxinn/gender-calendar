export type Locale = 'zh' | 'en';

export interface Translations {
  locale: Locale;
  siteName: string;
  title: string;
  metaDescription: string;
  metaKeywords: string;
  heroTitle: string;
  heroSubtitle: string;
  formTitle: string;
  labelLunarAge: string;
  labelLunarAgeHint: string;
  labelMonth: string;
  labelBirthYear: string;
  labelConceptionYear: string;
  placeholderLunarAge: string;
  placeholderMonth: string;
  btnPredict: string;
  btnCalcAge: string;
  resultBoy: string;
  resultGirl: string;
  resultPredictionLabel: string;
  resultConfidence: string;
  disclaimer: string;
  tableTitle: string;
  tableAgeLabel: string;
  monthShort: string[];
  monthFull: string[];
  ageUnit: string;
  helpTitle: string;
  helpText: string;
  helpNote: string;
  calcLunarAge: string;
  boyLabel: string;
  girlLabel: string;
  backToTop: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];
  zodiacPredictionTitle: string;
  zodiacStoryTitle: string;
  zodiacTraitsTitle: string;
  zodiacPros: string;
  zodiacCons: string;
  backgroundTitle: string;
  backgroundP1: string;
  backgroundP2: string;
  backgroundTags: string[];
}

const zh: Translations = {
  locale: 'zh',
  siteName: '中国性别日历',
  title: '中国性别日历 - 宝宝性别预测器',
  metaDescription: '使用中国性别日历预测宝宝性别！根据母亲受孕时的虚岁和受孕月份，在线快速准确推算是男孩还是女孩。',
  metaKeywords: '中国性别日历,宝宝性别预测,胎儿性别预测,生男生女,受孕月份,虚岁,性别预测器',
  heroTitle: '中国性别日历',
  heroSubtitle: '古老智慧 · 轻松预测宝宝性别',
  formTitle: '宝宝性别预测',
  labelLunarAge: '受孕时母亲虚岁',
  labelLunarAgeHint: '(通常为周岁+1，例如周岁24填25)',
  labelMonth: '受孕月份（农历/公历）',
  labelBirthYear: '母亲出生年份',
  labelConceptionYear: '受孕年份',
  placeholderLunarAge: '请选择虚岁（18-45岁）',
  placeholderMonth: '请选择月份',
  btnPredict: '预测性别',
  btnCalcAge: '计算虚岁',
  resultBoy: '男孩 👦',
  resultGirl: '女孩 👧',
  resultPredictionLabel: '预测结果',
  resultConfidence: '根据中国性别日历预测',
  disclaimer: '⚠️ 温馨提示：中国性别日历源自清朝宫廷，仅供娱乐参考，不具有医学依据。如需准确了解宝宝性别，请咨询医生进行B超检查。',
  tableTitle: '完整中国性别日历表',
  tableAgeLabel: '虚岁',
  monthShort: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
  monthFull: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
  ageUnit: '岁',
  helpTitle: '不知道您的虚岁？',
  helpText: '请输入出生年份和受孕年份，系统将自动计算您的虚岁。',
  helpNote: '虚岁 = 受孕年份 - 出生年份 + 1',
  calcLunarAge: '自动计算虚岁',
  boyLabel: '男',
  girlLabel: '女',
  backToTop: '回到顶部',
  faqTitle: '常见问题',
  zodiacPredictionTitle: '宝宝生肖预测',
  zodiacStoryTitle: '生肖传说小故事',
  zodiacTraitsTitle: '生肖性格特点',
  zodiacPros: '优点',
  zodiacCons: '缺点',
  backgroundTitle: 'Chinese Gender Calendar（清宫图）背景',
  backgroundP1: 'Chinese Gender Calendar（清宫图），又称 Chinese Gender Chart 或 Chinese Baby Gender Predictor，是一种源自中国传统文化的性别预测方法。该方法通常被认为起源于清朝，并与阴阳五行等传统理论相关联，因此也常被称为一种"ancient Chinese gender prediction method"。',
  backgroundP2: 'Chinese Gender Calendar 的核心逻辑基于两个关键因素：lunar age（农历年龄）和 conception month（受孕月份）。用户通过将这两个数据匹配到 Chinese Gender Chart（清宫图对照表）中，即可获得预测结果（boy or girl）。这种简单直观的使用方式，使得 Chinese gender predictor / gender prediction chart 在全球范围内持续受到关注。',
  backgroundTags: ['Chinese Gender Calendar', 'Chinese Gender Chart', 'Chinese Baby Gender Predictor', '农历年龄 (Lunar Age)', '受孕月份 (Conception Month)', '古代性别预测法'],
  faqs: [
    {
      q: '中国性别日历准确吗？',
      a: '中国性别日历是一种有趣的传统文化方式，源自清朝宫廷。科学研究表明其准确率与随机猜测相近（约50%）。仅供娱乐，不作为医学依据。',
    },
    {
      q: '什么是虚岁？',
      a: '虚岁是中国传统的计龄方式：出生时即为1岁，每过一个农历新年增加1岁。简单估算：虚岁 = 当前年份 - 出生年份 + 1。',
    },
    {
      q: '应该使用哪个月份？',
      a: '使用受孕发生的公历月份。如果不确定，可使用末次月经后约两周（排卵期）所在的月份。',
    },
    {
      q: '双胞胎可以使用这个日历吗？',
      a: '中国性别日历是针对单胎设计的。双胞胎因受孕日期相近，预测结果仅供参考。',
    },
  ],
};

const en: Translations = {
  locale: 'en',
  siteName: 'Chinese Gender Calendar',
  title: 'Chinese Gender Calendar - Baby Gender Predictor',
  metaDescription: 'Predict your baby\'s gender with the ancient Chinese Gender Calendar! Enter the mother\'s lunar age and conception month to find out if it\'s a boy or girl.',
  metaKeywords: 'Chinese gender calendar, baby gender predictor, Chinese birth chart, boy or girl, conception month, lunar age',
  heroTitle: 'Chinese Gender Calendar',
  heroSubtitle: 'Ancient Wisdom · Predict Your Baby\'s Gender',
  formTitle: 'Baby Gender Predictor',
  labelLunarAge: 'Mother\'s Lunar Age at Conception',
  labelLunarAgeHint: '(usually age + 1, e.g., 24 -> 25)',
  labelMonth: 'Conception Month',
  labelBirthYear: 'Mother\'s Birth Year',
  labelConceptionYear: 'Conception Year',
  placeholderLunarAge: 'Select lunar age (18–45)',
  placeholderMonth: 'Select month',
  btnPredict: 'Predict Gender',
  btnCalcAge: 'Calculate Lunar Age',
  resultBoy: 'Boy 👦',
  resultGirl: 'Girl 👧',
  resultPredictionLabel: 'Prediction Result',
  resultConfidence: 'Based on the Chinese Gender Calendar',
  disclaimer: '⚠️ Disclaimer: The Chinese Gender Calendar is a cultural tradition from the Qing Dynasty intended for entertainment only. It has no medical basis. For accurate gender information, consult your doctor.',
  tableTitle: 'Complete Chinese Gender Calendar Chart',
  tableAgeLabel: 'Lunar Age',
  monthShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  monthFull: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  ageUnit: '',
  helpTitle: "Don't know your lunar age?",
  helpText: 'Enter your birth year and conception year and we\'ll calculate your lunar age automatically.',
  helpNote: 'Lunar Age = Conception Year − Birth Year + 1',
  calcLunarAge: 'Calculate Lunar Age',
  boyLabel: 'Boy',
  girlLabel: 'Girl',
  backToTop: 'Back to Top',
  faqTitle: 'Frequently Asked Questions',
  zodiacPredictionTitle: 'Baby Zodiac Sign Prediction',
  zodiacStoryTitle: 'The Legend of Zodiac',
  zodiacTraitsTitle: 'Personality Traits',
  zodiacPros: 'Strengths',
  zodiacCons: 'Weaknesses',
  backgroundTitle: 'About the Chinese Gender Calendar (Qing Palace Chart)',
  backgroundP1: 'The Chinese Gender Calendar, also known as the Chinese Gender Chart or Chinese Baby Gender Predictor, is a gender prediction method rooted in traditional Chinese culture. It is widely believed to have originated during the Qing Dynasty and is associated with classical theories such as Yin-Yang and the Five Elements — which is why it is often referred to as an "ancient Chinese gender prediction method."',
  backgroundP2: "The core logic of the Chinese Gender Calendar is based on two key factors: the mother's lunar age at conception and the conception month. By matching these two data points against the Chinese Gender Chart, users can obtain a predicted result (boy or girl). This simple and intuitive approach has made the Chinese gender predictor and gender prediction chart a topic of ongoing global interest.",
  backgroundTags: ['Chinese Gender Calendar', 'Chinese Gender Chart', 'Chinese Baby Gender Predictor', 'Lunar Age', 'Conception Month', 'Ancient Chinese Prediction'],
  faqs: [
    {
      q: 'How accurate is the Chinese Gender Calendar?',
      a: 'The Chinese Gender Calendar is a fun cultural tradition originating from the Qing Dynasty court. Scientific studies show its accuracy is around 50%, similar to a coin flip. It is for entertainment purposes only.',
    },
    {
      q: 'What is lunar age?',
      a: 'Lunar age is a traditional Chinese way of counting age: you are 1 year old at birth, and gain a year with each Chinese New Year. A simplified estimate: Lunar Age = Current Year − Birth Year + 1.',
    },
    {
      q: 'Which month should I use?',
      a: 'Use the Gregorian calendar month in which conception occurred. If unsure, use the month approximately two weeks after your last menstrual period (ovulation window).',
    },
    {
      q: 'Can I use this for twins?',
      a: 'The Chinese Gender Calendar was designed for single pregnancies. For twins, since conception dates are very close, use the result for entertainment only.',
    },
  ],
};

export const translations: Record<Locale, Translations> = { zh, en };

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations.zh;
}
