export interface Question {
  [key: string]: string;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const questions = [
  {
    RECIFE:
      '(Brazil) City and port, capital of Pernambuco state, at the mouth of the Capibaribe River, at the easternmost point of South America. Often called the Venice of Brazil, it was founded in 1548 by the Portuguese and served as the port for nearby Olinda.',
  },
  {
    QUANTICO:
      'Town, Prince William county, on the Potomac River near Fredericksburg, Virginia. Founded as a base for servicing colonial vessels during the American Revolution, it became a permanent Marine Corps training base in 1918 and is home to the Federal Bureau of Investigation Academy.',
  },
  {
    QOM: 'City in Teheran province, 75 mi S of Teheran, NW central Iran. Long a pilgrimage center of the Shiite Muslims, it is the site of the shrine of Fatima, sister of the Imam Riza, the important saint of Shiite Islam, who died in a.d. 816.',
  },
  {
    'Gertrude Pridgett “Ma” Rainey':
      '“The Mother of the Blues.” She was one of the earliest known professional female blues vocalists in the United States, and was one of the first to record her music. She was known for her powerful, deep singing voice, skillful phrasing, and energetic performances as well as her style of moaning a feeling of pathos into her songs.',
  },
  {
    Rai: 'At once a specific Algerian musical genre and a global “pop phenomenon,” it emerged from indigenous musical traditions combined with eclectic influences from the Arab world and the West. Simultaneously fostered by the youth culture of the post-independence years and censored by the government, rai would be exported across the Mediterranean to thrive in France and beyond, taking its lead from the undisputed king of the genre, superstar Cheb Khaled.',
  },
  {
    Pansori:
      'A uniquely Korean dramatic vocal folk genre, it was originally developed by lower-class entertainers during the mid- to late Joseon Dynasty (1392–1910), specifically in the early 18th century. Accompanied by a barrel-shaped drum (puk), a single professional folk musician (kwangdae) performs a folk tale through speech, songs, and acting.',
  },
  {
    'Jimmie Rodgers':
      'Along with the Carter Family, the most famous of the landmark Bristol Sessions discoveries, he established the commercial sound of American country music in the 1920s. He gained fame as “America’s Blue Yodeler” and has been called the “Father of Country Music.”',
  },
  {
    'Blue Division':
      'a unit of volunteers from Francoist Spain operating from 1941 to 1944 within the German Army (Wehrmacht) on the Eastern Front during World War II',
  },
  {
    'Rif War':
      'an armed conflict fought from 1921 to 1926 between the occupying colonialists of Spain (joined by France in 1924) and the Berber tribes of the mountainous region of northern Morocco',
  },
  {
    'Tommi Mäkinen':
      '(born 26 June 1964) is a Finnish racing executive and former driver. He is one of the most successful WRC drivers of all time, ranking fifth in rally wins (24) and third in championships (4), tied with Juha Kankkunen behind Sébastien Ogier (8) and Sébastien Loeb (9).',
  },
  {
    'Scipio Africanus':
      'a Roman general and statesman, most notable as one of the main architects of Rome`s victory against Carthage in the Second Punic War. Often regarded as one of the greatest military commanders and strategists of all time, his greatest military achievement was the defeat of Hannibal at the Battle of Zama in 202 BC',
  },
  {
    'Primavera Sound':
      'annual music festival held in Parc del Fòrum in Barcelona, Spain that takes place between the end of May and beginning of June. ',
  },
  {
    'Jacqueline Susann':
      '(August 20, 1918 – September 21, 1974) was an American novelist and actress. Her iconic novel, Valley of the Dolls (1966), is one of the best-selling books in publishing history. With her two subsequent works, The Love Machine (1969) and Once Is Not Enough (1973), she became the first author to have three novels top The New York Times Best Seller List consecutively.',
  },
  {
    'James Ellroy':
      'American crime fiction writer and essayist. He has become known for a telegrammatic prose style in his most recent work, wherein he frequently omits connecting words and uses only short, staccato sentences, and in particular for the novels The Black Dahlia (1987) and L.A. Confidential (1990).',
  },
  {
    'Nathanael West':
      '(October 17, 1903 – December 22, 1940) was an American writer and screenwriter. He is remembered for two darkly satirical novels: Miss Lonelyhearts (1933) and The Day of the Locust (1939), set respectively in the newspaper and Hollywood film industries',
  },
  {
    'Han Kang':
      '(born November 27, 1970) is a South Korean writer. She won the Man Booker International Prize for fiction in 2016 for The Vegetarian, a novel about a woman`s descent into mental illness and neglect from her family.',
  },
  {
    'Edmond Hoyle':
      '(1672 – 29 August 1769) was an English writer best known for his works on the rules and play of card games. The phrase "according to BLANK" (meaning "strictly according to the rules") came into the language as a reflection of his generally perceived authority on the subject; since that time, use of the phrase has expanded into general use in situations in which a speaker wishes to indicate an appeal to a putative authority',
  },
  {
    Qibla:
      'the direction towards the Kaaba in the Sacred Mosque in Mecca, which is used by Muslims in various religious contexts, particularly the direction of prayer for the salah.',
  },
  {
    Alhazen:
      'a medieval mathematician, astronomer, and physicist of the Islamic Golden Age from present-day Iraq. Referred to as "the father of modern optics", he made significant contributions to the principles of optics and visual perception in particular. His most influential work is titled "Book of Optics", written during 1011–1021, which survived in a Latin edition. The works of BLANK were frequently cited during the scientific revolution by Isaac Newton, Johannes Kepler, Christiaan Huygens, and Galileo Galilei.',
  },
  {
    'Maunder Minimum':
      'also known as the "prolonged sunspot minimum", was a period around 1645 to 1715 during which sunspots became exceedingly rare. During a 28-year period (1672–1699) within the minimum, observations revealed fewer than 50 sunspots. This contrasts with the typical 40,000–50,000 sunspots seen in modern times over a similar timespan',
  },
  {
    "Charli D'Amelio":
      'This 18-year-old dancer has 145 million followers on TikTok',
  },
  {
    Dobro:
      "It's the proprietary name for an acoustic guitar with a metal resonator built into its body; it's popular for country music",
  },
  {
    'Castel Gandolfo':
      'Home to the Vatican Observatory, this castle complex was first used as a summer papal residence in the 17th century',
  },
  {
    'Cabochon (Кабошон)':
      "An old French word gives us this term for a cut gem that's rounded & polished but not faceted",
  },
  {
    'St. Lucia':
      'Castries is the capital of this island country between Martinique & St. Vincent whose exports include bananas & beer',
  },
  {
    UFC: 'This event began in 1993 as a multi-match tournament, with jiu jitsu master Royce Gracie winning the first 2 titles',
  },
  {
    'Carl Sandburg':
      'In "Chicago Poems" he got civic with poems like "Halsted Street Car" & "Clark Street Bridge"',
  },
  {
    'Trung sisters (Сестры Чынг)':
      'These two sisters from Vietnam led a successful rebellion against Chinese rule of their homeland around AD 40. ',
  },
  {
    'John Pershing':
      'Known as "Black Jack" for his then-controversial belief that black soldiers were just as good as white soldiers, this man led American forces during World War I. ',
  },
  {
    'Phineas Gage':
      "One of the most studied cases in all of neuroscience, psychology, and neurology, which American railroad construction foreman is remembered for an 1848 accident in which a large iron rod was driven completely through his head, destroying much of his brain's left frontal lobe? Improbably, he survived the accident, but his injuries caused profound changes to his personality and behaviour. ",
  },
  {
    'Lotus Temple':
      "Although the ruling supreme body of Baháʼí is in Haifa, the world's largest Baháʼí temple is in Delhi. Dedicated in 1986, it is commonly known by what name because of the flower it resembles? ",
  },
  {
    'Theodoric the Great':
      'Which Ostrogoth ruled much of the Western Roman Empire after he deposed Odoacer as the King of Italy and brought Visigothic Spain under his control in 511 CE? He is buried in a mausoleum at Ravenna.',
  },
  {
    Квирин:
      'древнеримский бог, почитавшийся племенем сабинян на горе, названной в его честь. Впоследствии ОН был отождествлен с Марсом и почитался как «мирный Марс». ОН также отождествляли с Ромулом (иногда с Янусом). От ЕГО имени произошло название римских граждан.',
  },
  {
    'Jon Rahm':
      'Spanish professional golfer from the Basque Country. He was the number one golfer in the World Amateur Golf Ranking for a then record 60 weeks and later became world number one in the Official World Golf Ranking, first achieving that rank after winning the Memorial Tournament in July 2020. In June 2021, he became the first Spanish golfer to win the U.S. Open. In 2023, he won the Masters Tournament, his second major championship.',
  },
  {
    'Francisco de Orellana':
      "Spanish explorer and conquistador. In one of the most improbably successful voyages in known history, he managed to sail the length of the Amazon, arriving at the river's mouth on 24 August 1542. He and his party sailed along the Atlantic coast until reaching Cubagua Island, near the coast of Venezuela. He founded the city of Guayaquil in what is now Ecuador, and died during a second expedition on the Amazon.",
  },
  {
    'Juan Ponce de León':
      '(1474 – July 1521) was a Spanish explorer and conquistador known for leading the first official European expedition to Florida and serving as the first governor of Puerto Rico.',
  },
  {
    'Georgina Rodríguez':
      '(born 27 January 1994) is a Spanish social media influencer and model. She was the subject of an eponymous 2022 Netflix documentary, I Am BLANK, in which she was credited as the producer. The second season was released in 2023.',
  },
  {
    'Capirote (KKK)':
      'Catholic pointed hat of conical form that is used in Spain and Hispanic countries by members of a confraternity of penitents. It is part of the uniform of such brotherhoods including the Nazarenos and Fariseos during Easter observances and reenactments in some areas during Holy Week in Spain and its former colonies, though similar hoods are common in other Christian countries such as Italy. ',
  },
  {
    'Timothy Ferriss':
      '(born July 20, 1977) is an American entrepreneur, investor, author, podcaster, and lifestyle guru. He became well-known through his 4-Hour self-help book series—including The 4-Hour Work Week, The 4-Hour Body, and The 4-Hour Chef — that focused on lifestyle optimizations, but he has since reconsidered this approach.',
  },
  {
    'Ross Macdonald':
      'the main pseudonym used by the American-Canadian writer of crime fiction Kenneth Millar (December 13, 1915 – July 11, 1983). He is best known for his series of hardboiled novels set in Southern California and featuring private detective Lew Archer. Since the 1970s, his works (particularly the Archer novels) have received attention in academic circles for their psychological depth, sense of place, use of language, sophisticated imagery and integration of philosophy into genre fiction.',
  },
  {
    'Carl Spitteler ':
      '(24 April 1845 – 29 December 1924) was a Swiss poet who was awarded the Nobel Prize for Literature in 1919 "in special appreciation of his epic Olympian Spring"',
  },
  {
    'Nicolas Boileau-Despréaux (Boileau)':
      '(1 November 1636 – 13 March 1711), was a French poet and critic. He did much to reform the prevailing form of French poetry, in the same way that Blaise Pascal did to reform the prose. He was greatly influenced by Horace',
  },
  {
    'Khalil Gibran':
      '(January 6, 1883 – April 10, 1931) was a Lebanese-American writer, poet and visual artist; he was also considered a philosopher, although he himself rejected the title. He is best known as the author of The Prophet, which was first published in the United States in 1923 and has since become one of the best-selling books of all time, having been translated into more than 100 languages',
  },
  {
    'Канкар-Пунсум':
      'гора в Бутане, являющаяся его наивысшей точкой. Имея высоту над уровнем моря 7570 м и относительную высоту около 2990 м, является наивысшей непокорённой вершиной в мире.',
  },
  {
    'БЦЖ (Баци́лла Кальме́та — Гере́на)':
      'вакцина против туберкулёза, приготовленная из штамма ослабленной живой бычьей туберкулёзной палочки, которая практически утратила вирулентность для человека, будучи специально выращенной в искусственной среде.',
  },
  {
    'Малкольм Браун':
      '(17 апреля 1931 года — 27 августа 2012 года) — американский журналист, бóльшую часть своей карьеры проработавший в The New York Times. В 1963 году он сделал снимок акта самосожжения буддистского монаха Тхить Куанг Дыка, вызвавший широкий общественный резонанс.',
  },
  {
    'Война шимпанзе Гомбе':
      'конфликт между двумя сообществами шимпанзе в Национальном парке Гомбе-Стрим в области Кигома в Танзании между 1974 и 1978 годами.',
  },
  {
    'Ке́ллская кни́га':
      'богато иллюстрированная рукописная книга, созданная ирландскими (кельтскими) монахами примерно в 800 году. Это одна из самых щедро украшенных изящными миниатюрами и орнаментами средневековых рукописей среди всех дошедших до нас. ',
  },
  {
    Кана́ки:
      'коренные народы Меланезии, проживающие в Новой Каледонии, где составляют 41,2 % населения.',
  },
  {
    'Охвостье (Rump Parliament)':
      'принятое в исторической литературе название английского парламента в период с 1648 по 1652 год. В настоящее время использование данного термина, означающее «остаток» от фактически законного парламента, может применяться для обозначения представительного органа власти с чертами, характерными для состояния Парламента Англии в 1648—1652 годах',
  },
  {
    'Шифр Виженера':
      'Метод полиалфавитного шифрования буквенного текста с использованием ключевого слова. Этот метод является простой формой многоалфавитной замены.',
  },
  {
    'Fletcher Christian':
      '(25 September 1764 – 20 September 1793) was an English sailor who led the mutiny on the Bounty in 1789, during which he seized command of the Royal Navy vessel HMS Bounty from Lieutenant William Bligh.',
  },
  {
    Harissa:
      'hot chili pepper paste, native to the Maghreb. The main ingredients are roasted red peppers, spices and herbs such as garlic paste, caraway seeds, coriander seeds, cumin and olive oil to carry the oil-soluble flavors.',
  },
  {
    'Luca della Robbia':
      '(1399/1400–1482) was an Italian Renaissance sculptor from Florence. Ру is noted for his colorful, tin-glazed terracotta statuary, a technique that he invented and passed on to his nephew',
  },
  {
    'Konstantin  Ushinsky':
      'Russian teacher and writer, credited as the founder of scientific pedagogy in the Russian Empire.',
  },
  {
    'Хьюи Пирс Лонг мл.':
      '(30 августа 1893 — 10 сентября 1935) — американский политический деятель, сенатор от штата Луизиана, был известен под прозвищем «Морской царь» (The Kingfish). Правый популист, член Демократической партии, 40-й губернатор Луизианы в 1928 — 1932 гг., сенатор в 1932 — 1935. На президентских выборах 1932 года поддержал Франклина Рузвельта, а в июле 1933 заявил о намерении принять участие в следующих президентских выборах. Один из двух сенаторов США (по состоянию на конец 2020 года), убитых в должности (второй — Роберт Кеннеди)',
  },
  {
    'Хаби́б Бурги́ба':
      '(3 августа 1903, Монастир, протекторат Тунис — 6 апреля 2000, Монастир, Тунис) — тунисский государственный и политический деятель, первый президент Туниса с 25 июля 1957 года по 7 ноября 1987 года.',
  },
  {
    'Джо́нни Э́пплсид':
      'житель США, ставший впоследствии фольклорным персонажем, христианский миссионер и пионер, а также «сельскохозяйственный энтузиаст». Его прозвище происходит от того, что он первым начал сажать яблони на Среднем Западе Америки. ',
  },
  {
    'Божественная пропорция':
      'трактат об идеальных пропорциях в природе, науке и искусстве, созданный выдающимся итальянским математиком, монахом францисканского ордена Лукой Пачоли. Издан в Венеции в 1509 году.',
  },
  {
    'Госпожа Чжэн':
      'китайская морская разбойница, которая снискала славу самой успешной пиратки в истории.',
  },
  {
    Sokoban:
      'двухмерная компьютерная игра-головоломка, в которой игроку необходимо расставить ящики по обозначенным местам лабиринта. Кладовщик одновременно может двигать только один ящик, толкая вперёд. ',
  },
  {
    'The Great Filter':
      'the idea that in the development of life from the earliest stages of abiogenesis to reaching the highest levels of development on the Kardashev scale, there is a barrier to development that makes detectable extraterrestrial life exceedingly rare. One possible resolution of the Fermi paradox.',
  },
  {
    'Jantar Mantar':
      'Consists of 13 architectural astronomy instruments. The site is one of five built by Maharaja Jai Singh II of Jaipur, from 1723 onwards, revising the calendar and astronomical tables.',
  },
  {
    'Torino scale':
      'method for categorizing the impact hazard associated with near-Earth objects (NEOs) such as asteroids and comets. It is intended as a communication tool for astronomers and the public to assess the seriousness of collision predictions, by combining probability statistics and known kinetic damage potentials into a single threat value. ',
  },
  {
    Analemma:
      'diagram showing the position of the Sun in the sky as seen from a fixed location on Earth at the same mean solar time, as that position varies over the course of a year. The diagram will resemble a figure eight.',
  },
  {
    Чаупхрая: "It's the river flowing beneath Bangkok's Rama VI Bridge",
  },
  {
    Fermin:
      'Each year at a festival in Pamplona comes the religious procession honoring this saint',
  },
  {
    Endometriosis:
      "Only identified around 1920, this condition of uterine lining growing where it shouldn't affects as many as one woman in 10",
  },
  {
    'Claddagh ring':
      'From Ireland, one of these rings; the crown symbolized loyalty, the heart-love, and friendship',
  },
  {
    'pink-collar worker ':
      "someone working in the care-oriented career field or in fields historically considered to be women's work",
  },
  {
    'Port Moresby':
      'capital and largest city of Papua New Guinea. It is one of the largest cities in the southwestern Pacific (along with Jayapura) outside of Australia and New Zealand',
  },
  {
    Toho: 'This Japanese film studio is most famous for the Godzilla series of films.',
  },
  {
    Kusanagi:
      'Once owned by the god Susanoo, this sword is now said to be owned by the Emperor of Japan, though it is never seen. On the rare occasions when it is shown to the public, it is covered by a cloth. This sword may have actually been lost during a battle in 1371. ',
  },
  {
    Fukuoka:
      'The November sumo tournament, the last tournament in any given year, takes place in this city, the largest on the island of Kyushu.',
  },
  {
    'Lake Biwa':
      'This is the largest lake in Japan, located near Kyoto. The Largemouth Bass (a game fish native to North America) runs rampant in this lake as an introduced species: the two largest Largemouth Bass ever caught were both from this lake. ',
  },
  {
    Tokaido:
      'With a name meaning "Eastern Sea Route", this major road connected Tokyo to Kyoto. Today, the bullet train line that runs from Tokyo to Osaka is named after this road. ',
  },
  {
    Ephor:
      "Sparta had five people with this title, who were elected annually. They formed a council that shared power with Sparta's two hereditary kings. ",
  },
  {
    Strategos:
      'Classical Athens had ten people with this title, who were responsible for directing the army. Today, this is the highest rank in the modern Greek army. ',
  },
  {
    Exarch:
      'This term is still used in Eastern Orthodox Christian churches, but perhaps was most famously used by the Byzantine Empire to refer to governors of far-flung provinces, such as those in Italy or north Africa. ',
  },
  {
    'Saigo Takamori':
      'Though this samurai helped the emperor overthrow the shogun in the above event, he later led the Satsuma Rebellion, an uprising by samurai displeased with the new regime. He is considered one of the last great samurai in Japanese history. ',
  },
  {
    Samarra:
      "Famed for the spiral minaret of its Great Mosque, which archaeological Iraqi city on the east bank of the Tigris, 125 km north of Baghdad, has been listed as 'World Heritage in Danger' since it was first inscribed during the Iraq War in 2007? ",
  },
  {
    'Leptis Magna':
      "Which archaeological site within the modern-day Libyan city of Khoms [ been a UNESCO World Heritage Site since 1982 but has been in Danger' since 2016 because of the Libyan Civil War? This ancient Phoenician city was greatly expanded by the Romans under Septimius Severus",
  },
  {
    Pinatubo:
      'The eruption of which volcano in the Philippines in 1991 saw global temperatures drop around 0.5 °C for three years?',
  },
  {
    Shibam:
      "Which walled city and 'Manhattan of the Desert' in Yemen, famed for its remarkable high-rise mudbrick buildings, has been listed as 'World Heritage in Danger' since 2015 both because of the Yemeni Civil War and pre-existing negligence? ",
  },
  {
    Chiasmus:
      "What term of Greek origin is used to describe the device in which the words or grammatical constructions of one phrase are repeated in reverse order in the following phrase, such that key concepts from the original phrase reappear inverted in the second phrase? An example from John Milton's Paradise Lost is: “In his face / Divine compassion visibly appeared, / Love without end, and / without measure Grace. . .” ",
  },
  {
    Shapur:
      'Which king of kings of the Sasanian Empire defeated the Romans at the Battle of Edessa in 260 CE, capturing the entire Roman army, including the Emperor Valerian, who was taken as a slave? This king allegedly used Valerian as a footstool when he wished to mount his horse. ',
  },
  {
    'Brothers of Italy':
      'Which hard-right nationalist political party did Giorgia Meloni co-found in 2012 and lead to victory in the 2022 general election? Its name is taken from the first line of the Italian national anthem. ',
  },
  {
    "mit'a": 'system of mandatory labour in Incan Empire',
  },
  {
    kafala:
      'Literally meaning “sponsorship”, what is the name of system of monitoring migrant workers used in the Arab states of Persian Gulf? It requires migrant workers to have an in-country sponsor who is responsible for their legal and visa statuses, and has been criticised by human rights organisations as being exploitative and a form of modern slavery. ',
  },
  {
    'Сырое и приготовленное':
      'Boiling, roasting, and smoking are the three points on the ‘culinary triangle’ proposed by Lévi-Strauss in the first – and best-known – volume of a massive four-volume work in which he traces a single folktale northward from the tip of South America to the Arctic Circle. Name either this first volume or the name given to the four-volume work as a whole. ',
  },
  {
    'Claude Lévi-Strauss':
      'Which French structural anthropologist developed the concept of ‘bricolage’ – the skill of using that which is at hand and recombining it to create something new – to describe the characteristic patterns of mythological thought?',
  },
  {
    Ильмаринен:
      'мифологический небесный кузнец, выковавший небесный свод, светила, плуг, меч и т. п. Брат Ёукахайнена, родившийся вместе с ним от непорочной девицы, которая съела три ягоды. В качестве свадебного подарка для хозяйки Похъёлы он выковал волшебную мельницу сампо. ',
  },
  {
    Ификл:
      'сын Амфитриона и Алкмены, единоутробный брат Геракла, отец Иолая. И. сопровождал Геракла во многих странствиях и был участником некоторых из его подвигов (очистка авгиевых конюшен, войны с Лаомедонтом и Гиппокоонтом),',
  },
  {
    'Хи́льдур Гу́днадо́уттир ':
      'исландский музыкант и композитор, виолончелистка. Выступала и записывалась совместно с такими коллективами, как Múm, Pan Sonic, Throbbing Gristle, Sunn O))) и многими другими. Наиболее известна по работе над мини-сериалом «Чернобыль», а также над фильмами «Убийца 2: Против всех», «Мария Магдалина» и «Джокер».',
  },
  {
    'Битва при Аякучо':
      'решающее сражение Войны за независимость испанских колоний в Америке, состоявшееся 9 декабря 1824 года на плато Аякучо в Перу.',
  },
  {
    'Марк  Хэ́милл':
      'американский актёр и сценарист. Наиболее известен по роли Люка Скайуокера в киносаге «Звёздные войны», а также является каноничным голосом Джокера.',
  },
  {
    'Одино́кий Джордж':
      'самец галапагосской черепахи, считавшийся последним и единственным на момент смерти представителем вида (или подвида) абингдонская слоновая черепаха',
  },
  {
    'Нан-Мадо́л':
      'архипелаг к юго-востоку от острова Понпеи в Тихом океане, состоящий из более чем сотни искусственных островков из базальтовых монолитов и коралловых блоков, связанных системой каналов. Известен также как «Тихоокеанская Венеция».',
  },
  {
    'Алекса́ндр Алекса́ндров':
      'Автор музыки Гимна СССР и положенного на ту же мелодию Гимна Российской Федерации.',
  },
  {
    'Ка́рстен Бо́рхгревинк':
      "Первый человек, ступивший на Антарктический материк (24 января 1895 года) и проведший там первую успешную зимовку (1899—1900 годы). Пионер использования собачьих упряжек для передвижения по антарктическим ледникам, 16 февраля 1900 года достиг 78° 50' ю. ш. Однако для широкой публики его достижения оказались перечёркнуты экспедициями Роберта Скотта, Эрнеста Шеклтона и Руаля Амундсена.",
  },
  {
    'Па́оло  Борселли́но ':
      'итальянский магистрат, прославившийся своей борьбой с мафией. В 1992 году, через два месяца после убийства его друга и коллеги Джованни Фальконе, он был убит взрывом бомбы, заложенной в автомобиле.',
  },
  {
    'Хосе́  Арти́гас ':
      '(19 июня 1764, Монтевидео — 23 сентября 1850, Парагвай) — ла-платский политический деятель, один из руководителей освободительного движения против испанского и португальского колониальных режимов в Южной Америке, национальный герой и отец-основатель уругвайского государства (Восточной Республики Уругвай).',
  },
  {
    Джамби́я:
      'восточный кинжал с широким загнутым клинком без гарды. Элемент национального мужского костюма йеменцев. В Йемене ее носят большинство лиц мужского пола. ',
  },
  {
    'Красная книга':
      'манускрипт психолога и философа Карла Густава Юнга, созданный им в период между 1914 и 1930 годами и насчитывающий 205 страниц, некоторые из которых иллюстрированы автором. ',
  },
  {
    'Toru Takemitsu':
      'Stravinsky took this composer out to lunch after hearing his Requiem for Strings. For ten points, name this Messiaen-inspired classical Japanese composer.',
  },
  {
    'Colombian Cumbia':
      'This style and its relative porro are the primary music types heard at the Carnaval de Barranquilla. For ten points, name this style of music and dance from Colombia. ',
  },
  {
    'Komitas Vardapet':
      'This composer may have been romantically interested in Margarit Babayan, despite being ordained as a vardapet at Etchmiadzin. For ten points, name this folk music collector who suffered from PTSD after the Armenian genocide.',
  },
  {
    Erhu: 'This is the most popular instrument in a family whose distinguishing features include a python skin-covered soundbox. This instrument is tuned between the zhonghu and gaohu. For ten points, name this traditional Chinese two-stringed spike fiddle. ',
  },
  {
    'Umm Kulthum':
      'This singer’s (*) “It’s Been a Long Time, O Weapon of Mine” was made the national anthem of her country, and she worked with the composer Abd al-Wahhab on songs such as “Enta Omry”. For ten points, what contralto is revered as the “Star of the East” in Egypt? ',
  },
  {
    'Alberto Ginastera':
      'In his (*) Objective Nationalist phase, this composer of Don Rodrigo included a Danza del Gaucho Matrero at the end of a piano suite depicting his home country. For ten points, name this composer of Danzas Argentinas. ',
  },
  {
    abjad:
      'Unlike alphabets, these writing systems do not have graphemes for vowels. For ten points, Hebrew and Arabic are an “impure” sort of what type of writing system comprised of only consonants? ',
  },
  {
    'Здзислав Бексиньский':
      'In one of his paintings, thousands of bugs are depicted crawling into the open mouth of a nose-less face, while in another, a humanoid spider-like figure with a red emblem for a face crawls amidst a post-apocalyptic background. For 10 points, name this surrealist “nightmare artist.” ',
  },
  {
    'Felix Gonzalez-Torres':
      'This artist’s Doubles series includes (*) “Untitled” (Perfect Lovers), which depicts two clocks in sync. This artist described the medium of one of his installations as being in “endless supply,” and invited visitors to take individual pieces of the work. For 10 points, name this Cuban-American artist who produced one of his “candy works” to commemorate Ross Laycock, his lover who passed away due to AIDS. ',
  },
  {
    'Elinor Ostrom':
      'This creator of the IAD framework and author of “Collective Action and the Evolution of Social Norms” used the examples of farmers in the Swiss Alps and fishers in Maine to dispute Garret Hardin’s conclusions about resource management. For 10 points, name this author of Governing the Commons, the first female Nobel laureate for economics.',
  },
  {
    Knoll:
      'This company names an organizational method in which objects are arranged at 90-degree angles on a flat surface.  For 10 points, modern office design was pioneered by what furniture company that shares its name with a synonym for “hillock”?',
  },
  {
    'Эффект основателя':
      'This phenomenon occurs when a small group breaks off from the main body and forms a new population. Since the sample size is small, the new population could have a very different genetic ratio than the original one. ',
  },
  {
    'bottleneck effect':
      'Similar to the founder effect, this is a reduction of the population’s gene pool when a small subset of the population survives the widespread elimination of the species',
  },
  {
    'Emilio Segre':
      'He studied under Enrico Fermi in Rome and was head of the radioactivity group at the Manhattan project. Together with Owen Chamberlain, he shared the Nobel Prize for discovering the antiproton. ',
  },
  {
    'The Iron Gates':
      'a gorge on the river Danube. It forms part of the boundary between Serbia (to the south) and Romania (north). In the broad sense it encompasses a route of 134 km (83 mi); in the narrow sense it only encompasses the last barrier on this route, just beyond the Romanian city of Orșova, that contains two hydroelectric dams',
  },
  {
    'Charles Demuth (The painting is I Saw the Figure 5 in Gold.)':
      'A group of art patrons admire Brâncuși’s phallic sculpture Princess X in this artist’s Distinguished Air. Another painting by this artist is based on a William Carlos Williams poem about witnessing a speeding fire truck. ',
  },
  {
    'Kara Walker':
      'For 10 points, name this African-American artist who is noted for her exploration of race and gender through silhouettes',
  },
  {
    'The Slav Epic (Славянская эпопея)':
      'This series consists of 20 canvases, and was composed over a period of 18 years. For 10 points, name this cycle of paintings depicting the history of its titular peoples by Alphonse Mucha. ',
  },
  {
    'David Byrne (Talking Heads)':
      'Classical Japanese theater inspired the ridiculously large suit worn by this man during the song “Girlfriend Is Better” in a Jonathan Demme film. For 10 points, name this singer who appears in the concert film Stop Making Sense. ',
  },
  {
    'Anna Karina':
      'This actor’s husband fictionalized their rocky relationship in the film Contempt. Coco Chanel helped this actor come up with her Tolstoy-inspired stage name. For 10 points, name this star of many 1960s films by JeanLuc Godard, including Alphaville and Vivre sa vie. ',
  },
  {
    'Lin-Manuel Miranda':
      'Eighteen people have completed an EGOT (i.e. winning an Emmy, Grammy, Oscar, and Tony). Falling just short, having not yet won an Oscar, is which American entertainer, best known for creating the Broadway musicals In The Heights and Hamilton? ',
  },
  {
    TSUNDOKU:
      'Which Japanese word means leaving a book unread after buying it, typically piled up with other unread books? ',
  },
  {
    DANEGELD:
      'Which land tax, last enforced in 1162, was raised to pay tribute or protection money to Viking raiders to save a land being ravaged? Prominent from the ninth to the eleventh century, it was used both to buy off attackers, and pay defensive mercenaries. ',
  },
  {
    'BAR LEV LINE':
      'Fortified defense line east of the Suez Canal, erected by Israel after Egypt began shelling its troops in 1968. It withstood Egyptian artillery attacks during the War of Attrition but was breached by Egyptian troops during Operation Badr in 1973. ',
  },
  {
    'CATHERINE of Siena ':
      'Since 1970, the Roman Catholic Church has recognized four female saints as “Doctors of the Church” for their scholastic contributions. What 14th-century Tuscan laywoman was the second woman given this honour? She was instrumental in persuading Gregory XI to return the papacy from Avignon to Rome. ',
  },
  {
    'CORN LAWs (Хлебные законы)':
      'By what two-word name are the collection of tariffs and restrictions on the importing of cereal grains into the United Kingdom, in effect between 1815 and 1846, commonly known? ',
  },
  {
    'Cori “Coco” GAUFF':
      'First coming to prominence as a Wimbledon wild card beating Venus Williams in 2019, which American tennis player won the women’s singles title at the 2023 US Open? ',
  },
  {
    'NOLI ME TANGERE':
      'What three-word Latin phrase meaning “touch me not” links the words said by Jesus to Mary Magdalene after the resurrection, paintings by Titian and Correggio [core-EDGE-o] and a novel by José Rizal? ',
  },
  {
    'AVEDON, RICHARD':
      'A photographer for more than 60 years, he has photographed more fashion models than any of his contemporaries alive today.',
  },
  {
    'BERTIN, ROSE':
      'The first known fashion designer, who designed clothing for Queen Marie Antoinette of France during the 1770s.',
  },
  {
    BIRKENSTOCK:
      "In 1964, BLANK's son Karl designed the first BLANK sandal. Two years later, American Margot Fraser discovered the health benefits of the sandal while in Germany. Fraser brought the sandal back to California, where she founded her company, the BLANK Footprint Sandals Inc. Today, there are more than 300 styles based on the original comfort icon concept.",
  },
  {
    'ERTÉ, ROMAIN DE TIRTOFF ':
      '(1892–1990). Born into an aristocratic family in St. Petersburg, Russia, his interests were art and theater. He is recognized as one of the most notable fashion illustrators and costume designers. His work is easily identified by its stylized designs, exotic fabrics, and strands of beads and ornaments, together with towering and dramatic headwear. In 1912, his family moved to Paris. It was there that he illustrated for Paul Poiret and designed costumes, his most notable being for the famous exotic dancer, Dutch-born Mata Hari. ',
  },
  {
    'LÉOTARD, JULES':
      'A French aerial gymnast who invented the flying trapeze in 1859 and who is the creator of a one-piece garment, known as a maillot, which was later named after him.',
  },
  {
    'REARD, LOUIS':
      'a French mechanical engineer who designed the “bikini” bathing suit in Paris, in 1946.',
  },
  {
    Дзиндзя: 'синтоистское святилище, вместе с территорией вокруг.',
  },
  {
    Kojiki:
      'an early Japanese chronicle of myths, legends, hymns, genealogies, oral traditions, and semi-historical accounts concerning the origin of the Japanese archipelago, the kami, and the Japanese imperial line. It is claimed in its preface to have been composed by Ō no Yasumaro at the request of Empress Genmei in the early 8th century (711–712), and thus is usually considered to be the oldest extant literary work in Japan.',
  },
  {
    Catenary:
      'the curve that an idealized hanging chain or cable assumes under its own weight when supported only at its ends in a uniform gravitational field. ',
  },
  {
    Tirthankara:
      'In Jainism, what name is given to a spiritual teacher who has conquered the cycle of births and rebirths and makes a path for others to follow? ',
  },
  {
    'Aufbau Principle':
      'Its name originates from the German word for ‘construction’, what principle in quantum mechanics states that in the ground state of an atom, electrons fill subshells of the lowest available energy, before filling subshells of higher available energy? ',
  },
  {
    'The Laugh of the Medusa':
      'an essay by French feminist critic Hélène Cixous. It was (after she revised it) translated into English by Paula Cohen and Keith Cohen in 1976. In the essay, Cixous issues an ultimatum: that women can either read and choose to stay trapped in their own bodies by a language that does not allow them to express themselves, or they can use the body as a way to communicate. She describes a writing style, écriture féminine, that she says attempts to move outside of the conventional rules found in patriarchal systems.',
  },
  {
    Wojtek:
      'Though originally from Iran, this bear fought with the Free Polish Forces during World War II, often being used to carry ammunition. Following the war he retired to the zoo in Edinburgh, where he died in 1963. ',
  },
  {
    'Jozef Pilsudski':
      'After Poland regained its independence following World War I, this military strongman was the de facto (and often de jure) leader of Poland from 1918 until his death in 1935. As a general, this man is famous for defeating the much larger Soviet Union in the Soviet-Polish War of 1920. This man has many fans in Poland to this day.',
  },
  {
    Gniezno:
      'Now a sleepy town of 68,000 people, this city in central Poland was the first recorded capital of Poland. The bishop of this city is still the highest-ranking Catholic bishop in Poland, enjoying the title of "Primate of Poland".',
  },
  {
    'Malbork Castle':
      "Though it was built not by Poles, but by German Teutonic Knights, which castle in northern Poland is both a UNESCO World Heritage Site and one of Poland's most-visited touirist attractions?",
  },
  {
    Pellagra:
      'Diarrhoea, dermatitis, dementia, and death are the 4 "D"s that characterize which disease caused by deficiency of Niacin (vitamin B3)? ',
  },
  {
    'Soutine (Chaim)':
      'Which Russian expressionist artist (1893-1943), a friend of the ill-fated Amedeo Modigliani features in a Roald Dahl short story called "Skin"? He is best known for still-life paintings such as "Carcass of beef", and when he kept the rotting subject matter of the famous painting series in his room,  he lectured the Police on the importance of Art over hygiene when they were called to investigate the stench. ',
  },
  {
    'Rudisha (David)':
      "Which Kenyan middle distance runner is the 2012 and 2016 Olympic champion and World Record holder in the Men's 800m? ",
  },
  {
    'Триада Макдональда':
      'Набор из трёх поведенческих характеристик — зоосадизм, пиромания и энурез, который он связал с предрасположенностью к совершению особо жестоких преступлений',
  },
  {
    'Kone ':
      'финская компания, специализирующаяся на производстве лифтов, кранов, эскалаторов, траволаторов и пассажирских подъемников. ',
  },
  {
    'Пакт Бриа́на — Ке́ллога':
      'договор об отказе от войны в качестве орудия внешней политики; получил название по именам инициаторов — министра иностранных дел Франции  и госсекретаря США. Подписан 27 августа 1928 года ',
  },
  {
    Дарваза́:
      'газовый кратер в Туркменистане. Местные жители и путешественники называют его «Дверью в преисподнюю», или «Вратами ада» ',
  },
  {
    'Joe Louis':
      "After getting KO'd by Max Schmeling in 1936, this African-American heavyweight took just 2 minutes & 4 seconds to win the rematch ",
  },
  {
    Hoovervilles:
      'Shantytowns that sprang up during the Great Depression were given this presidential nickname ',
  },
  {
    Balto:
      "There's a statue in Central Park of this heroic sled dog for helping run a diphtheria antitoxin to remote Alaskans in 1925",
  },
  {
    'Maya Lin':
      'Best known for her design of the Vietnam Veterans Memorial, she was honored with a Presidential Medal of Freedom in 2016',
  },
  {
    Taft: 'This man\'s 1909-1913 administration practiced "Dollar Diplomacy", trying to create stability abroad to help U.S. businesses',
  },
  {
    'Mosul ':
      'a major city in northern Iraq, serving as the capital of Nineveh Governorate. The city is considered the second largest city in Iraq in terms of population and area after the capital Baghdad, with a population of over 3.7 million. It encloses the ruins of the ancient Assyrian city of Nineveh – once the largest city in the world – on its east side.',
  },
  {
    'Ужасный волк':
      'This large, hypercarnivorous canine was another major predator of the Ice Age. It is perhaps most famous for its highly fictionalized appearnce in the Song of Ice and Fire books (aka the Game of Thrones books). ',
  },
  {
    'New Zealand':
      "This island nation was once home to a giant flightless bird known as the Moa and a giant eagle known as the Haast's Eagle that may have hunted it. ",
  },
  {
    'Narmer ':
      'Around 3100 BC, this man unified upper and lower Egypt and became the first Pharaoh. His accomplishment was recorded on a famous artifact known as this man\'s "palette". ',
  },
  {
    Kush: 'This Nubian kingdom, located south of Egypt, conquered Egypt for a time during the 25th Dynasty. The pyramids built by rulers of this kingdom can be found at Meroe in what is now the Sudan.',
  },
  {
    Karnak:
      'Another major attraction near Luxor is the ruins of this temple, once the most sacred place in all of Egypt. Divided into three precincts named for three different gods, this temple is famous for its impressive Great Hypostyle Hall. ',
  },
  {
    Papiamento:
      'The islands of Aruba, Curacao, and Bonaire are part of the Netherlands: but many of the people who live there speak not Dutch, but this Portuguese-based creole language. ',
  },
  {
    Piraha:
      'The speakers of this language, who live deep in the Amazon basin, are allegedly incapable of counting past four due to the lack of numerals in their language. Daniel Everett, a former Christian missionary who is now an atheist linguistics professor, claims that this language lacks recursion, which if true would be devastating to the theories of Noam Chomsky. These claims are controversial. ',
  },
  {
    Ladino:
      'Also known as Judeo-Spanish, this language closely related to Old Spanish was once widely spoken by Sephardic Jews. Some speakers of this language are actually found in the Balkans and Turkey, where speakers of this language settled after being expelled from Spain. ',
  },

  {
    'Bone Wars':
      'During the late 19th century, the American paleontologists Edward Cope and Othniel Marsh engaged in a fierce rivalry to see who could discover more dinosaurs in the American west. That conflict between Cope and Marsh is usually given this name.',
  },
  {
    'Carlos Filipe Ximenes Belo':
      'Timor Leste’s constitution offers equal status to all religions but recognises the Catholic Church’s role in the liberation struggle. Which head of the Catholic Church in Timor Leste won the 1996 Nobel Peace Prize for forging a peaceful road to freedom from Indonesian occupation, but has recently faced allegations of sexual abuse of minors?',
  },
  {
    'Erik Bruhn':
      'In her later career, Alicia Markova developed a dance partnership with which Danish dancer, 18 years her junior, first performing a televised version of Giselle in 1955? This dancer, described as the “greatest classical dancer of his generation” is also known for his partnership with Carla Fracci, and long romantic relationship with Rudolf Nureyev.',
  },
  {
    'Humboldt current':
      'The Benguela current can be seen as an analogue of which cold current that flows north along the western coast of South America and is responsible for the aridity of the Atacama desert?',
  },
  {
    'Sengoku period':
      'The Ōnin War, a large-scale civil war triggered by a dispute between an official of the Ashikaga shogunate and a number of daimyo, is often considered as the start of which period in Japanese history? Its name roughly translates as “Warring States”.',
  },
  {
    'La Tosca':
      'Mucha’s first poster for Sarah Bernhardt depicted her in Victorien Sardou’s play Gismonda. He also produced a poster of Bernhardt in which of Sardou’s other plays, which depicts an opera singer and was later adapted into an opera by Puccini.',
  },
  {
    'Johann Gottfried Herder (Вдохновитель бури и натиска)':
      'Another thinker influenced by Winckelmann was what German ‘father of cultural nationalism’ and author of Abhandlung über den Ursprung der Sprache (Treatise on the Origin of Language) who believed that all nations have a distinctive Volkgeist? This man collected folk songs and was among the first to argue that thought is shaped in part by the language a person speaks.',
  },
  {
    Kano: 'Which is the largest city in the north of Nigeria? It has been a diverse city throughout its history due to its location on the trans-Saharan trade routes, and is today the largest Hausa-speaking city in the world and the cultural hub for Hausa film and literature.',
  },
  {
    'Shah Abbas the Great':
      'Which Safavid Shah, who reigned from 1588 until 1629, undertook many military reforms, enabling him to regain territories in the Caucasus that had been lost to the Ottoman Empire? Regarded as one of the most powerful leaders in Iranian history, he also retook Hormuz from the Portuguese and Kandahar from the Mughals, and he shares his name with a follower of Muhammad who founded a namesake Caliphate.',
  },
  {
    'Johann Joachim Winckelmann':
      'Which German art historian and ‘father of modern archaeology’ wrote the 1764 work Geschichte der Kunst des Alterthums (History of Ancient Art), which was a decisive influence on the Neoclassical movement? His enormous influence on subsequent German scholars has been described as ‘the tyranny of Greece over Germany’. ',
  },
  {
    'Safavid dynasty':
      'Ismail I founded which Iranian dynasty in 1501? This dynasty controlled much of Greater Iran throughout the Early Modern period and was the first native Persian dynasty to rule since the Muslim conquest of the Sassanians in the 7th century. ',
  },
  {
    Tokelau:
      'With a name meaning ‘north wind’, which dependent territory of New Zealand, made up of three atolls, became, in 2012, the world’s first 100% solar powered territory? ',
  },
  {
    'Brazil (Война Фаррапус)':
      'Prior to his efforts to reunify Italy, Giuseppe Garibaldi left Europe in order to support the rebels in which South American country’s Ragamuffin War (1835-45)? ',
  },
  {
    Orinoco:
      "An enormous river delta in eastern Venezuela is created where which major river empties into the Gulf of Paría? The world's fourth largest river by discharge volume, this river forms several hundred kilometres of the border between Venezuela and Colombia. ",
  },
  {
    'Rudisha (David)':
      'Herder intervened in an argument between Winckelmann and this man on the question of whether poetry or sculpture is expressively superior, and this man criticised Winckelmann in his 1767 work Laokoön: oder über die Grenzen der Malerei und Poesie (Laocoön: An Essay on the Limits of Painting and Poetry). This is which author and dramaturg who helped free German drama from Classical influences with works such as Miss Sara Sampson, the first major domestic tragedy in German literature? ',
  },
  {
    'Gotthold Ephraim Lessing':
      'Herder intervened in an argument between Winckelmann and this man on the question of whether poetry or sculpture is expressively superior, and this man criticised Winckelmann in his 1767 work Laokoön: oder über die Grenzen der Malerei und Poesie (Laocoön: An Essay on the Limits of Painting and Poetry). This is which author and dramaturg who helped free German drama from Classical influences with works such as Miss Sara Sampson, the first major domestic tragedy in German literature? ',
  },
  {
    Ibadan:
      'Which city was the largest in Nigeria at the time of its independence, although it has since been surpassed by Lagos and Kano? It is the capital of Oyo state and lies in the centre of the Yoruba homeland. ',
  },
  {
    Sfax: "A transportation hub and a market for the phosphates of the Gafsa region, which large port on the Gulf of Gabès [gah-bes] is also noted for olive and nut processing and for its fish industry? This port is considered Tunisia's second city. ",
  },
  {
    Benghazi:
      "Banking, the oil industry, salt processing, and the production of cement are among the major commercial considerations of which city on the Gulf of Sidra? This major seaport is considered Libya's second city. ",
  },
  {
    'Mobutu Sese Seko (DRC)':
      'Known as ‘the Versailles of the Jungle’, Gbadolite was a palace-city built south of the Ubangi River by which military dictator? The palaces were looted after this man was overthrown in 1997 and are now overrun with vegetation. ',
  },
  {
    Welwitschia:
      'Consisting of just two leaves and perhaps living up to 2,000 years, W. mirabilis is endemic to the Namib desert and absorbs much of its water, via its leaves, from the desert’s plentiful fog. Commonly referred to as a living fossil, this plant is a member of which genus? Please give the scientific name of this genus. ',
  },
  {
    'Professor Unrat (Учитель Гнус)':
      'Among the best-known works of Heinrich Mann, elder brother of Thomas, is which 1905 novel - about a reclusive schoolteacher and his strained relationship with both his past and present students - that was successfully adapted to film in 1930 by Josef von Sternberg under the title Der blaue Engel (The Blue Angel)? The book is sometimes (especially in its abridged form) now translated with the title The Blue Angel but we are looking for the original title. ',
  },
  {
    'Дзяды ':
      'духи предков. Обряд их почитания совершался на седьмой день после Пасхи (семуха, весенняя радуница или пасха усопших) или осенью (большие осенины, дедова неделя). В эти дни в жертву покойникам приносили пищу. Жертвенную пищу относили на кладбище или приглашали их на угощение в дом и посвящали им первую ложку или первый стакан, выливая их под стол или ставя за окно.',
  },
  {
    'Даждьбог ':
      'древнерусский бог, связываемый с солнцем. Считался покровителем и родоначальником русских племен.',
  },
  {
    Герсилия:
      'римская героиня, одна из похищенных римлянами сабинянок, ставшая женой Ромула.',
  },
  {
    Гекатонхейры:
      '«сторукие» — пятидесятиглавые и сторукие великаны, могучие сыновья Урана и Геи — Бриарей, Котт и Гиес. Во время битвы с титанами боги Олимпа воззвали к Г. и сих помощью одержали победу.',
  },
  {
    Гекатомба:
      'от «сто» — жертвоприношение ста быков (или иных животных). В переносном смысле — любое большое жертвоприношение, огромные жертвы (войны, террора, эпидемии).',
  },
  {
    Геб: 'бог земли, сын Шу и Тефнут. Согласно мифу он поссорился со своей женой и сестрой Нут («небо») из-за того, что она ежедневно рождала детей (небесные светила), а затем поедала их. Шу разъединил супругов — его он оставил лежать внизу, а Нут поднял вверх. Детьми его были также Осирис, Сет, Исида, Нефтида.',
  },
  {
    'Ма́рко Ма́рулич':
      'хорватский средневековый поэт и гуманист, известный как «отец хорватского ренессанса» и «отец хорватской литературы».',
  },
  {
    'the Barbary States (Варварийский берег)':
      'Morocco, Tunis, Algiers & Tripoli were these "States" that acted as a haven for pirates until the French took over in 1830 ',
  },
  {
    '(Captain) Phillips':
      'In 2009 he was the captain of the first U.S.-flagged ship taken by pirates in more than 200 years',
  },
  {
    'Большой цирк':
      'With seating for 250,000 to watch the chariot races, this "biggest ring" was the largest Roman arena Circus Maximus',
  },
  {
    'Dunedin ':
      'the second-largest city in the South Island of New Zealand (after Christchurch), and the principal city of the Otago region. ',
  },
  {
    'Monterrey ':
      'the capital and largest city of the northeastern state of Nuevo León, Mexico, and the second largest city in Mexico behind Mexico City. ',
  },
  {
    'Fallujah ':
      'a city in the Iraqi province of Al Anbar, located roughly 69 km west of Baghdad on the Euphrates. The city became a major center of resistance against the Iraqi government during the Iraqi insurgency and the city was the scene of fierce fighting ',
  },
  {
    'Jean Froissart':
      'The play Edward III may have been a collaboration between William Shakespeare and Thomas Kyd. It draws some of its storylines from the Chronicles of which Frenchspeaking author from the Low Countries who documented the 100 Years War?',
  },
  {
    'Belt and Road Initiative':
      'Since 2016, the Pakistani port of Gwadar has been leased by a Chinese company as a key part of which Chinese Government strategy that aims to build land infrastructure in central Asia and maritime infrastructure on Indo-Pacific sea routes? ',
  },
  {
    'Marcel Breuer':
      "Aalto's Paimio chair was inspired by which designer's Wassily chair? This Hungarianborn architect of the UNESCO headquarters in Paris also designed the Cesca chair and collaborated with textile designer Gunta Stözl on the African chair.",
  },
  {
    'A.J. (Alfred Jules) Ayer':
      'Which philosopher is widely held to have imported logical positivism, and the verification principle, into the English-speaking world in his 1936 work Language, Truth, and Logic? ',
  },
  {
    'Grimké family':
      'A Black member of this family co-founded The Guardian. Two sisters from this family became well-known abolitionists and embarked on speaking tours in the Northeast.',
  },
  {
    Тепуи:
      'Roraima, Kukenán, and Cerro Sarisariñama are examples of these mesas in the Guiana Shield. These sandstone table-top mountains have been called “islands above the rainforest” due to their isolated biodiversity. ANSWER: ',
  },
  {
    Teotihuacán:
      'Tatiana Proskouriakoff was the first to propose that this city’s lord Spearthrower Owl conquered Tikal in an event called the entrada, or the “arrival of strangers.” This city’s ruins contain the Pyramids of the Sun and Moon.',
  },
  {
    'Prozac Nation':
      'Which 1994 autobiography by Elizabeth Wurtzel chronicles her struggles with mental health problems, and incorporates into its title the commercial trade name of the medication Fluoxetine?',
  },
  {
    'Hans Bellmer':
      'Which German artist is best known for the life-sized (and grotesque) pubescent female dolls he produced in the mid-1930s? ',
  },
  {
    'François-André Danican Philidor':
      'Which French 18th century composer who wrote the opera Tom Jones was also the Strongest Chess Master of the 18th Century pioneering simultaneous blindfolded chess matches (he was name-checked in The Queen’s Gambit). ',
  },
  {
    'Richard Jewell':
      'Sticking with the theme about suspects: What was the name of the security guard who discovered the bomb planted by Eric Rudolph at the 1996 Summer Olympics in Atlanta? First hailed as a hero, he was later suspected to be the one who planted it, and, although he was eventually cleared, this led to several libel lawsuits against various parties. ',
  },
  {
    'Strait of Bonifacio':
      'Yes, the strait that separates Corsica from Sardinia has a name. ',
  },
  {
    'Palk Strait':
      'This strait, famously crossed in the Ramayana, separates India from Sri Lanka. ',
  },
  {
    'Lajos Kossuth':
      "This man led the unsuccessful Hungarian Revolution of 1848, and the rebellion is often named for him. He managed to escape alive, and later became a popular speaker in the UK and US. It is not unusual for American cities that were being settled in the mid-1800's to have streets or other landmarks named for him.",
  },
  {
    Sigurimi:
      'The Albanian communist regime led by the correct answer to the above question (as well as his successor Ramiz Alia) depended heavily on this state security and secret police agency, which was abolished in 1991. ',
  },
  {
    'salami tactics':
      'Perhaps appropriately given his nickname, Rakosi is famous for coining which two-word phrase (still used in game theory), that describes his strategy of slowly destroying his opposition one piece at a time, much like slicing the titular cured meat popular in Hungary? ',
  },
  {
    'Ernst Thalmann':
      'Which man, who led the Communist Party of Germany during the Weimar Republic, was killed in Buchenwald in 1944 and later became a national hero in East Germany, where many streets, factories, and the East German young pioneer organization were named for him? ',
  },
  {
    'Arrow Cross Party':
      "For the last year of World War II, Hungary was led by the fascist Ferenc Szalasi, the leader of this fascist political party. This party's namesake symbol is now banned in Hungary. ",
  },
  {
    Lusotropicalism:
      "First articulated by the Brazilian sociologist Gilberto Freyre and adopted by the regime of Antonio Salazar, this is the belief that because of Portugal's warm climate and history as a multi-ethnic state, Portuguese colonialism was more humane and friendly than other forms of European colonialism. Adherents of this ideology unsuccessfully opposed the breakup of Portugal's global empire. ",
  },
  {
    Sarmatism:
      'This ideology holds that members of the Polish nobility (but not other Poles) were descended from the namesake Persian tribe. During the Polish-Lithuanian Commonwealth, this ideology was not only used to justify ridiculous outfits for nobles, but also used to justify Polish nobles feeling superior to the peasants they oppressed and the kings they refused to obey. ',
  },
  {
    senet:
      "This board game is attested in Egypt from at least the third dynasty and continued to be played until Roman times. The theme of this board game appears to have been the soul's journey to the afterlife. ",
  },
  {
    Kaur: 'Just as all male Sikhs are expected to take the name Singh as a middle name or last name, Sikh women are expected to take which name, meaning ‘princess’?',
  },
  {
    'Ben-Day dots':
      "In his best-known works, Roy Lichtenstein commonly used an exaggerated form of a printing technique in which small, coloured dots are variously spaced and combined to create colour and shading. The 'dots' used in this technique are given what name after the illustrator who created the process in 1879?  ",
  },
  {
    'Bab-el-Mandeb':
      "Separating Yemen on the Arabian Peninsula from the Horn of Africa, which strait that connects the Red Sea to the Gulf of Aden has a name derived from the Arabic for 'Gate of Lamentation'?",
  },
  {
    'A Masked Ball (Густав 3, убит Анкастремом)':
      'Joan Sutherland’s first starring role was in which opera by Giuseppe Verdi? She took the role of Amelia, who is in love with her husband’s friend, Gustavo, the King of Sweden. Another performance of this opera saw Marian Anderson cast as Ulrica to become the first African-American opera singer to perform with the Metropolitan Opera.',
  },
  {
    'unit cell (Элементарная ячейка )':
      'What two-word term* is used to define the smallest repeating section of a crystal that contains its full symmetry, such that it is possible to build up the entire crystal by translation of this constituent part? *one compound word in Dutch, German, Norwegian, and Swedish',
  },
  {
    'sonic boom (Звуковой удар )':
      'What name is given to the explosive noise associated with shock waves created when an object travels through the air faster than the speed of sound?',
  },
  {
    Durga:
      'Many Hindus choose to fast during various festivals, such as Navaratri, a nine- or tenday festival observed in the honour of which goddess, an aspect of the mother goddess Mahadevi or force Shakti? She is often depicted as riding a tiger and fighting evils such as the buffalo demon Mahishasura.',
  },
  {
    'Lucia di Lammermoor':
      'The Australian soprano Joan Sutherland is perhaps most associated with the title role in which opera by Gaetano Donizetti based on a novel by Walter Scott? Her performance of ‘Il dolce suono’, commonly referred to as ‘the Mad Scene’, once earned her a twelve-minute ovation at the Metropolitan Opera.',
  },
  {
    opal: 'Červenica in Slovakia is the only European source of which gemstone? The Australian town of Coober Pedy is the world’s largest supplier of this gemstone.',
  },
  {
    'Effi Briest':
      'The physicist Manfred von Ardenne, who worked on the Soviet atomic bomb programme, is the grandson of Elisabeth von Ardenne, the inspiration for the title character of which German realist novel by Theodor Fontane, which concerns a young woman who marries into the aristocracy?',
  },
  {
    'Papa Legba':
      'Which cigar-smoking Lwa of Haitian Vodou is often depicted with a cane and straw hat? This Lwa is associated with crossroads because he opens and closes the gate between Earth and the realm of the gods.',
  },
  {
    'The Sultanate of Women':
      'Following Suleiman the Magnificent’s ascent to the throne in 1520, the Ottoman Empire saw a rise in the number of influential and powerful women controlling affairs within the imperial palace. What name is usually given to this period that lasted around 150 years?',
  },
  {
    Loas: 'The serpent Damballa is among the best-known of which spirits of Haitian Vodou who act as intermediaries between the creator god Bondyé and humans? These spirits are analogous to the orishas of Cuban Santería and the Yoruba religion, and are sometimes described as equivalents of, and syncretized with, Roman Catholic saints.',
  },
  {
    Zambezi:
      'Lake Kariba is the world’s largest reservoir by volume. It is formed by a namesake dam on which river, which passes through six countries before emptying into the Indian Ocean in Mozambique?',
  },
  {
    'Jack Nicklaus':
      'Though there was more than a decade to go, in 1988 golf magazine named him "Golfer of the Century" ',
  },
  {
    'Jack Johnson':
      'In 1908 he defeated Tommy Burns to become the first African-American world heavyweight boxing champ ',
  },
  {
    "Goodhart's law ":
      'an adage often stated as, "When a measure becomes a target, it ceases to be a good measure"',
  },
  {
    'Montpelier ':
      "the capital city of the U.S. state of Vermont and the seat of Washington County. The site of Vermont's state government, it is the least populous state capital in the United States. As of the 2020 census, the population was 8,074. ",
  },
  {
    'Tyre ':
      "a city in Lebanon, one of the oldest continually inhabited cities in the world, though in medieval times for some centuries by just a tiny population. It was one of the earliest Phoenician metropolises and the legendary birthplace of Europa, her brothers Cadmus and Phoenix, as well as Carthage's founder Dido (Elissa). ",
  },
  {
    'Oak Ridge ':
      'was established in 1942 as a production site for the Manhattan Project—the massive American, British, and Canadian operation that developed the atomic bomb.',
  },
  {
    'Krampus ':
      'a horned, anthropomorphic figure in the Central and Eastern Alpine folklore of Europe who, during the Advent season, scares children who have misbehaved. Assisting Saint Nicholas, or Santa Claus, the pair visit children on the night of 6 December, with Saint Nicholas rewarding the well-behaved children with gifts such as oranges, dried fruit, walnuts and chocolate, while the badly behaved ones only receive punishment from him with birch rods.',
  },
  {
    'Bataan Death March':
      'In which April 1942 incident were approximately 75,000 Filipino and American troops forced to make an arduous 65-mile march to prison camps in the Philippines? The intense heat, starvation, and harsh treatment by Japanese guards led to only 54,000 prisoners surviving the trek to the camp.',
  },
  {
    'Isamu Noguchi':
      'Which Japanese designer is notable for his namesake coffee table that consists of a glass top resting on two identical curved wooden pieces? He also designed the set for Martha Graham’s ballet Appalachian Spring and the gardens at the UNESCO headquarters. ',
  },
  {
    'Santa Ana winds':
      "Another example of a katabatic wind are which downslope winds best-known for their role in fanning wildfires in southern California and northern Baja [bah-ha] California? Occasionally called 'devil winds', their better-known name is thought to derive from the name of a canyon in Orange County.",
  },
  {
    'AL AHLY':
      'Which Egyptian football club, whose name literally translates “The National Club”, is often considered the greatest football club in Africa? At the 2020 FIFA Club World Cup, this team won match for third place against Palmeiras. ',
  },
  {
    'Andreas Gursky':
      'This photographer showed aisles of products at a California superstore in his 99 Cent series. For 10 points, name this German photographer of the most expensive photograph ever sold, Rhein II. ',
  },
  {
    'Anthony Powell (‘A Dance to the Music of Time’, painting by Nicolas Poussin)':
      'The painting shown in Picture C, a notable work by a 17th-century French Baroque artist, inspired WHICH ENGLISH NOVELIST to produce a twelve-volume work of the same name that was published between 1951 and 1975? ',
  },
  {
    Theia:
      'According to the Giant Impact Hypothesis, our Moon was formed after an impact from a Mars-sized planet which hit Earth about 4.5 billion years ago. What name, derived from the mother of Selene (the moon goddess in Greek mythology), is given to this ancient planet? ',
  },
  {
    Talaria:
      ' What name is given to the winged sandals of the Greek god Hermes, said to be made by the god Hephaestus of imperishable gold and they flew the god as swift as any bird? ',
  },
  {
    Gitanjali:
      "What is name is given to the collection of 157 poems by Bengali poet Rabindranath Tagore, which translates as 'Song Offerings' that led to him winning the Nobel Prize for Literature in 1913?",
  },
  {
    Shiva:
      'Also known as coherent catastrophism, the hypothesis based on pioneering work by Napier and Clube was named in the 1990s by Rampino and Haggerty after which religious deity? It postulates that global catastrophes happen at regular intervals because of the periodic motion of the Sun in relation to the Milky Way galaxy, and is said to have inspired the Nemesis theory',
  },
  {
    UTRECHT:
      'In which Dutch city were treaties signed between April 1713 and September 1714 which brought an end to the War of the Spanish Succession?',
  },
  {
    ADELAIDE:
      'The Ghan passenger train takes 54 hours to travel between Darwin and which city in South Australia?',
  },
  {
    Duffer:
      'What is the last name of the twin brothers Matt and Ross, who have been the showrunners of the science-fiction series Stranger Things since 2016?',
  },
  {
    'Isaias Afwerki':
      'With slight difference in spelling, what first/ given name is shared by the following people : The philosopher who wrote the 1953 essay ‘The Hedgehog and the Fox’; the point-guard that led the ‘Bad Boys’ to back-to-back NBA championships in the late 1980s and the politician who has been the president of Eritrea since its independence in 1993?',
  },
  {
    'The Plastic People of the Universe':
      "Which pop group, named for a track on the album 'Absolutely Free' by the Mothers of Invention, was banned in Czechoslovakia and played a key role in that country's Velvet Revolution?",
  },
  {
    'Faroe Islands':
      'Streymoy is the main island of which island group in the Atlantic, which is also where the main town is located?',
  },
  {
    Идунн:
      'With a task similar to Hesperides, which Norse goddess guards the apples of eternal youth without which the Æsir and the Vanir would become shrivelled, grey, and old? She shares the task with her husband Bragi, the god of poetry.',
  },
  {
    'Фимбулвинтер. Комментарий : апокалиптическая трёхлетняя зима, предшествующая Рагнарёку в германо-скандинавской мифологии.':
      'Некоторые исследователи отмечают, что после НЕЁ корабль не сможет прибыть на поля Вигрид, а приедет туда по льду как на санях. Ответ: ',
  },
  {
    Leitha:
      'Until 1919, which river was traditionally seen as the border between Austria and Hungary? ',
  },
  {
    Szekesfehervar:
      'Most Hungarian kings from 1000 - 1526 were crowned and buried in this city, located about 40 miles / 65 kilometers southwest of Budapest. Its very long name translates to something like "white city with a chair in it", referring to the royal throne. ',
  },
  {
    'Battle of Lechfeld (Битва на реке Лех )':
      'In this 955 battle near Augsburg, German Emperor Otto I defeated the Hungarians and ended their raids into Western Europe, forcing them back into Pannonia where they remain to this day. ',
  },
  {
    turul:
      'This mythical bird, which resembles a large falcon or hawk, is a national symbol of Hungary, and a large statue of it can be found at Tatabanya. Pagan Hungarians may or may not have believed that their royal dynasty descended from this bird. ',
  },
  {
    'Seychelles (Сейшельская пальма, Изображена на гербе Сейшельских Островов)':
      'The mysterious Coco de Mer fruit, a type of coconut, grows only in this island nation. ',
  },
  {
    Angola:
      "This country was home to Isabel dos Santos, the first female billionaire in Africa. Coincidentally (or not) she is the daughter of this country's former long-time president, Jose Eduardo dos Santos. After her father's death, she fled to the United Arab Emirates, and the current government of this country is trying to confiscate her assets. ",
  },
  {
    Burundi:
      "It's not Rwanda, but this country is also mostly inhabited by Hutu and Tutsi people. This country's president Cyprien Ntaryamira was killed in the 1994 plane crash that sparked the Rwandan genocide. ",
  },
  {
    Zambia:
      'Copper mining makes up 60% of this nation\'s economy, and it even has a province called "Copperbelt" that is home to most of its copper deposits. ',
  },
  {
    Mali: 'Separatists in the northern part of this country wish to form a new country they call Azawad. ',
  },
  {
    'Sierra Leone':
      "The Krio ethnic group accounts for just 2% of this country's population, but the Krio language (an English-based creole) is spoken by 90% of the population. ",
  },
  {
    Togo: "In 1850, a young Brazilian sailor named Francisco Olympio arrived in what is now this small country. He became extremely wealthy as a merchant, and had 21 children with seven wives. His descendants went on to be some of this country's most illustrious citizens and leaders: his son, Octaviano Olympio, founded this nation's capital city, and another descendant, Sylvanus Olympio, was this country's first post-independence president. Despite the strong ties to Brazil, this is not a Lusophone country.",
  },
  {
    'Янош Хуньяди':
      'This ethnic Romanian became one of the most celebrated generals in Hungarian history during the mid-1400\'s and was given the title of "Athlete of Christ" by the Pope for his many campaigns against the Ottoman Turks, including the Long Campaign. ',
  },
  {
    'Matthias Corvinus':
      "This man, the son of the correct answer to #21, was elected King of Hungary in 1458 and is generally considered the greatest King of Hungary. He is usually known not by his father's family name, but by a nickname derived from the Latin word for a crow, an animal that appeared on his coat of arms. Due to his Romanian ancestry, he is also popular in Romania, and is even mentioned in the Romanian national anthem. ",
  },
  {
    Mohacs:
      'The correct answer to #29 soundly defeated the Hungarian army at this 1526 battle, marking the end of Hungarian independence until the 20th century. ',
  },
  {
    asthenosphere:
      'Which highly viscous, mechanically weak region of the upper mantle of the Earth lies directly below the lithosphere, at depths between 100 and 200 km below the surface?',
  },
  {
    'Rosicrucianism or Order of the Rose Cross':
      'Published anonymously in Kassel, Germany, in 1614, Fama fraternitatis is a manifesto introducing which esoteric, spiritual order? The order is supposedly named after its likely apocryphal German founder who achieved mystical insight following a pilgrimage to the Middle East.',
  },
  {
    'Calligrammes ':
      "What is the title of Guillaume Apollinaire's posthumously published 1918 collection of poems in which the poems are arranged typographically in order that the words appear in the shape of an object that is meaningful to the poem? One notable poem appears in the shape of a horse while another forms the shape of the Eiffel Tower. ANS: ",
  },
  {
    'sign language  ':
      'A language isolate found in Nicaragua is commonly abbreviated in Spanish to ISN and is of particular interest to linguists because of the ability it affords them to study an entirely new language. Thought to have developed spontaneously in Nicaraguan schools during the 1980s, ISN is what particular form of language? ',
  },
  {
    'Ланцетник  ':
      'What fish-like invertebrate chordate is the most distantly related ancestor to share the same olfactory receptors with humans? Named after its resemblance to a weapon used by cavalry soldiers*, this primitive filter feeder can be found buried in the sand with only the mouth end projecting. *Another common name in many languages (as well as its scientific name) references its pointed shape more directly. ',
  },
  {
    'Satanic verses ':
      'What term is used in academic literature to refer to verses which were once purportedly taken to be a part of the Quran, but which were later denounced by the Prophet Muhammad and removed? This term names a noted Salman Rushdie novel.',
  },
  {
    'Zelda Fitzgerald ':
      '"Z" by Therese Anne Fowler is a fictionalized memoir of this Jazz Age woman called the first flapper ',
  },
  {
    'Купол скалы  ':
      'Completed in 691, this shrine was built in Jerusalem by Caliph Abd al-Malik',
  },
  {
    'ethics ':
      'basic approaches in this field are deontology (an act is inherently good or bad) & teleology (depends on the result) ',
  },
  {
    'spectrum ':
      'Shine a light into a gas in a magnetic field to see the Zeeman effect, the resplitting of lines in this arrangement of colors',
  },
  {
    'Edirne, formerly known as Adrianople or Hadrianopolis  ':
      'a city in Turkey, in the northwestern part of the province of Edirne in Eastern Thrace. Situated 7 km from the Greek and 20 km from the Bulgarian borders, Edirne was the second capital city of the Ottoman Empire from 1369 to 1453, before Constantinople became its capital.',
  },
  {
    'The 15-minute city  ':
      'an urban planning concept in which most daily necessities and services, such as work, shopping, education, healthcare, and leisure can be easily reached by a 15-minute walk or bike ride from any point in the city.',
  },
  {
    'McMurdo Station  ':
      'a United States Antarctic research station on the south tip of Ross Island. The station is the largest community in Antarctica, capable of supporting up to 1,200 residents, and serves as one of three year-round United States Antarctic science facilities.',
  },
  {
    'mokele-mbembe  ':
      'mythical water-dwelling entity that supposedly lives in the Congo River Basin, sometimes described as a living creature, sometimes as a spirit. Descriptions vary widely among those who claim to have seen the creature, but it is often described as a large quadrupedal herbivore with smooth skin, a long neck and a single tooth or horn.',
  },
  {
    'David Graeber ':
      'Which American anthropologist and activist, who died in 2020, argues that early human societies were more diverse and complex than is popularly supposed in the posthumous 2021 work The Dawn of Everything, co-written with David Wengrow? Other works by this thinker include Debt: The First 5000 Years and Bullshit Jobs. ',
  },
  {
    'Albertus PICTOR ':
      'Became an inspiration for the film The Seventh Seal, "Death Playing Chess" is the late 15th-century painting created by which Swedish artist? ',
  },
  {
    'Alexander ALEKHINE ':
      'Which former Chess World Champion choked to death on a piece of meat on March 24, 1946, in Estoril, Portugal? ',
  },
  {
    'Benjamin WEST (best known as author of "The Death of General Wolfe) ':
      'Which American artist (1738—1820) also painted The Death of Nelson, 21st October 1805, "The Death of Socrates", and "Death on the Pale Horse"?',
  },
  {
    'AFGHANISTAN ':
      'Which modern country was founded in 1747 after Ahmad Shah Durrani unified the Pashtun tribes? This country served as a buffer between the British and Russian Empires until it won independence from notional British control in 1919. ',
  },
  {
    'Avery BRUNDAGE ':
      'Held the office between 1952 and 1972, what is the only American to be the President of the International Olympic Committee? ',
  },
  {
    'Leidenfrost effect ':
      'Named after a German physician, what is the name of an effect of water drops bouncing on a hot surface, which can be observed on a hot stove top, for example?',
  },
  {
    'Лудён  ':
      'What French city was the site of a 1634 hysteria and witch trial over the supposed mass possession of a convent of Ursuline nuns by the Devil?',
  },
  {
    'HMS Birkenhead (Построение Биркенхеда)':
      'Which iron-hulled troopship, which sunk in 1852 off Cape Colony, gives its name to the maritime principle that women and children leave a sinking ship first?, ',
  },
  {
    'NICOTINIC ACID/ NIACIN ':
      'Which vitamin is also referred to as Vitamin B3 because it was the third of the B vitamins to be discovered? It has historically been referred to as "vitamin PP". That name was derived from the term "pellagra-preventing factor", because the disease pellagra is due to a deficiency of it in the diet.',
  },
  {
    'Болезнь Тея — Сакса ':
      'First described and named after by a British ophtalmologist who noticed red spot on the retina and an American neurologist who noticed increased rate of this disease in Ashkenazi Jews, which genetic disorder is caused by genetic mutation on chromosome 15 and usually attacks infants? First symptoms are inability to turn over, sit or crawl, then seizures, hearing loss and inability to move at all with death usually occuring around the age of five.',
  },
  {
    'RAGA ':
      'What do we call a subgenre of rock or pop music with a heavy Indian influence, either in its construction, its timbre, or its use of instrumentation, such as the sitar and tabla? More recently, scholars have included British rock music from the 1960s and 1970s that utilises South Asian musical materials and instruments and Western ideas of South Asia.',
  },
  {
    'Oscar Swahn ':
      'Which Swedish shooter became the oldest ever Olympic gold medallist, doing so in 1908 at the age of 60? He is also the oldest ever contestant, in 1920 at the age of 72.',
  },
  {
    'Lumbini ':
      'Now a Buddhist pilgrimage site and UNESCO World Heritage Site, which town in Nepal was the birthplace of the Buddha?',
  },
  {
    'Collatz conjecture ':
      'Which mathematician problem, also known as the “3x + 1 problem” is named after a German mathematician, one of the founders of the field of spectral graph theory?',
  },
  {
    'Luciana Aymar ':
      'Nicknamed “La Maga” (The Magician), which Argentinian is the only woman to win the Field Hockey World Player of the Year Award eight times? She won two world cups in 2002 and 2010 and earned four Olympic medals',
  },
  {
    Соумайа:
      'The modernist project for the new museum building at Plaza Carso in Mexico City, the construction of which was completed in 2011, was entrusted by entrepreneur Carlos Slim to his son-in-law Fernando Romero. What was the name of Slim’s deceased wife, after whom the museum complex was named?',
  },
  {
    'kelpie ':
      'shape-shifting spirit inhabiting lochs in Irish and Scottish folklore. It is usually described as a black horse-like creature, able to adopt human form.',
  },
  {
    'Фуртреккеры  ':
      'What Afrikaans name, often translated as “pioneers”, is given to the Boers who left the British-controlled Cape Colony from the mid-1830s onwards and migrated into the interior of what is now South Africa, settling north of the Orange river? ',
  },
  {
    'Nara ':
      'Empress Genmei established which city as the Japanese capital in 710 CE? Located less than 40 km from both Kyoto and Osaka, it is home to several historical monuments that collectively form a UNESCO World Heritage Site. You may answer with either the historical name for this city, or its modern name, which is also used for the historical period during which it was the capital. ',
  },
  {
    'Кляйнмайстеры ':
      'Barthel and Hans Sebald Beham, Heinrich Aldegrever and Albrecht Altdorfer were among a group of German printmakers of the early 16th century, about a generation after the great Albrecht Dürer. They were known for making very detailed but small engravings. What name is given to this group of artists? ',
  },
  {
    'Mumbai  ':
      'Often referred to as the world’s largest slum, Dharavi is a community in which city? Dharavi was established on a namesake island that is now part of the island of Salsette. ',
  },
  {
    'Minamoto clan OR Kamakura ':
      'As a result of the Battle of Dan-no-ura in 1185, a man named Yoritomo established himself as the first shogun of Japan and founded a shogunate that lasted for 150 years. Name EITHER the clan name of Yoritomo and his immediate successors OR the capital city, the name of which is used for both the shogunate and the historical period. ',
  },
  {
    'Marc GIRARDELLI ':
      'Which legendary alpine ski racer was ineligible to compete in the 1980 or 1984 Winter Olympics because he retained Austrian citizenship while skiing for Luxembourg? He won five World Cup between 1985- 1993 and became a two-time Olympics silver medalist in 1992. ',
  },
  {
    'ISLE OF MAN ':
      'Located at the mouth of the namesake river, the town of Douglas is the capital and largest town of which self-governing British Crown dependency? ',
  },
  {
    'YESTERDAY, TODAY, TOMORROW ':
      'Which film starring Sophia Loren and Marcello Mastroianni won the Academy Award for Best Foreign Language Film in 1965? This film contains three tales of very different women using their sexuality as a means to getting what they want. ',
  },
  {
    'Yī Yī (Один и два) ':
      'This 2000 film was its director’s last, following his film A Brighter Summer Day, which is also set in Taiwan. For 10 points, name this Edward Yang film with a repetitive Mandarin title. ',
  },
  {
    'Bartolomé de las Casas ':
      'This member of the School of Salamanca contributed to the “Black Legend” in a debate against Juan Ginés de Sepúlveda (“hwan hee-NESS day seh-POOL-veh-dah”); that debate in Valladolid (“vah-yah-doh-LEED”) caused Charles V to pass the New Laws. For 10 points, name this Dominican friar and author of A Short Account of the Destruction of the Indies. ',
  },
  {
    'Muddy Waters ':
      'The father of the Chicago blues, McKinley Morganfield, whose hit gave name to The Rolling Stones, is better known by what nickname which he earned by playing in the creeks of the Mississippi?',
  },
  {
    'Macedonia (Вергинская звезда ) ':
      'The Vergina Sun is the emblem of which traditional Greek region?',
  },
  {
    'Lei ':
      'The wreath of flowers that is placed around guests’ necks as a sign of hospitality in Hawaii has what three-lettered name?',
  },
  {
    'Pool ':
      'Although the USA is considered the home of the sport, everyone will name Efren Manalang Reyes as the best player in the history.',
  },
  {
    'Autofiction ':
      'Some of the more famous examples are the works of Maggie Nelson, Sheila Heti, Ben Lerner, Jenny Offill, Tao Lin, Karl Ove Knausgaard, as well as most of the opus of the Nobel laureate Annie Ernaux. What narrative form is also the name of Hitomi Kanehara’s novel?',
  },
  {
    'Marlborough ':
      '"Blenheim", "Cloudy Bay", "Renwick" and "Seddon" are all towns located in which wine growing region in New Zealand? It is by far New Zealand\'s largest wine growing region, accounting for three quarters of the country\'s wine population.',
  },
  {
    'ШÁННОН ':
      'наиболее значительная река в Ирландии. Дл. 368 км, пл. бас. 15, 7 тыс. км². ',
  },
  {
    'ЦУГÁРУ  ':
      'между островами Хонсю и Хоккайдо (Япония). Соединяет Японское море с Тихим океаном.',
  },
  {
    'ШКÓДЕР  ':
      'озеро на Балканском полуострове, в Черногории и Албании. Пл. 391 км², в период сезонного подъёма уровня достигает 530 км². Глуб. до 60 м. Зап. и северо-зап. берега крутые, скалистые, вост. – равнинные, заболоченные. Впадает 6 рек, наибольшая из которых – Мораца. ',
  },
  {
    'Астротурфинг  ':
      'practice of hiding the sponsors of a message or organization (e.g., political, advertising, religious, or public relations) to make it appear as though it originates from, and is supported by, grassroots participants.  ',
  },
  {
    'Великая отставка или большой уход  ':
      'an ongoing economic trend in which employees have voluntarily resigned from their jobs en masse, beginning in early 2021 in the wake of the COVID-19 pandemic. ',
  },
  {
    'Saudi Vision 2030  ':
      "is a strategic framework to reduce Saudi Arabia's dependence on oil, diversify its economy, and develop public service sectors such as health, education, infrastructure, recreation, and tourism. Key goals include reinforcing economic and investment activities, increasing non-oil international trade. It also consists of increasing government spending on the military, as well as manufacturing equipment and ammunition.",
  },
  {
    'keiretsu  ':
      "a set of companies with interlocking business relationships and shareholdings that have dominated the Japanese economy since the second half of the 20th century. In the legal sense, it is a type of informal business group that are loosely organized alliances within the social world of Japan's business community. It rose up to replace the zaibatsu system that was dissolved in the Occupation of Japan following the Second World War, and, though their influence has shrunk since the late 20th century, they continue to be important forces in Japan's economy in the early 21st century.",
  },
  {
    'Исследовательский треугольник  ':
      'nicknames for a metropolitan area in the Piedmont region of the U.S. state of North Carolina in the United States, anchored by the cities of Raleigh, Durham and Chapel Hill, and home to three major research universities: North Carolina State University, Duke University, and the University of North Carolina at Chapel Hill, respectively.',
  },
  {
    'Maria Goeppert Mayer  ':
      '(June 28, 1906 – February 20, 1972) was a German-born American theoretical physicist, and Nobel laureate in Physics for proposing the nuclear shell model of the atomic nucleus. She was the second woman to win a Nobel Prize in physics, the first being Marie Curie.',
  },
  {
    'Calamity Jane ':
      "American frontierswoman, sharpshooter, and storyteller. In addition to many exploits she was known for being an acquaintance of Wild Bill Hickok. Late in her life, she appeared in Buffalo Bill's Wild West show and at the 1901 Pan-American Exposition. She is said to have exhibited compassion to others, especially to the sick and needy.",
  },
  {
    'William Archibald Spooner  ':
      '(22 July 1844 – 29 August 1930) was a British clergyman and long-serving Oxford don. He was most notable for his absent-mindedness, and for supposedly mixing up the syllables in a spoken phrase, with unintentionally comic effect. ',
  },
  {
    'Kordylewski clouds  ':
      'large concentrations of dust that exist at the and Lagrangian points of the Earth–Moon system. ',
  },
  {
    'Messalina  ':
      'third wife of Roman emperor Claudius. She was a paternal cousin of Emperor Nero, a second cousin of Emperor Caligula, and a great-grandniece of Emperor Augustus. A powerful and influential woman with a reputation for promiscuity, she allegedly conspired against her husband and was executed on the discovery of the plot. Her notorious reputation probably resulted from political bias, but works of art and literature have perpetuated it into modern times.',
  },
  {
    'Karl Guthe Jansky  ':
      '(October 22, 1905 – February 14, 1950) was an American physicist and radio engineer who in April 1933 first announced his discovery of radio waves emanating from the Milky Way in the constellation Sagittarius. He is considered one of the founding figures of radio astronomy.',
  },
  {
    'Will Rogers phenomenon, also called the Okie Paradox ':
      'when moving an observation from one group to another increases the average of both groups. ',
  },
  {
    'Proteus effect  ':
      'a phenomenon in which the behavior of an individual, within virtual worlds, is changed by the characteristics of their avatar',
  },
  {
    "Dunbar's number  ":
      'suggested cognitive limit to the number of people with whom one can maintain stable social relationships—relationships in which an individual knows who each person is and how each person relates to every other person.',
  },
  {
    'Saba  ':
      'a Caribbean island and the smallest special municipality (officially "public body") of the Netherlands. It consists largely of the active volcano Mount Scenery, which at 887 m is the highest point of the entire Kingdom of the Netherlands. Together with Bonaire and Sint Eustatius it forms the BES islands, also known as the Caribbean Netherlands.',
  },
  {
    'Kangaroo Island ':
      "Australia's third-largest island, after Tasmania and Melville Island. It lies in the state of South Australia, 112 km southwest of Adelaide.",
  },
  {
    'Gotland  ':
      "Sweden's largest island. The population is 61,001, of which about 23,600 live in Visby, the main town.",
  },
  {
    'Heisei era  ':
      'the period of Japanese history corresponding to the reign of Emperor Emeritus Akihito from 8 January 1989 until his abdication on 30 April 2019. ',
  },
  {
    'Greenwashing  ':
      "form of advertising or marketing spin in which green PR and green marketing are deceptively used to persuade the public that an organization's products, aims and policies are environmentally friendly. ",
  },
  {
    'Thomas Bowdler ':
      "an English physician known for publishing The Family Shakespeare, an expurgated edition of William Shakespeare's plays edited by his sister ",
  },
  {
    'Giuseppe Meazza  ':
      '(23 August 1910 – 21 August 1979) was an Italian football manager and player. Throughout his career, he played mainly for Inter Milan in the 1930s, scoring 242 goals in 365 games for the club, and winning three Serie A titles, as well as the Coppa Italia; he later also played for local rivals Milan, as well as Turin rivals Juventus, in addition to his spells with Varese and Atalanta. At international level, he led Italy to win two consecutive World Cups: in 1934 on home soil, and in 1938 as captain, being named to the All-star Team.',
  },
  {
    "Kipp's apparatus ":
      'an apparatus designed for preparation of small volumes of gases. It was invented around 1844 by the Dutch pharmacist.',
  },
  {
    'Hayflick limit ':
      'number of times a normal somatic, differentiated human cell population will divide before cell division stops. However, this limit does not apply to stem cells. ',
  },
  {
    'Adolphe Quetelet (Кетле) ':
      '(22 February 1796 – 17 February 1874) was a Belgian astronomer, mathematician, statistician and sociologist who founded and directed the Brussels Observatory and was influential in introducing statistical methods to the social sciences. He also founded the science of anthropometry and developed the body mass index (BMI) scale',
  },
  {
    'Leo  Baekeland  ':
      '(November 14, 1863 – February 23, 1944) was a Belgian chemist. He is best known for the inventions of Velox photographic paper in 1893, and BLANK in 1907. He has been called "The Father of the Plastics Industry" for his invention of BLANK, an inexpensive, non-flammable and versatile plastic, which marked the beginning of the modern plastics industry.',
  },
  {
    'Belt of Venus  ':
      'atmospheric phenomenon visible shortly before sunrise or after sunset, during civil twilight. It is a pinkish glow that surrounds the observer, extending roughly 10–20° above the horizon. It appears opposite to the afterglow, which it also reflects. ',
  },
  {
    'Carlism  ':
      'Traditionalist and Legitimist political movement in Spain aimed at establishing an alternative branch of the Bourbon dynasty – one descended from Don Carlos, Count of Molina (1788–1855) – on the Spanish throne',
  },
  {
    Agrippina:
      'Roman empress from 49 to 54 AD, the fourth wife and niece of Emperor Claudius, and the mother of Nero. ',
  },
  {
    'Fujita scale (F-Scale; ), or Fujita–Pearson scale (FPP scale)':
      'a scale for rating tornado intensity, based primarily on the damage tornadoes inflict on human-built structures and vegetation',
  },
  {
    'Diedrich Knickerbocker  ':
      "American literary character who originated from Washington Irving's first novel, A History of New-York from the Beginning of the World to the End of the Dutch Dynasty. He is a Dutch-American historian who is dressed in a specific type of baggy-kneed trousers. The word knickerbocker is also used to refer to people who live in Manhattan, and was adopted in a shortened form as the Knicks by the city's NBA professional basketball team.",
  },
  {
    'Johan Ludvig Runeberg  ':
      '(5 February 1804 – 6 May 1877) was a Finnish priest, lyric and epic poet. He wrote exclusively in Swedish. He is considered a national poet of Finland. He is the author of the lyrics to Vårt land (Our Land, Maamme in Finnish) which became an unofficial Finnish national anthem.',
  },
  {
    'УИ́ТНИ ':
      'вершина в хребте Сьерра-Невада, высшая точка «смежных» штатов США (4418 м). Расположена на оси хребта, нависая над находящейся к В. от него линейной впадиной Оуэнс.',
  },
  {
    'ФУМАРÓЛЫ ':
      'сравнительно небольшие отверстия и трещинки, по которым поднимаются струи горячих паров воды и газов, выделяющиеся из магмы ',
  },
  {
    'ХАЙБÉРСКИЙ ПРОХÓД ':
      'перевал в хребте Сафедкох, на границе Афганистана и Пакистана, единственный удобный путь сообщения между странами. Находится к Ю. от долины р. Кабул, которая в этом месте представляет собой непроходимое ущелье.',
  },
  {
    'Алый первоцвет, баронесса Орци  ':
      'In which 1905 novel, the first in a series set during the French Revolution, does the Englishman Percy Blakeney rescue condemned aristocrats before they can be sent to the guillotine? ',
  },
  {
    ' El Alemein ':
      'Four hours west of Cairo is a war cemetery, containing the graves of about 8,000 Allied soldiers killed in World War II. The cemetery is located in which small Egyptian town (whose population is about the same as the number of graves in the cemetary), which was the scene of a massive battle in World War II?',
  },
  {
    'Hargeisa ':
      'If you meet somebody who says they visited Somalia, odds are that they spent most or all of their time in this relatively safe city, the capital of the unrecognized state of Somaliland. ',
  },
  {
    'Татавин ':
      'Multiple Star Wars movies were partially filmed in this Tunisian city, famous for the cave-like dwellings in which its Bedouins live. ',
  },
  {
    'Ambazonia ':
      'The former German colonial center of Buea (which is still home to the Bismarck well, pictured) is today the capital of which autonomous English-speaking region of Cameroon, which occasionally seeks independence from the French-speaking majority? ',
  },
  {
    'Fula ':
      "Traditionally living as pastoralists, this ethnic group is one of the largest in the Sahel. Nearly 98% of this ethnic group's members are Muslims, and they launched a series of namesake jihads in the 18th and 19th century. ",
  },
  {
    'Afar (Французская территория афар и исса ) ':
      'This ethnic group forms 35% of the population of Djbouti. They lend their name to a triangular region of northeastern Ethiopia, as well as to a depression within the Great Rift Valley that includes Lake Assal, the lowest point in Africa. ',
  },
  {
    'Epic of Sundiata ':
      'In many parts of west Africa, you can find a griot capable of reciting this epic poem, about the founder of the Mali Empire. ',
  },
  {
    'Gao ': 'This other city in Mali was the capital of the Songhai Empire.',
  },
  {
    'CORK ':
      'Now a classic material for the soles of summery wedge heels, Salvatore Ferragamo began using what lightweight natural product due to an inability to afford steel during World War II? ',
  },
  {
    'FLAUTAs  ':
      'The Mexican state of Sinaloa is well known for what dish, similar if not equivalent to a flour-tortilla taquito but named for the Spanish word for an orchestral instrument? Yes, sometimes this dish has corn tortillas too. ',
  },
  {
    'Pola Negri ':
      'This Polish actress was a major silent film star in both Germany and the United States, though her career dissipated with the introduction of talkies. ',
  },
  {
    'Stanislaw Ulam (Еще метод Монте-Карло) ':
      'This Polish physicist was part of the Manhattan Project, and along with his colleague Edward Teller he designed the American hydrogen bomb. ',
  },
  {
    'Jan Tinbergen ':
      'One of the founding fathers of econometrics, which Dutch economist was awarded the first Nobel Prize in Economics in 1969, which he shared with Ragnar Frisch? ',
  },
  {
    'Aage Bohr ':
      'What was the name of Neils Bohr’s son, who shared the Nobel Prize in Physics in 1975 with Ben Mottelson and James Rainwater for their model of the nucleus? ',
  },
  {
    'Medea hypothesis ':
      "What hypothesis developed by paleontologist Peter Ward contests the Gaia hypothesis and proposes that multicellular life may be self-destructive or suicidal? It is a metaphor that refers to a mythological mother who kills her own children. She figures in the myth of Jason and the Argonauts and is the subject of Euripides's tragedy of the same name",
  },
  {
    'Hyderabad ':
      'Literally meaning “four minarets”, the Charminar seen here is a monument and mosque that was constructed in 1591 and that has become the landmark symbol of which Indian city? It is listed among the most recognized structures in India.',
  },
  {
    'Deadnaming ':
      'What term is given to the act of referring to a trans person by their pre-transition name, rather than their affirmed name?',
  },
  {
    'Kathleen Hanna ':
      'The 2013 documentary The Punk Singer is about which riot grrrl pioneer? She fronted bands including Bikini Kill and Le Tigre, and she also (albeit unintentionally) named the Nirvana song Smells Like Teen Spirit.',
  },
  {
    'PENTIMENTO ':
      'The word is Italian for repentance, what do we call an alteration in a painting, evidenced by traces of previous work, showing that the artist has changed his or her mind as to the composition during the process of painting?',
  },
  {
    'Detroit Red Wings ':
      '  The Russian Five is a documentary about a unit of five Russian ice hockey players from the USSR who played for which NHL franchise and helped them win the 1997 Stanley Cup Finals after a drought of more than 40 years?',
  },
  {
    'PHNOM PENH ':
      'Chronicling the genocide between 1975 and 1979 in which an estimated one and a half to three million people died, Tuol Sleng Genocide Museum is to be found in which Asian capital city?',
  },
  {
    'Сигетварская битва ':
      'Called by French statesman Cardinal Richelieu "the battle that saved civilisation." The siege of which fortress in Hungary during 1566, helped block Suleiman\'s advance towards Vienna? Although the Ottoman would win the battle, the bloody fighting halted their advance to Vienna and the city would not be threatened for another 100 years.,',
  },
  {
    'Adamstown  ':
      'the capital of the Pitcairn Islands, and the only settlement on the Pitcairn Islands, the only British Overseas Territory that is located in the Pacific Ocean. As of January 2020, it has a population of 47, which is the entire population of the Pitcairn Islands.',
  },
  {
    'Malé  ':
      'the capital and most populous city of the Maldives. With a population of 252,768 including other districts and an area of 8.30 km2, it is also one of the most densely populated cities in the world.',
  },
  {
    'Santa Clara  ':
      'The town located in the center of Silicon Valley and is home to the headquarters of companies such as Intel, Advanced Micro Devices, and Nvidia',
  },
  {
    'China ':
      'Initiated in 1899, the Open Door Policy was based on the U.S. & other nations all having equal access to this Asian country ',
  },
  {
    'prions ':
      'Discovered around 1980, these nasty proteins (hence the "pr" in the word) are a cause of fatal brain diseases ',
  },
  {
    'G. E. Moore (Here is one hand, And here is another. There are at least two external objects in the world.Therefore, an external world exists.) ':
      'Wittgenstein’s Tractatus only adopted its now-famous Latin title when translated into English. The change was suggested by which English philosopher as an homage to Spinoza’s Tractatus Theologico-Politicus? This man wrote the Principia Ethica and A Defence of Common Sense, in the latter of which he attacked philosophical scepticism with his famous “Here is one hand” argument. ',
  },
  {
    'Голубые горы  ':
      'Which mountain range and natural UNESCO World Heritage site in New South Wales, Australia, gets its name from its apparent colour to human eyes? This effect is due to the evaporation of eucalyptus essential oil in the air, causing sunlight to scatter and allow shorter-wavelengths to propagate more easily. ',
  },
  {
    'trilobite  ':
      'This marine arthropod was among the first creatures in the fossil record to develop the sense of sight and lived for 270 million years until its extinction at the end of the Permian about 252 million years ago. Which extinct creature is so named because the back of its body was uniquely divided into three distinct sections? ',
  },
  {
    'Sudan ':
      'Very few tourists visit this country, but the ones who do often see the pyramids of Meroe. ',
  },
  {
    'ksar ':
      'Which native term refers to a type of small fortified city commonly found in Berber areas of North Africa? These were often stopping points on trade routes and frequently contained communal granneries called ghorfa.',
  },
  {
    'highlife ':
      'This genre of music originated in Ghana, and combines European instruments with the traditional songs of the Akan people. For much of its history it had a jazz-like sound with heavy use of horns, and recently it has incorporated syntheziers. ',
  },
  {
    'Cecil the Lion ':
      'In 2015, a dentist from the United States shot and killed this famous lion in Zimbabwe. It led to outrage, almost exclusively in the United States and Europe, and led to regulations making it harder for American citizens to hunt lions overseas. Many Zimbabweans interviewed by the media said either that they had never heard of this lion, or that they supported lion hunting because lions sometimes kill humans in Zimbabwe. ',
  },
  {
    'Убийство ожерельем  ':
      'The above organization was known to kill people by putting a tire around their neck, filling it with petrol, and lighting it on fire, a practice known as this. This method of extrajudicial execution was used primarily against South African blacks who collaborated with the apartheid government, or were seen as traitors to the anti-apartheid cause. ',
  },
  {
    'Господня армия сопротивления  ':
      'Founded by former internet celebrity Joseph Kony, this terrorist group famous for its use of child soldiers continues to fight against the government of Uganda. ',
  },
  {
    'Kingdom of Kongo ':
      'This native kingdom of central Africa, which lasted from 1390 to 1857, was heavily influenced by contact with the Portuguese, so much so that its rulers took Portuguese names like João I Nzinga a Nkuwu and Afonso I Nzinga Mbemba. ',
  },
  {
    'Джанджавид  ':
      "These Arab militias aligned with the Sudanese government fought against native tribesmen in the Darfur region of the Sudan during the early 2000's, and have been accused of genocide and other atrocities against the Darfur natives. ",
  },
  {
    'Stefan Batory ':
      'From 1576 to 1586, this ethnic Hungarian from Transylvania was the King of Poland. He defeated Ivan the Terrible in the Livonian War, but his most lasting accomplishment may have been his reform of the Polish cavalry',
  },
  {
    'Oder-Niesse Line ':
      'Following the end of World War II, a new border between Germany and Poland was established at this line, named for two rivers. It remains the border between Poland and Germany today. ',
  },
  {
    'Жемчужная река  ':
      'Guangzhou, Hong Kong, and Macau are all found in a region named for the delta of which major river of south China? ',
  },
  {
    'ROTOSCOPING ':
      'Using Max Fleischer’s modernized invention of the same name, what animation technique was used to make A-ha’s Take On Me and Dire Straits Money for Nothing videos, as well as Richard Linklater’s films Waking Life and Scanner Darkly?,',
  },
  {
    'Karl BARTH ':
      'Which Swiss Reformed theologian (1886-1968) is most well-known for his landmark commentary The Epistle to the Romans (1921), his involvement in the Confessing Church, and authorship of the Barmen Declaration? His influence expanded well beyond the academic realm to mainstream culture, leading him to be featured on the cover of Time on 20 April 1962. ',
  },
  {
    'SENNHEISER ':
      ' With its logo seen here, which German audio company founded in 1945 by Prof. Dr. Fritz __________ specializes in the design and production of a wide range of high fidelity products, including microphones, headphones, telephone accessories and aviation headsets for personal, professional and business applications?	',
  },
  {
    ' Palk Strait':
      ' Which strait lies between India and the island nation of Sri Lanka?	',
  },
  {
    ' Sakoku':
      ' Lasting from the 1630s to the 1850s, what was the name of the isolationist foreign policy of the Tokugawa shogunate that effectively banned foreigners from entering Japan? Its name can be obtained by changing the second and third letters in the answer to the previous question.	',
  },
  {
    ' Перцовый берег':
      'What name was given by European traders to the coastal area of western Africa, between Cape Mesurado and Cape Palmas? The region that is now part of Liberia was named after the cardamom-like spice "the grains of paradise" that came from there. ',
  },
  {
    'Trdelnik ':
      ' Beginning with the letter T,  What is the name of this Slovak-Czech pastry made from dough, sugar and walnuts? This variant of the chimney cake is often seen for sale on the streets of Prague.	',
  },
  {
    'Эйген Блейлер ':
      'To which Zurich psychiatrist do we owe the introduction of the terms schizophrenia and autism into the psychiatric vocabulary? ',
  },
  {
    ' Crêpe Suzette':
      ' Which French dessert consists of a thin flour pancake served with a sauce of caramelized sugar and butter, tangerine juice, zest, and Grand Marnier or orange Curaçao liqueur on top, served flambé?',
  },
  {
    ' Telophase':
      'With a name literally meaning ‘end stage’ in Greek, which is the final stage in both mitosis and meiosis?	 ',
  },
  {
    'P versus NP Problem ':
      'One of the seven Millennium Prize Problems selected by the Clay Mathematics Institute, which major unsolved problem in computer science asks whether every problem whose solution can be quickly verified can also be solved quickly?	 ',
  },
  {
    ' Tanuki':
      "What is the Japanese name for the country's subspecies of Asian raccoon dog (Nyctereutes procyonoides viverrinus) which plays a prominent role as a shape-shifting trickster in Japanese folklore? These creatures are often represented in art with enormous testicles which they can use as raincoats, weapons, or drums. ",
  },
  {
    ' Порабощенный разум':
      'What is the title of the 1953 non-fiction work by the Polish Nobel Laureate Czesław Miłosz in which he appraises Stalinism and explains its perplexing allure? ',
  },
  {
    'Milton Glaser ':
      "DC Comic's famous 'bullet' logo (in use between 1977 and 2005) was created by which American graphic designer, best-known for the I Love New York logo? ",
  },
  {
    ' Battle of Red Cliffs ':
      'Sometimes considered the largest naval battle in history (in terms of numbers involved), which battle of the winter of 208–9 CE was fought at the end of the Han dynasty by an alliance of the southern warlords Sun Quan, Liu Bei, and Liu Qi against the forces of the northern warlord Cao Cao? ',
  },
  {
    ' Vaalbara':
      "Hypothesized as (one of) the earliest of Earth's supercontinents, which landmass - dating from 2.7 to 3.6 billion years ago - has a name that derives from the names of the two portions of continental crust (one in Africa and one in Australia) that remain of it? ",
  },
  {
    'Brian Jones ':
      'Ousted from the band a few months earlier, which former Rolling Stones member died in 1969, again aged 27?	 ',
  },
  {
    ' Миклош Рожа':
      ' Which composer, who was born in Hungary in 1907 but later took US citizenship, is best remembered for his film scores, which included collaborations in the 1940s with Billy Wilder and Alfred Hitchcock? His scores for Spellbound and Ben-Hur both won the Academy Award for Best Score.',
  },
  {
    'In medias res ':
      "Which three-word Latin term, literally meaning 'in the middle of things', is used to describe a narrative work that opens in the middle of events, with gaps in the plot generally being filled in as the work proceeds? Examples include Hamlet and The Usual Suspects. ",
  },
  {
    'Tapioca ':
      'Bubble tea (or boba, or pearl milk tea) includes balls made of what substance?	 ',
  },
  {
    'Cava ':
      ' Mainly produced in Catalonia, which popular Spanish sparkling wine is made with macabeo or parellada [PARREH-YADA] grapes? ',
  },
  {
    'Festschrift ':
      ' Literally meaning ‘celebration publication’ or ‘celebratory writing’, which German word describes a book or collection of writings presented as an honour to an academic during his or her lifetime? ',
  },
  {
    ' Iman ':
      'Her name meaning ‘faith’ in Arabic, which Somali model, actress, and entrepreneur married David Bowie in 1992?  ',
  },
  {
    'Jean Moulin ':
      'Perhaps the best-known emblem of the French Resistance was of which doomed resistance fighter wearing his iconic fedora hat and scarf?  ',
  },
  {
    Manx: ' Ned Maddrell, who died in 1974, was the last native speaker of which language of the British Isles?',
  },
  {
    'ENDOR ':
      ' Being the home of a race of furry aliens called Ewoks, which fictional moon in the Star Wars universe was the site of a pivotal battle depicted in Return of the Jedi?	 ',
  },
  {
    'Джеймс Кэвизел ':
      ' Which actor played Jesus Christ in Mel Gibson’s 2004 The Passion of the Christ?	 ',
  },
  {
    'SPAMALOT ':
      ' “Sir Lancelot, the Homicidally Brave”, “Sir Robin, the Not-Quite-So-Brave-as-Sir-Lancelot”, “Sir Dennis Galahad, the Dashingly Handsome”, “Sir Bedevere, the Strangely Flatulent”, and “Patsy, King Arthur’s trusty servant/steed and constant companion” are just some of the characters listed in the synopsis of which hit musical that premiered in 2004 in Chicago?',
  },
  {
    'bell hooks ':
      " The oeuvre of what U.S. writer and professor, born gloria jean watkins, includes Ain't I a Woman?: Black Women and Feminism and We Real Cool: Black Men and Masculinity?",
  },
  {
    'Стрелок И ':
      " What archer in Chinese mythology, the husband of moon goddess Chang'e, shot down nine of the ten suns that were, all at once, scorching the earth? The remaining sun was frightened into rising and setting on time.	 ",
  },
  {
    'Ne Win ':
      ' What Burmese miltiary dictator who ruled from 1962 until his 1988 ouster promulgated a "Burmese Way to Socialism"? ',
  },
  {
    'Joaquin Rodrigo ':
      " Side one of Miles Davis' 1960 LP Sketches of Spain begins with an extended version of the second movement of what composer's Concierto de Aranjuez? ",
  },
  {
    'Десять процентов ':
      ' Sigourney Weaver, Jean Reno, Charlotte Gainsbourg, Jean Dujardin, and Juliette Binoche are just some of the actors to have appeared in which popular French television series - that debuted in 2015 - that follows the running of the Agence Samuel Kerr talent agency?	 ',
  },
  {
    'Chiang Mai ':
      " With a name meaning 'new city' because it became the new capital of the Lan Na kingdom when it was founded in 1296, which is the largest and most culturally significant city in Northern Thailand, serving as the region's unofficial capital? ",
  },
  {
    'César Chávez ':
      ' His birthday, on 31st March, is celebrated as a holiday in eight US states. Which Mexican-American labour leader and civil rights activist co-founded the National Farm Workers Association with Dolores Huerta in 1962? ',
  },
  {
    'Roche Limit ':
      ' After the French astronomer who first calculated it in 1848, what name is given to the minimum distance a satellite can orbit its planet and remain intact before being torn apart by the planet’s tidal forces?',
  },
  {
    'Murray Gell-Mann ':
      ' What was the name of the American physicist who named the fundamental particles ‘quarks’ after a line in a James Joyce novel?',
  },
  {
    'Operation Husky ':
      ' What was the codename of the World War II campaign that saw the Allies take Sicily from the Axis Powers in the summer of 1943?',
  },
  {
    'James Earl Jones ':
      ' Although David Prowse provided the body, which actor provided the voice of Darth Vader in the original Star Wars films?',
  },
  {
    'Tetum ':
      ' The official languages of East Timor are Portuguese and which Austronesian language spoken only on the island of Timor? ',
  },
  {
    'Emil von Behring ':
      ' Which German scientist won the first ever Nobel Prize in Physiology or Medicine for his discovery of a diphtheria antitoxin? ',
  },
  {
    'Gordon Banks':
      'Which legendary goalkeeper played for England in the 1966 World Cup Final against West Germany?',
  },
  {
    'Lake Vänern':
      'At 5,655 square km, which is the largest lake in the European Union?  ',
  },
  {
    'William Wilberforce':
      'The testimony of the former slave known as Gustavus Vassa helped inspire which Yorkshire MP to become the leading voice of the British parliamentary movement to abolish the slave trade?',
  },
  {
    'Daley Thompson':
      'Which British legend won the decathlon gold medal at the 1980 and 1984 Olympics?',
  },
  {
    Ивреа:
      'The Battle of the Oranges is an Italian festival in which participants throw oranges at one another for the sheer fun of it. In which small town near the city of Turin does the festival take place?',
  },
  {
    Кеш: "What is the name of the first and most important of the 5 Ks of Sikhism? It refers to the practice of allowing one's hair to grow naturally as a symbol of respect for the perfection of God's creation.",
  },
  {
    'Shaun White (Летающий помидор)':
      'Winning Olympic gold medals in 2006 and 2010, which legendary American snowboarder and skateboarder holds the record for the most gold medals won at the Winter X-Games?',
  },
  {
    Cadenza:
      "With a name deriving ultimately from the Latin for ‘a falling’, what is the musical term for a solo passage typically inserted towards the end of a concerto in order to display a performer's virtuoso technique? ",
  },
  {
    'Claudette Colbert':
      'You will no doubt be aware that Clark Gable won the Oscar for Best Actor for his role in It Happened One Night. But which French woman won the Oscar for Best Actress for her role in the same film?',
  },
  {
    'Капелла Скровеньи  ':
      'The Italian painter Giotto is best-known for his masterful fresco cycle adorning which chapel in Padua?',
  },
  {
    '[Teófilo] CUBILLAS':
      'At the 1978 World Cup, which Peruvian footballer scored five goals, second only to Mario Kempes? He is also one of only three players to score five or more goals in two different World Cups, the other two being Miroslav Klose and Thomas Müller. ',
  },
  {
    'Игры непокорённых':
      'What international sporting event was founded by Prince Harry for wounded, injured, and sick servicemen and women, both active and veterans? In its logo, the letter I in the first word is highlighted and the letters AM are highlighted in the second word.',
  },
  {
    '[Ingemar] JOHANSSON ':
      'Which Swedish boxer was rejected for his passivity in the heavyweight final against Ed Sanders at the 1952 Summer Games? Seven years later, he would win the heavyweight title, defeating Floyd Patterson at Yankee Stadium.',
  },
  {
    'SUDIRMAN CUP':
      'Which international mixed team badminton competition, founded in 1989, is named after a former Indonesian badminton player and founder of the Indonesian Badminton Association? The tournament has never been won by a non-Asian country, Denmark being the only European country to come close to winning, in 1999 and 2011.',
  },
  {
    ' [Ingemar] STENMARK ':
      'Which Swedish alpine ski racer, who is usually regarded as the greatest slalom and giant slalom specialist of all time, still holds the record for the biggest win-margin in a World Cup alpine race?',
  },
  {
    'FORMULA E':
      "Which single-seater motorsport championship was conceived by Jean Todt, president of the Fédération Internationale de l'Automobile, and presented to Alejandro Agag, Antonio Tajani, and Theo Teocoli in March 2011? Tajani was focused on reducing carbon dioxide emissions from racing.",
  },
  {
    CANASTA:
      'Which card game in the rummy family of games was invented by lawyer Segundo Sanchez Santos and his bridge partner Alberto Serrato in Montevideo, Uruguay, in 1939 in an attempt to develop a time-efficient game that would be as exciting as bridge?',
  },
  {
    'Кыз куумай ':
      'Literally known as "girl chasing," which equestrian traditional sport among Turkic peoples, such as the Azerbaijanis, Kazakhs, and Kyrgyz, shows elements of horse racing, but is often referred to as a "kissing game"?',
  },
  {
    'KETTLE WAR (Война супника)  ':
      'What name is given to the military conflict between the Holy Roman Empire and the Republic of the Seven Netherlands in October 1784? The name came from a kitchen item, which was the only victim of the confrontation.',
  },
  {
    'HYPERLOOP ':
      'Which high-speed transportation system, described by Elon Musk as the "Fifth Mode of Transport", was first presented in July 2012?',
  },
  {
    'MAJURO ':
      'What city is the capital and the largest city of the Marshall Islands? It is also a large coral atoll which was the site of the declaration by the Pacific Islands Forum signed in 2013, to make a unified action on climate change adaptation and international aid.',
  },
  {
    'RAPPLER ':
      'Journalist Maria Ressa has been an outspoken critic of former president of the Philippines Rodrigo Duterte, and was charged and convicted in the Philippines in 2019 for her work with what online news site, which she co-founded with other Filipino journalists? In 2021, her work was recognized when she was awarded the Nobel Peace Prize.',
  },
  {
    'SANIA MIRZA':
      'The first woman from India to be ranked World #1 in any sport, this tennis superstar finished her spectacular career, that has included 6 Grand Slam titles in doubles/mixed-doubles, on a high note by reaching the Australian Open mixed doubles finals earlier this year. Name her.',
  },
  {
    'RAYA AND THE LAST DRAGON':
      "Malaysian-American producer and screenwriter Adele Lim had a long career in TV until transitioning to film with 2018's Crazy Rich Asians. Her next screenwriting project was which 2021 animated film that featured an almost all-Asian cast, including Kelly Marie Tran, Awkwafina and Gemma Chan?",
  },
  {
    CHESS:
      'Hou Yifan, born in China in 1994, is the top-ranked woman in the world in her field of competition. As of July 2023, she has 64 points more than the next woman in the rankings, fellow Chinese competitor Ju Wenjun. In what endeavor do they compete?',
  },
  {
    'Цзян Цин':
      'Born in Zhucheng, China as Li Shumeng, she later chose the stage name Lan Ping during her brief acting career. Though Western journalists would come to call her "Madame Mao," Chinese women don\'t typically take their husband\'s surnames, so what is the name she was most famously known as during her years of political involvement, including forming the radical alliance known as the Gang of Four?',
  },
  {
    'Всем парням, которых я любила раньше':
      'Anna Cathcart, a Canadian actress of Chinese Irish descent, had a featured role in all the films in a series of literary adaptations of popular Young Adult novels by author Jenny Han. She received so much praise for her work in the original three Netflix movies that she now stars as the same character in a recently released spinoff series called XO, Kitty. Name any of the movies of the original trilogy that she was featured in.',
  },
  {
    BANANA:
      'The author of twelve novels, including her popular 1988 debut Kitchen, Mahoko Yoshimoto uses a pen name where she pairs her surname Yoshimoto with the given name ばなな. Phonetically the same in Japanese and English, what is this name, which she chose because she loves the flowers of a certain tropical fruit\'s plant, and because as a name it is "purposefully androgynous"?',
  },
  {
    'ANNA MAY WONG':
      'What Notable Woman of Asia, as the first Chinese American Hollywood star, was celebrated as a fashion icon of the 1920s and 1930s? Her most notorious encounter with the racism in the Hollywood movie industry was when MGM refused to cast her as the lead in the 1935 film The Good Earth (a story set in China and filled with Chinese characters) because the lead actor would be a white actor in yellowface, so the Hays code required that the lead actress be white as well. ',
  },
  {
    KIRIBATI:
      'What country\'s name comes from the Gilbertese language rendering for, well, "Gilberts", and is thus named after the 18th century British sea captain Thomas Gilbert? (The final two letters in the country\'s name, oddly enough for English speakers, are pronounced like an "s".)',
  },
  {
    'GENERAL TSO (Цыплёнок генерала Цо)':
      'Many foods are named for people, from Caesar salad to the humble sandwich. But few inspire entire movies about their eponyms. A 2014 documentary film titled "The Search for [redacted]" explores various theories about what 19th century military man, who certainly wasn\'t chicken when he crushed the Dungan Revolt? (Include both his military rank and name in your answer.)',
  },
  {
    DUNE: 'In this series, the desert-dwelling Fremen believe that the Shai-Hulud, or sandworm, is a living manifestation of their creator.',
  },
  {
    MIDICHLORIANS:
      'One famous user of a particular power claims that it is "an energy field created by all living things". However, the creator of the series in which it appears later retconned that power to be controlled by the presence of these beings inside the cells of users.',
  },
  {
    'DISMAS (второй – Гестас)':
      "We lack important biographical details for many early saints. Often tradition and folklore have stepped in to provide some of these details. What name has Roman Catholic tradition assigned to the penitent thief who was crucified (with some justice, according to his own words) at Christ's side?",
  },
  {
    LAHARS:
      'What are the deadly, fast-moving mudflows spawned by volcanoes called? More than 20,000 people were killed by them in Armero, Colombia in 1985.',
  },
  {
    Lido: '11 km barrier island in the Venetian Lagoon, northern Italy; it is home to about 20,400 residents. The Venice Film Festival takes place at the Lido late August/early September.',
  },
  {
    Funafuti:
      'capital of the island nation of Tuvalu. It has a population of 6,320 people (2017 census), and so it has more people than the rest of Tuvalu combined, with approximately 60% of the population.',
  },
  {
    ТИБÉСТИ:
      'нагорье в центральной части Сахары (Чад). Активный вулкан Эмми-Куси (3415 м) – высшая точка Сахары.',
  },
  {
    СТАЛАГНÁТЫ:
      'натёчно-капельные образования в виде колонн, образующиеся в карстовых пещерах при срастании сталагмитов и сталактитов.',
  },
  {
    ТÓНГА:
      'глубоководный жёлоб в юго-восточной части Тихого океана. Макс. глуб. 10 800 м. ',
  },
  {
    СОКÓТРА:
      'группа островов (с одноимённым, самым крупным островом) в Индийском океане, к востоку от мыса Гвардафуй; принадлежат Йемену.',
  },
  {
    'СИХОТЭ́-АЛИ́НЬ':
      'горная система на Дальнем Востоке (Хабаровский и Приморский кр.). Служит водоразделом рек бас. Амура и Японского моря. Протяжённость в субмеридиональном направлении более чем на 1000 км, шир. до 250 км, выс. 800–1000 м, высшая точка – г. Тардоки-Янги (2090 м).',
  },
  {
    'САЛУИ́Н ':
      'река в Юго-Восточной Азии (в Китае и Мьянме), частично служит границей между Мьянмой и Таиландом. Дл. ок. 3200 км, пл. бас. ок. 325 тыс. км². Берёт начало из ледников хр. Тангла в центр. части Тибетского нагорья, на выс. ок. 5000 м.',
  },
  {
    СÁВА: 'река на юге Центральной Европы (Словения, Хорватия, Босния и Сербия), правый приток Дуная. Города: Любляна, Загреб, Белград (в устье).',
  },
  {
    ТАХУМУ́ЛЬКО:
      'вулкан на гребне Вулканической Сьерры. Самая высокая точка Гватемалы и Центр. Америки (4220 м). Конус сложен андезитами, имеет две вершины. Восточная – остаток древнего кратерного вала, западная – активный молодой конус с кратером. Последнее извержение в 1863 г.',
  },
  {
    ТÁТРЫ:
      'самый высокий горный массив в Карпатах, на границе Польши и Словакии. Дл. 60 км, высшая точка г. Герлаховски-Штит (2655 м).',
  },
  {
    'ТАР ':
      'пустынная и полупустынная область в Индии и Пакистане. Протяжённость (с С.-В. на Ю.-З.) 850 км, пл. 200–300 тыс. км².',
  },
  {
    СОНÓРА:
      'пустыня в Северной Америке (США и Мексика), одна из самых красивых на Земле. Занимает низовья р. Колорадо, территории восточнее Калифорнийского залива и практически весь Калифорнийский п-ов (Нижняя Калифорния). Пл. св. 355 тыс. км².',
  },
  {
    РЕГИСТÁН:
      'пустыня на Иранском нагорье, самая засушливая часть Афганистана. Находится к В. и Ю. от р. Гильменд и её притока Аргандаба, севернее гор Чаган и западнее Кветто-Пишинского плоскогорья. Протяжённость по широте более 200 км, по меридиану до 200 км. Пл. ок. 40 тыс. км',
  },
  {
    'Lake Turkana':
      "a lake in the Kenyan Rift Valley, in northern Kenya, with its far northern end crossing into Ethiopia.[2] It is the world's largest permanent desert lake and the world's largest alkaline lake. By volume it is the world's fourth-largest salt lake[3] after the Caspian Sea, Issyk-Kul, and Lake Van (passing the shrinking South Aral Sea), and among all lakes it ranks 24th.",
  },
  {
    РУВЕНЗÓРИ:
      'горный массив в Восточной Африке, на границе Демократической Респ. Конго и Уганды. Открыт в 1876 г. исследователем Африки Г. М. Стэнли. Сводогорстовое поднятие дл. 120 км, выс. до 5109 м (пик Маргерита).',
  },
  {
    'РУБ-ЭЛЬ-ХÁЛИ':
      'пустыня на юго-востоке Аравийского полуострова, в Саудовской Аравии, Омане и Йемене. Одна из самых засушливых и мало исследованных областей мира, о чём свидетельствует её название (в переводе с арабского – «пустое место»).',
  },
  {
    'РОСС (Ross) Джеймс Кларк ':
      '(1800–1862), английский моряк, контр-адмирал, исследователь Арктики, один из первооткрывателей Антарктики. На судах «Эребус» и «Террор» в 1839–43 гг. совершил три плавания в Антарктику, открыл названные в его честь море и ледяной барьер, который проследил почти по всей длине.',
  },
  {
    'Christine de Pizan ':
      '(September 1364 – c. 1430), was an Italian-born French poet and court writer for King Charles VI of France and several French dukes. Considered to be some of the earliest feminist writings, her work includes novels, poetry, and biography, and she also penned literary, historical, philosophical, political, and religious reviews and analyses. Her best known works are The Book of the City of Ladies and The Treasure of the City of Ladies, both written when she worked for John the Fearless of Burgundy.',
  },
  {
    'Elwyn Brooks White ':
      "(July 11, 1899 – October 1, 1985) was an American writer. He was the author of several highly popular books for children, including Stuart Little (1945), Charlotte's Web (1952), and The Trumpet of the Swan (1970). In a 2012 survey of School Library Journal readers, Charlotte's Web came in first in their poll of the top one hundred children's novels.",
  },
  {
    'Jeff Lindsay':
      'American playwright and crime novelist best known for his novels about sociopathic Miami Police Department forensic analyst and serial killer-killing vigilante Dexter Morgan.',
  },
  {
    'Liane Moriarty ':
      '(born 15 November 1966) is an Australian author. She has written nine novels, including the New York Times best sellers Big Little Lies and Nine Perfect Strangers, which were adapted into television series for HBO and Hulu, respectively.',
  },
  {
    'Shigeru Miyamoto ':
      'creator of some of the most acclaimed and best-selling game franchises of all time, including Mario, The Legend of Zelda, Donkey Kong, Star Fox and Pikmin.',
  },
  {
    'Mark Rutte ':
      "(born 14 February 1967) is a Dutch politician who has served as Prime Minister of the Netherlands between 2010 and 2023. He is also the Leader of the People's Party for Freedom and Democracy (VVD) since 2006.",
  },
  {
    'Deloitte ':
      'the largest professional services network by revenue and number of professionals in the world and is considered one of the Big Four accounting firms along with EY, KPMG and PwC.',
  },
  {
    'Tim Cook ':
      "(born November 1, 1960) is an American business executive who has been the chief executive officer of Apple Inc. since 2011. Cook previously served as the company's chief operating officer under its co-founder Steve Jobs. He is the first CEO of any Fortune 500 company who is openly gay.",
  },
  {
    'Elizabeth Holmes ':
      "(born February 3, 1984) is an American former biotechnology entrepreneur who, in 2022, was convicted of fraud in connection to her blood-testing company, Theranos. The company's valuation soared after it claimed to have revolutionized blood testing by developing methods that needed only very small volumes of blood, such as from a fingerprick.",
  },
  {
    'Майк Джадж - Бивис и Баттхед, Царь горы ':
      '1999 American satirical black comedy film written and directed by Mike Judge. It satirizes the worklife of a typical 1990s software company, focusing on a handful of individuals weary of their jobs. ',
  },
  {
    'Pierre Omidyar ':
      'A technology entrepreneur, software engineer, and philanthropist, he is the founder of eBay, where he served as chairman from 1998 to 2015.',
  },
  {
    'Five whys ':
      "iterative interrogative technique used to explore the cause-and-effect relationships underlying a particular problem. The primary goal of the technique is to determine the root cause of a defect or problem by repeating the question 'Why?' five times. The answer to the fifth why should reveal the root cause of the problem. The technique was described by Taiichi Ohno at Toyota Motor Corporation. ",
  },
  {
    'Менталитет краба ':
      "a way of thinking best described by the phrase 'if I can't have it, neither can you'",
  },
  {
    'Jean Brillat-Savarin ':
      '(2 April 1755 – 2 February 1826) was a French lawyer and politician, who, as the author of Physiologie du goût (in English, The Physiology of Taste) became celebrated for his culinary reminiscences and reflections on the craft and science of cookery and the art of eating.',
  },
  {
    'Sue Grafton ':
      "(April 24, 1940 – December 28, 2017) was an American author of detective novels. She is best known as the author of the 'alphabet series' ('A' Is for Alibi, etc.) featuring private investigator Kinsey Millhone in the fictional city of Santa Teresa, California.",
  },
  {
    'Луи́ Риэ́ль ':
      'один из важнейших канадских политических деятелей, один из основателей провинции Манитоба, а также самый известный лидер канадских метисов, вставший на борьбу с англоязычными колонизаторами Северо-Западных территорий. Главный организатор серии восстаний метисов, закончившихся его казнью.',
  },
  {
    'Кэ́дмон ':
      'один из самых первых английских поэтов, чье полное имя не известно. Он является одним из двенадцати англосаксонских поэтов, представляющих средневековую литературу. ',
  },
  {
    'Blue Marble ':
      'фотография планеты Земля, сделанная 7 декабря 1972 года экипажем космического корабля «Аполлон-17» с расстояния примерно в от поверхности Земли. Находится в открытом доступе и, как работа НАСА, является общественным достоянием. Изображает полностью освещённую Землю (Солнце находилось позади астронавтов). Фотография использовалась во множестве произведений для изображения Земли из космоса. ',
  },
  {
    'Агнер Эрланг ':
      '1 января 1878, Лонборг, Дания — 3 февраля, 1929) — датский математик, статистик и инженер, основатель научного направления по изучению трафика в телекоммуникационных системах и теории массового обслуживания. Им была получена формула для расчета доли вызовов, получающих обслуживание на сельской телефонной станции и кому придётся ожидать пока делаются внешние вызовы. ',
  },
  {
    'Транзи́ ':
      'вид скульптурных надгробий, которые выполнены в виде частично разложившегося трупа. Такие надгробия создавались в Европе в период позднего Средневековья и в эпоху Возрождения. ',
  },
  {
    'Хайрам Бингем ':
      'американский и политик, обессмертивший себя открытием «затерянного города инков» Мачу-Пикчу. В 1911 году Бингем возглавил экспедицию, снаряжённую Йельским университетом на поиски затерянного города инков, который не смогли отыскать испанские конкистадоры. Из письменных источников по цивилизации инков следовало, что город имеет смысл искать в окрестностях Куско, в краю неприступных горных вершин.',
  },
  {
    'Алавиты ':
      'правящая династия в Марокко. Султаны с 1666 года, короли с 1957 года. ',
  },
  {
    'Джамбатти́ста Бази́ле ':
      'неаполитанский поэт и писатель-сказочник. Его написанная в стиле барокко «Сказка сказок» является первым в истории европейской литературы сборником сказочного фольклора. Некоторые из этих сказок позже стали хрестоматийными в обработках Шарля Перро и братьев Гримм (например, «Спящая красавица», «Золушка», «Кот в сапогах»). Родился 15 февраля 1566 года в небольшом городке Джульяно-ин-Кампанья',
  },
  {
    'Сезар Бальдаччини ':
      'французский скульптор. Наибольшую известность ему принесли произведения из металлолома, в 1960-х он получил мировое признание благодаря скульптурам из остовов разбитых машин. Художник использовал своё имя в качестве творческого псевдонима. В честь него была названа французская кинопремия, для которой он создал золотой приз.',
  },
  {
    'Гилберт и Джордж ':
      'британские художники-авангардисты, работают в жанре перформанса и фотографии. Прославились благодаря стилю «живой скульптуры» — художники изображали самих себя. ',
  },
  {
    'Прялка Дженни':
      'механическая прядильная машина, сконструированная Джеймсом Харгривсом в 1764 году. Считается одним из важнейших изобретений своего времени, ознаменовавшим начало промышленного переворота. ',
  },
  {
    'Хун Сюцюа́нь ':
      '(предположительно январь 1813 — 1 июня 1864) — лидер Тайпинского восстания и провозглашённого тайпинами «Небесного государства великого благоденствия».',
  },
  {
    'Мария-Луиза Лашапель ':
      'французская акушерка. Автор книги по женской физиологии, гинекологии и акушерству. Выступала против использования акушерских щипцов, способствовала распространению практики естественных родов. Считается матерью современного акушерства.',
  },
  {
    'Э́рик Аха́риус ':
      'шведский ботаник, миколог , «отец лихенологии». Разработал и установил систематику лишайников. В 1773 поступил в Упсальский университет и был одним из последних студентов великого Карла Линнея.',
  },
  {
    'Мерино́с ':
      'одна из наиболее исторически значимых и экономически влиятельных пород овец, высоко ценимая за шерсть. Эта порода была выведена и улучшена в Эстремадуре, на юго-западе Испании, примерно в XII веке; с конца XVIII-го века она была дополнительно усовершенствована в Новой Зеландии и Австралии, что привело к появлению современного мериноса.',
  },
  {
    'Зоил ':
      'всегда злословил о людях, только и делал, что наживал себе врагов и был удивительно придирчив. Однажды кто-то из философов спросил его, почему он всех хулит. «Потому, — был ответ, — что не могу, как мне того хочется, причинить им зло». (Пёстрые рассказы, книга 11, 10) За насмешки и издевательство над Гомером он был прозван «Бичом Гомера» ; называли его также «собакой красноречия».',
  },
  {
    'Арага́ц ':
      'изолированный горный массив на западе Армении, четвёртый по высоте в Армянском нагорье и самый высокий в современной Армении. Высота горы составляет 4090 метров ',
  },
  {
    'John Newbery ':
      "(9 July 1713 – 22 December 1767), considered 'The Father of Children's Literature', was an English publisher of books who first made children's literature a sustainable and profitable part of the literary market. He also supported and published the works of Christopher Smart, Oliver Goldsmith and Samuel Johnson. In recognition of his achievements the Medal was named after him in 1922.",
  },
  {
    'Julius Streicher ':
      'a member of the Nazi Party, the Gauleiter (regional leader) of Franconia and a member of the Reichstag, the national legislature. He was the founder and publisher of the virulently antisemitic newspaper Der Stürmer, which became a central element of the Nazi propaganda machine.',
  },
  {
    'Вьяса ':
      'легендарный индийский мудрец, считавшийся составителем вед и пуран, а также автором «Махабхараты».',
  },
  {
    'Alcmena ':
      'wife of Amphitryon by whom she bore two children, Iphicles and Laonome. She is best known as the mother of Heracles, whose father was the god Zeus.',
  },
  {
    'Халлю или Korean Wave':
      'cultural phenomenon in which the global popularity of South Korean popular culture has dramatically risen since the 1990s.',
  },
  {
    'Горгонейон ':
      'a special apotropaic amulet showing the Gorgon head, used by the Olympian deities Athena and Zeus: both are said to have worn it as a protective pendant, and often are depicted wearing it. It established their descent from earlier deities considered to remain powerful.',
  },
  {
    'Герман Бургаве ':
      "(  1668 –  1738 ) was a Dutch botanist, chemist, Christian humanist, and physician of European fame. He is regarded as the founder of clinical teaching and of the modern academic hospital and is sometimes referred to as 'the father of physiology,' along with Venetian physician Santorio Santorio (1561–1636). ",
  },
  {
    'Emil von Škoda':
      'Bohemian engineer and industrialist, founder of BLANK Works',
  },
  {
    'Herman Snellen ':
      'Snellen (1834 – 1908) was a Dutch ophthalmologist who introduced the chart to study visual acuity (1862).',
  },
  {
    'Шляпа охотника за оленями ':
      "a type of cap that is typically worn in rural areas, often for hunting, especially deer stalking. Because of the cap's popular association with the fictional detective Sherlock Holmes, it has become stereotypical headgear for a detective, especially in comical drawings or cartoons along with farcical plays and films.",
  },
  {
    'Выбор Хобсона':
      'кажущаяся свобода выбора при отсутствии реальной альтернативы. Это английское выражение используется для описания ситуации, когда человеку предоставляется иллюзия выбора, но на самом деле он может либо взять то, что дают, либо не брать вообще ничего. Считается, что возникновение выражения связано с ... (1544—1631), владельцем конюшни в Кембридже, который предлагал клиентам выбрать лошадь из ближнего ко входу стойла или не брать лошадь вообще.',
  },
  {
    Селадон:
      "a term for pottery denoting both wares glazed in the jade green celadon color, also known as greenware or 'green ware' (the term specialists now tend to use), and a type of transparent glaze, often with small cracks, that was first used on greenware, but later used on other porcelains.",
  },
  {
    'Эффект Бецольда ':
      'an optical illusion, named after a German professor of meteorology, who discovered that a color may appear different depending on its relation to adjacent colors.',
  },
  {
    'Bradley effect ':
      'a theory concerning observed discrepancies between voter opinion polls and election outcomes in some United States government elections where a white candidate and a non-white candidate run against each other.',
  },
  {
    'Busby Berkeley ':
      '(November 29, 1895 – March 14, 1976) was an American film director and musical choreographer. He devised elaborate musical production numbers that often involved complex geometric patterns. His works used large numbers of showgirls and props as fantasy elements in kaleidoscopic on-screen performances.',
  },
  {
    'José  Artigas':
      '(June 19, 1764 – September 23, 1850) was a soldier and statesman who is regarded as a national hero in Uruguay and the father of Uruguayan nationhood. ',
  },
  {
    'Николя́ Фуке́': `суперинтендант финансов Франции в ранние годы правления Людовика XIV с 1653 по 1661 год, один из самых могущественных и богатых людей Франции. В 1661 году по приказу короля был арестован и остаток жизни провёл в заточении. `,
  },
  {
    'Дарфурский конфликт ': `межэтнический конфликт в суданском регионе, вылившийся с 25 февраля 2003 года в вооружённое противостояние между центральным правительством, неформальными проправительственными арабскими вооружёнными отрядами «Джанджавид» и повстанческими группировками местного негроидного населения. `,
  },
  {
    Бандейранты: `участники экспедиций XVI—XVIII веков на удаленные от побережья территории португальских колоний в Америке. Первоначально их интересовали исключительно рабы, однако позднее их походы в основном имели целью разведку золота, серебра, алмазов или других полезных ископаемых. В ходе этих походов были исследованы земли от Тордесильясской черты до современных границ Бразилии. `,
  },
  {
    Лёсс: `осадочная горная порода, неслоистая, суглинисто-супесчаная, имеет светло-жёлтый или палевый цвет, сложена преимущественно пылеватыми зёрнами. Залегает в виде покрова от нескольких метров до 50—100 м — на водоразделах, склонах и древних террасах долин. `,
  },
  {
    'Tom Selleck ': `(born January 29, 1945) is an American actor. His breakout role was playing private investigator Thomas Magnum in the television series Magnum, P.I. (1980–1988), for which he received five Emmy Award nominations for Outstanding Lead Actor in a Drama Series, winning in 1985. `,
  },
  {
    'Simonetta Vespucci ': `Italian noblewoman from Genoa, the wife of Marco Vespucci of Florence and the cousin-in-law of Amerigo Vespucci. She was known as the greatest beauty of her age in Italy, and was allegedly the model for many paintings by Sandro Botticelli, Piero di Cosimo, and other Florentine painters. `,
  },
  {
    'Репродуцирование запрещено': `is a painting by the Belgian surrealist René Magritte. The work depicts a man standing in front of a mirror, but whereas the book on the mantelpiece is reflected correctly, the man's reflection also shows him from behind.

      `,
  },
  {
    'Таджин ': `блюдо из мяса и овощей, популярное в странах Магриба, а также специальная посуда для приготовления этого блюда.  `,
  },
  {
    'Иога́нн  Э́ккерман ': ` немецкий литератор, поэт. Известен своими исследованиями творчества И. В. Гёте, другом и секретарём которого он был.`,
  },
  {
    'Наксалиты ': ` неофициальное название вооружённых коммунистических, преимущественно маоистских, группировок в Индии. Название происходит от местности, где произошли первые выступления. Значительная часть терактов наксалитов приводит к человеческим жертвам: в 2010 году в Индии наксалиты осуществили 2212 терактов, унесших жизни 1003 человек. `,
  },
  {
    'Маражо́ ': `крупнейший остров Бразилии. Длина острова составляет 220 км, ширина до 150 км. Площадь — 40 100 км². Это 34-й по величине остров мира, размер которого сравним со Швейцарией и Московской областью. Нередко его называют самым большим в мире речным островом. Строго говоря, это неверно — северо-восточная часть острова омывается Атлантическим океаном.  `,
  },
  {
    'Рене Фавалоро ': `(1923—2000) — аргентинский врач, работавший частично и в США. В 1967 году на базе Кливлендской клиники впервые в мире выполнил аортокоронарное шунтирование, используя аутовенозные шунты.  `,
  },
  {
    'Дробильщики камня': `картина французского художника Гюстава Курбе, написанная в 1849 году. Хранилась в дрезденской галерее. Была уничтожена в 13 февраля 1945 года, когда во время перевозки 154 картин в Крепость Кёнигштайн, транспорт попал в район бомбардировки союзными войсками. На картине изображены двое мужчин в натуральную величину, занятых тяжелым, изнуряющим трудом, на фоне темного холма. `,
  },
  {
    'Монта́нь-Пеле́ ': ` вулкан в северной части острова Мартиника (Малые Антильские острова) и её высшая точка. Высота 1397 м, диаметр основания 15 км. Кратер овальной формы, размером 1000 на 750 метров. Печально знаменит из-за извержения 1902 г., когда раскалённая туча из пепла и газа (пирокластический поток) уничтожила город Сен-Пьер, где погибло около 30 тысяч человек. Извержение такого типа относят к пелейским.`,
  },
  {
    'Харамбе ': `17-летний самец западной равнинной гориллы, ставший известным благодаря нападению на ребёнка 28 мая 2016 года в зоопарке Цинциннати. Тогда трёхлетний ребёнок упал в вольер с гориллами, где, по свидетельствам очевидцев, его увидел Харамбе, горилла не делала вреда ребенку, просто таскала его из угла в угол. Опасаясь за жизнь ребёнка, сотрудники зоопарка застрелили гориллу. Инцидент, снятый на видео, вызвал бурную реакцию и широкое обсуждение о том, стоило ли убивать животное.`,
  },
  {
    Сентенарио: ` футбольный стадион в городе Монтевидео, Уругвай. Построенный специально к чемпионату мира 1930 года, он вмещал тогда до 100 тысяч зрителей. `,
  },
  {
    'Го́мруль ': ` движение за автономию Ирландии на рубеже XIX—XX веках. Предполагало собственный парламент и органы самоуправления при сохранении над островом британского суверенитета, то есть статус, аналогичный статусу доминиона.`,
  },
  {
    'У́кко ': `верховный бог, громовержец в карело-финской мифологии. Представлялся стариком с седой бородой, разъезжающим по небу на колеснице, мечущим молнии и производящим гром. Известен как покровитель скота и урожая. `,
  },
  {
    'То́рресов проли́в ': `пролив, отделяющий Австралию от острова Новая Гвинея. Пролив соединяет Тихий и Индийский океаны (соответственно Коралловое и Арафурское моря).  `,
  },
  {
    'Такби́р ': `возвеличивание Аллаха словами «Алла́ху А́кбар»  `,
  },
  {
    'Ним Чимпский ': `(19 ноября 1973 года — 10 марта 2000 года) — шимпанзе, который был предметом расширенного изучения возможности усвоения животными языка жестов при Колумбийском университете. Проект не был успешен: он усвоил гораздо меньше слов, чем даже объект другого подобного проекта — шимпанзе Уошо. `,
  },
  {
    'Орёл Саладина ': `геральдическая фигура, используемая как символ арабского национализма, а также как отличительный знак в вооруженных силах ряда арабских государств. С 1952 года используется как государственный символ Египта. С 1963 года этот образ принят в символике Ирака. `,
  },
  {
    'Коачелла ': `Один из крупнейших, самых известных и самых прибыльных музыкальных фестивалей в Соединенных Штатах и во всем мире. Впервые мероприятие состоялось в 1999 году. В число выступающих включены группы различной жанровой направленности — инди-рок, хип-хоп, электронная и поп-музыка; в рамках фестиваля также проходят художественные и скульптурные выставки. Фестиваль, основанный на искусстве музыки, а не на её популярности, получила звание «анти-Вудсток». `,
  },
  {
    'Джузеппе Мадзини ': ` ( 1805 — 1872) — итальянский политик, писатель и философ, сыгравший важную роль в ходе первого этапа движения за национальное освобождение и либеральные реформы в XIX веке.`,
  },
  {
    'Рикка́рдо Патре́зе ': ` (17 апреля 1954, Падуя, Венеция) — итальянский автогонщик, пилот Формулы-1 с по. Был обладателем рекорда по числу проведённых гонок Формулы-1, до того как в мае 2008 Рубенс Баррикелло превзошёл его достижение. Пришёл на подиум в 37 Гран-при — больше, чем любой другой итальянский пилот Формулы-1, из них выиграл 6. Вице-чемпион мира Формулы-1`,
  },
  {
    'Артур Филлип ': `адмирал Королевского флота Англии, губернатор штата Новый Южный Уэльс — первой европейской колонии на австралийском континенте. Иногда называется «отцом современной Австралии». Основан Сидней `,
  },
  {
    'МКULTRA ': `кодовое название секретной программы американского ЦРУ, имевшей целью поиск и изучение средств манипулирования сознанием, например, для вербовки агентов или для извлечения сведений на допросах, в частности с помощью использования психотропных химических веществ (оказывающих воздействие на сознание человека). По имеющимся сведениям, программа существовала с начала 1950-х годов и, по крайней мере, до конца 1960-х годов, а по ряду косвенных признаков продолжалась и позже.  `,
  },
  {
    'Сиемреа́п ': `город в Камбодже. Население города — 171 800 чел. (2009). Он был деревней, когда первые французские исследователи в XIX веке заново открыли Ангкор. С переходом города под французскую юрисдикцию в 1907 году, он стал расти за счёт туризма. `,
  },
  {
    'Да́вид По́пович ': ` (род. 15 сентября 2004) — румынский пловец, специализирующийся в плавании вольным стилем. На чемпионате мира по водным видам спорта 2022 года Попович завоевал золотые медали в двух заплывах вольным стилем (на дистанциях 100 и 200 метров). Попович является действующим мировым рекордсменом на дистанции 100 метров вольным стилем.`,
  },
  {
    'Ворота Европы': `башни-близнецы в Мадриде, в административном округе Чамартин. Высота башен составляет 114 м, тем самым среди башен-близнецов они в Испании уступают по высоте лишь башням Торрес-де-Санта-Крус в Санта-Крус-де-Тенерифе.  `,
  },
  {
    'Eino Leino ': ` (6 July 1878 – 10 January 1926) was a Finnish poet and journalist who is considered one of the pioneers of Finnish poetry and a national poet of Finland. His poems combine modern and Finnish folk elements. Much of his work is in the style of the Kalevala and folk songs in general.`,
  },
  {
    'Мариеха́мн ': `главный город Аландских островов, автономной территории в составе Финляндии. Один из главных портов Архипелагового моря. В городе проживает более половины всего населения архипелага — 11 186 человек.  `,
  },
  {
    'МУЛАСÉН ': `высочайшая вершина Пиренейского полуострова (3478 м). Находится в Юж. Испании, в Андалусских горах, в гл. цепи хр. Сьерра-Невада. `,
  },
  {
    'Аск и Эмбла ': ` «ясень» и «ива» — первые люди, мужчина и женщина, которых в виде древесных прообразов скандинавские боги Один, Лодур и Хёнир (вариант: Один, Вили и Be) нашли на берегу моря, доделали и оживили.`,
  },
  {
    'Аудумла ': `мифическая корова, которая возникла из инея, наполнявшего мировую бездну, и выкормила великана Имира — первое человекоподобное существо. `,
  },
  {
    'Louis-Antoine, Comte de Bougainville ': `(12 November 1729 – 31 August 1811) was a French admiral and explorer. A contemporary of the British explorer James Cook, he took part in the Seven Years' War in North America and the American Revolutionary War against Britain. He later gained fame for his expeditions, including a circumnavigation of the globe in a scientific expedition in 1763, the first recorded settlement on the Falkland Islands, and voyages into the Pacific Ocean.  `,
  },
  {
    'Жёлтый малыш': ` American comic strip character that appeared from 1895 to 1898 in Joseph Pulitzer's New York World, and later William Randolph Hearst's New York Journal. Use of word balloons in it influenced the basic appearance and use of balloons in subsequent newspaper comic strips and comic books.`,
  },
  {
    'Charles Blondin ': `(28 February 1824 – 22 February 1897) was a French tightrope walker and acrobat. He toured the United States and was known for crossing the 1100 ft Niagara Gorge on a tightrope. His name became synonymous with tightrope walking. `,
  },
  {
    'Жан Болланд': ` фламандский историк церкви, агиограф, священнослужитель, иезуит. Известен тем, что положил начало монументальному критическому изданию житий святых — Acta sanctorum, продолжающемуся до настоящего времени. `,
  },
  {
    'Anna Karenina principle ': `Diamond uses this principle to illustrate why so few wild animals have been successfully domesticated throughout history, as a deficiency in any one of a great number of factors can render a species undomesticable. Therefore, all successfully domesticated species are not so because of a particular positive trait, but because of a lack of any number of possible negative traits. `,
  },
  {
    'Antoine-Augustin Parmentier ': `(12 August 1737 – 13 December 1813) was a French pharmacist and agronomist, best remembered as a vocal promoter of the potato as a food source for humans in France and throughout Europe. His many other contributions to nutrition and health included establishing the first mandatory smallpox vaccination campaign (under Napoleon beginning in 1805, when he was Inspector-General of the Health Service) and pioneering the extraction of sugar from sugar beets.`,
  },
  {
    'Чистая линия ': `style of drawing created and pioneered by Hergé, the Belgian cartoonist and creator of The Adventures of Tintin. It uses clear strong lines sometimes of varied width and no hatching, while contrast is downplayed as well. Cast shadows are often illuminated, and the style often features strong colours and a combination of cartoonish characters against a realistic background. `,
  },
  {
    'Буденновская лошадь ': ` breed of horse from Russia. It was bred as a military horse after the Russian Revolution of 1917; in the twenty-first century it is used as an all-purpose competition horse and for driving. `,
  },
  {
    'Anton syndrome': `a rare symptom of brain damage occurring in the occipital lobe. Those who have it are cortically blind, but affirm, often quite adamantly and in the face of clear evidence of their blindness, that they are capable of seeing. Failing to accept being blind, people with this syndrome dismiss evidence of their condition and employ confabulation to fill in the missing sensory input. `,
  },
  {
    'Четки Бейли ': ` features of total and annular solar eclipses. Although caused by the same phenomenon, they are two distinct events during these types of solar eclipses. As the Moon covers the Sun during a solar eclipse, the rugged topography of the lunar limb allows beads of sunlight to shine through in some places while not in others. `,
  },
  {
    'The Sigil of Baphomet ': `official insignia of the Church of Satan, first appearing on the cover of The Satanic Mass album in 1968, and adorning the cover of The Satanic Bible the following year. The sigil has been called a "material pentagram" representational of carnality and earthy principles.  `,
  },
  {
    'Alice in Wonderland syndrome ': `a neurological disorder that distorts perception. People may experience distortions in their visual perception of objects, such as appearing smaller (micropsia) or larger (macropsia), or appearing to be closer (pelopsia) or farther (teleopsia) than they are.  `,
  },
  {
    'Bilderberg Meeting ': ` annual off-the-record forum established in 1954 to foster dialogue between Europe and North America. `,
  },
  {
    'Чав ': `унизительное прозвище определённой группы молодых людей в Великобритании. Под словом ... чаще всего понимают белых подростков, выходцев из рабочих семей, которые отличаются антисоциальным, агрессивным поведением и нередко привлекаются к ответственности за распитие спиртного в общественных местах, нарушения, связанные с наркотиками, драки и другие формы подростковой преступности. `,
  },
  {
    Оли́мпия: `парагвайский футбольный клуб из Асунсьона. Один из самых титулованных клубов мира, старейшая и самая титулованная команда страны: трижды завоёвывала Кубок Либертадорес и однажды — Межконтинентальный кубок. Единственный парагвайский клуб, выигрывавший международные турниры под эгидой КОНМЕБОЛ.`,
  },
  {
    'Кибера ': `поселение в кенийской провинции Найроби, пригород города Найроби, располагается в 5 километрах от центра столицы. Крупнейшие трущобы Кении, а также крупнейшие городские трущобы в Африке. `,
  },
  {
    'Гомстед-акт ': `федеральный закон, принятый 20 мая 1862 года в США, разрешивший передачу в собственность гражданам США незанятых земель на западе страны за небольшую плату.  `,
  },
  {
    'Женщины для утешения ': ` эвфемизм, вошедший в употребление в годы Второй мировой войны для обозначения женщин, вынужденных быть сексуальными рабынями для обслуживания солдат и офицеров Императорской армии Японии в оккупированных странах и территориях до и во время Второй мировой войны. `,
  },
  {
    'У́зел Соломóна ': `общее имя для традиционного декоративного украшения, используемого с древних времён и найденного во многих культурах. Вопреки названию, это, с точки зрения теории узлов, зацепление, а не узел. Он состоит из двух замкнутых петель, которые дважды переплетены.  `,
  },
  {
    'Эффект Бенджамина Франклина ': `психологический эффект, заключающийся в том, что человек, сделавший что-то хорошее для другого человека, с большей вероятностью ещё раз поможет этому человеку, нежели если бы он получил помощь от него. Объяснением этому может быть то, что наш мозг видит причину, по которой мы помогли, в том, что этот человек нам симпатичен. `,
  },
  {
    'Дунганское восстание ': `восстание в 1862—69 годах. Примерно в то же время восстали и мусульмане Юньнаня на юго-западе Китая. Унеся жизни от 8 до 15 миллионов человек, это восстание стало одним из самых кровопролитных военных конфликтов в истории.`,
  },
  {
    Типперери: `В ЭТОМ ИРЛАНДСКОМ ГОРОДЕ установлена статуя, на которой указано расстояние до ряда других, довольно далёких от него, городов.`,
  },
  {
    '[Мэри] Рид (пиратка)': `ОНА в титрах последней серии сериала «Чёрные паруса»  указана под именем Марк, которым в реальности действительно пользовалась. `,
  },
  {
    '[Людевит] Гай. Комментарий: хорватский лингвист, создатель латинского алфавита для сербохорватского языка (гаевицы), и один из идеологов движения иллиризма, призывавшего к объединению и независимости южнославянских народов в Австрийской Империи (и потенциально — всех южных славян).': `В 1835 году ЭТОТ ПАРЕНЬ основал журнал «Danica ilirska» [даница илирска].`,
  },
  {
    'Джек Фрост или Ледяной Джек ': `персонаж англо-саксонского и германо-скандинавского фольклора, олицетворяющий собой зиму и все её проявления — мороз, лёд, снег и холод. Согласно традициям, он оставляет морозные узоры на окнах холодным зимним утром и щиплет конечности в холодную погоду`,
  },
  {
    'Снега кающихся': `своеобразные образования на поверхности снеговых и фирновых полей в виде наклонных игл или пирамид высотой до 6 метров в высокогорьях тропиков и субтропиков, издали производящие впечатление толпы коленопреклоненных монахов. На леднике Кхумбу горы Эверест обнаружены «кающиеся монахи» высотой до 30 м.`,
  },
  {
    '[Том] Паркер.': `В конце 1920-х ОН организовывал бродячие цирки, а позже переключился на работу с музыкантами. В 1946 году ОН был посвящён в “полковники”, что было почётным титулом на Юге США.`,
  },
  {
    'Гимн Словении': `В 1989 году ЕГО текстом стала строфа из стихотворения Франце́ Преше́рна (1800-1849).`,
  },
  {
    'хопи. Комментарий: Бенджамин Уорф утверждал, что хопи представляют себе время не так, как европейцы, и это отражается, в том числе, и в их языке; это было одним из аргументов в пользу гипотезы лингвистической относительности (также известной как гипотеза Сепира — Уорфа). С утверждениями Уорфа многие не согласились': `В 1983 году Экхарт Малотки опубликовал подробное исследование одной из грамматических категорий ЭТОГО ЯЗЫКА, опровергавшее заявления, сделанные сорока годами ранее.`,
  },
  {
    'Золотая легенда': `ЕЁ популярность была такова, что до наших дней дошло более тысячи копий, переписанных от руки. Благодаря своей занимательности и насыщенности деталями ЕЁ также называют энциклопедией средневековой жизни. `,
  },
  {
    'Камень Красноречия (Камень Бла́рни)': `Стена жвачки — достопримечательность Сиэтла, покрытая слоем использованной жвачки. В 2009 году Стена жвачки была признана второй самой негигиеничной достопримечательностью — первой стал ОН.`,
  },
  {
    '(Барбара) Такман. Комментарий: Американская историк и лауреатка Пулитцеровской премии 1962го года за книжку «Августовские пушки», посвящённой анализу причин и началу Первой Мировой Войны. Такман была внучкой американского посла в Османской Империи и невольно стала свидетелницей первого крупной морского столкновения этой страшной войны.': `В возрасте двух лет, 10 августа 1914го года, ОНА стала свидетельницей одного из первых эпизодов Первой Мировой Войны – преследования немецких кораблей Гебен и Бреслау английским флотом в Средиземном море. В ЕЁ семье впоследствии часто вспоминали клубы дыма от пушечных выстрелов, заметные с борта пассажирского корабля, направлявшегося в Константинополь.`,
  },
  {
    'Американ Макги Комментарий: Джон Кармак – знаковая личность в игровой индустрии, разработчик Дума и Квэйка. Американ Макги работал с Кармаком над Думом, а также выпустил пару своих игр, самая известная из которых – Американ Макги Элис.': `В 1992 году ОН подружился со своим соседом Джоном Кармаком.`,
  },
  {
    РоГоПаГ: `Последней буквой В НЁМ является Уго Григоретти, с 1950-х работавший автором программ канала RAI.`,
  },
  {
    'секвойядендрон. Гигантские секвойядендроны — это род растений, к которым относятся, например, знаменитые «Генерал Шерман» и «Генерал Грант».': `В середине 20-го века многие люди специально приезжали в Калифорнию, чтобы сфотографироваться на фоне «Мамонта». Мамонт — это «гигантский ОН». Восстановите в исходном виде слово, в котором мы спилили 12 букв.`,
  },
  {
    '[Тони] Бриттен Комментарий: композитор, который создал гимн лиги чемпионов УЕФА в 1992-ом, вскоре после ЧМ по футболу в Италии(1990-ый год). Этот гимн как известно многое позаимствовал из “Садок-священник” Генделя.': `В 2013-ом году в одном интервью ОН признавался: “...у меня заказали написать что-то похожее на гимн, потому что после «Трех теноров» на чемпионате мира по футболу в Италии классическая музыка была в моде…. мне нравится думать, что это был не полный грабеж”`,
  },
  {
    Funko: `американская компания, производящая виниловые фигурки, плюшевые игрушки и другие товары, посвящённые героям фильмов, сериалов, комиксов, мультфильмов, игр и аниме. Каждая фигурка имеет свой специальный узнаваемый стиль.`,
  },
  {
    'золгенсма Комментарий: речь о самом дорогом лекарстве мира, которое способно вылечивать спинальную мышечную атрофию или СМА. Как и подобает фармацевтическим гигантам, продавать золгенсма по доступным ценам, Novartis не хочется': `В 2019 компанию Novartis раскритиковали за лотерею, где около 100 человек в год могли получить ЕГО бесплатно. ЕГО стоимость в несколько миллионов компания объясняет высокой ценой альтернативной генной терапии. `,
  },
  {
    'Куахог ': `Согласно истории, рассказанной в одной из серий , ЭТОТ ГОРОД штата Род-Айленд был основан Майлзом «Пустомелей» Мушкетом и волшебной устрицей.`,
  },
  {
    'Автопортрет в зеленом Бугатти': `ЭТА КАРТИНА 1929 года была заказана для обложки немецкого журнала Die Dame [дай дем], который определил женщину как символ освобождения. `,
  },
  {
    'Дыр бул щыл': `Давид Бурлюк писал, что ЭТИ ТРИ СЛОВА означают «дырой будет уродное лицо счастливых олухов».`,
  },
  {
    Шиваджи: `What 17th century warrior-king, the first Chhatrapati (ruler) of the Maratha Empire, is the namesake of Mumbai's major international airport?`,
  },
  {
    Sankofa: `What term from the Akan Twi and Fante languages of Ghana meaning "go back and get it" is usually represented by a bird with its feet facing forward and its head turned backwards?  Symbols like this (two birds forming a heart) can be found on gates all over Brooklyn, New York.`,
  },
  {
    'Frantz Fanon': `What political philosopher from Martinique is known for his seminal work Black Skin, White Masks (Черная кожа, белые маски), a critique of racism and colonial domination?`,
  },
  {
    'Природный ядерный реактор в Окло': `What mine in Gabon is believed to be the only site on earth where natural self-sustaining nuclear fission reactions are thought to have occurred? These reactions are estimated to have taken place approximately 1.7 billion years ago. `,
  },
  {
    Vimana: `The most cited example of what "v" flying palaces of Hindu and Sanskrit texts is the Pushpaka one stolen from Lord Kubera by Ravana?`,
  },
  {
    'Карлуш Бе́лу': `Photographed here is what East Timorese Roman Catholic bishop who shared the 1996 Nobel Peace Prize with politician Jose Ramos Horta for "working towards a just and peaceful solution to the conflict in East Timor"?  `,
  },
  {
    'Yesterday, Today, and Tomorrow': `What 1963 comedy anthology film directed by Vittorio De Sica stars Sophia Loren and Marcello Mastroianni in a trio of short stories set in different parts of Italy?`,
  },
  {
    'Apollonius of Rhodes': `What ancient Greek writer's Argonautica is the only surviving epic poem of the Hellenistic period?`,
  },
  {
    'Blue Origin': `Jeff Bezos announced last week he was stepping down later this year of CEO of Amazon. Bezos intends to shift focus to what space venture he founded in 2000?`,
  },
  {
    'Орекьетте ': `The name of what disc-shaped pasta seen here comes from Italian for "little ear"?`,
  },
  {
    'Johannes Brahms': `Conductor Hans von Bulow called what composer's 1876 Symphony No. 1 in C minor "Beethoven's Tenth"? This composer claimed the symphony took him nearly 21 years to complete.`,
  },
  {
    'Bunker Hill': `The name of the Massachusetts town of Billerica reflects the presence of denizens of Billericay on the Mayflower. The Billerica native Asa Pollard was the first man to be killed at which battle fought on 17 June 1775?`,
  },
  {
    'Kushan Empire': `Reigning from 127 to 151 CE, Kanishka was the best-known ruler of which empire, originally formed in the territories of ancient Bactria on either side of the middle course of the Oxus River in what is now northern Afghanistan, and southern Tajikistan and Uzbekistan, before expanding rapidly across the northern part of the Indian subcontinent?`,
  },
  {
    Prana: `Comparable to the Chinese notion of Qi, and with a name deriving from the Sanskrit for ‘breath’, which vital force sustains the life of animate beings in Hindu philosophy?`,
  },
  {
    Тахо: `Fannette Island is the only island in which major body of water that lies on the border between California and Nevada?`,
  },
  {
    'Max Havelaar': `Used to certify that a product qualifies as ‘Fairtrade’, this logo is named after which Dutch literary character, created by Multatuli in 1860?`,
  },
  {
    'Изюминка на Солнце': `Its title taken from Langston Hughes’ poem Harlem, which Lorraine Hansbury play - describing a few weeks in the life of an African-American family living in Chicago's Southside - was adapted into a 1961 film starring Sidney Poitier?`,
  },
  {
    'John Cazale (муж Мэрил Стрип)': `Before his death in 1978, which American actor appeared in only five films with all five being nominated for the Academy Award for Best Picture? The five films in question are The Godfather, The Godfather Part II, Dog Day Afternoon, The Conversation, and The Deer Hunter.`,
  },
  {
    Han: `Which East Asian ethnic group constitutes around 92% of the population of mainland China? This is also the name of the second imperial dynasty of China, established by the rebel leader Liu Bang in 202 BCE.`,
  },
  {
    'Charles M. Schultz (Peanuts, мальчик Чарли Браун и собака Снупи)': `Which cartoonist had his studio at One Snoopy Place in Santa Rosa?`,
  },
  {
    'Ephron (Nora)': `Which American writer and film director is known for her Romantic comedies Sleepless in Seattle (1993),  You've Got Mail (1998) and for writing the screenplays for When Harry Met Sally (1989) and Silkwood (1983)`,
  },
  {
    'Exxon Valdez': `Which Supertanker ran aground off the coast of Alaska in Prince William Sound in 1989, spilling 12 000 000 gallons of crude oil over a few days and causing massive environmental damage to the habitat of salmon, seals, otters and seabirds?`,
  },
  {
    'Эрик Карл': `A co-author of Brown Bear, Brown Bear, What do you see?(1967) who is the American graphic designer (1929-) and illustrator also responsible for the children's book The Very Hungry Caterpillar (1969) (Очень голодная гусеница), which has sold over 50 million copies worldwide?`,
  },
  {
    "Brooks's law": `an observation about software project management that "Adding manpower to a late software project makes it later."[1][2] It was coined by in 1975 book The Mythical Man-Month. According to the author, under certain conditions, an incremental person when added to a project makes it take more, not less time.`,
  },
  {
    "Parkinson's law": `A humorous 1955 article in The Economist proposed what "law", the observation that work expands to fill the amount of time allotted for its completion?`,
  },
  {
    'Fredrick Taylor': `What American father of so-called "scientific management" ran dubious experiments that allegedly greatly increased the efficiency of pig iron laborers at a Bethlehem Steel plant?`,
  },
  {
    'Ida Lupino': `In 1953, this woman became the first woman to direct a mainstream American film noir with The Hitch-Hiker (Попутчик) — a tense drama in which a fishing trip becomes a car ride from hell for two friends held hostage by an escaped convict. Who are we looking for?`,
  },
  {
    Neom: `For this question we're looking for a planned cross-border city in the Tabuk Province of Saoudi Arabia. t is planned to incorporate smart city technologies and also function as a tourist destination. What is the name of this project?`,
  },
  {
    Arpanet: `The first version of the internet is over 50 years old. In 1969, the U.S. Department of Defense Advanced Research Projects Agency created a computer network, the first internet prototype, albeit a more limited one. It only connected mainframes at universities, government buildings, and defense contractor facilities, motivating the development of a faster, more comprehensive mobile network, like the modern internet. What was the name of this mobile network?`,
  },
  {
    Garavani: `This Italian fashion designer, made red dresses just as famous as Coco Chanel’s Little Black Dress. His red dress has gained so much popularity that it has earned the nickname "Valentino Red". But what was his surname?	`,
  },
  {
    'Спенсер Туник': `This American is internationally known for organizing and photographing massive nude gatherings in public spaces, including parks, streets, and squares. His work has generated great controversies regarding the juxtaposition of public space, nudity, and art. Who is he?`,
  },
  {
    'Ed Gein': `It takes one particularly terrifying creep to inspire Hannibal Lecter, Norman Bates, and Leatherface, but that's the legacy left by this horrifying serial killer. When he was finally caught and his house of horrors in Plainfield, Wisconsin, discovered, police found masks and lampshades made from human skin, among plenty of other atrocitie. Who was this serial killer?`,
  },
  {
    'Гривистый волк': `This Chrysocyon brachyurus is the largest canine in South America, with a weight between 20 and 30 kg (44 lbs and 73 lbs), and reaches up to 90 cm (35 in) at the withers. Its long, thin legs and dense reddish coat give it an unmistakable appearance. What animal that mainly lives in open and semi-open habitats, especially grasslands with scattered bushes and trees, are we looking for?`,
  },
  {
    AstraZeneca: `This is a multinational pharmaceutical and biopharmaceutical company with its headquarters in Cambridge, England. It has a portfolio of products for major disease areas including cancer, cardiovascular, gastrointestinal, infection, respiratory and inflammation, but nowadays its more famous because it has produced one of the vaccines for Covid 19. What's the name of this company?`,
  },
  {
    'Sutton Hoo ': `In AD 624	Raedwald, King of East Anglia, dies. Many scholars believe that he is buried inside of the ship discovered in 1938 at [BLANK] in Suffolk, one of the most sensational archaeological finds in British history. The sword and helmet found there are in the British Museum.`,
  },
  {
    'Karbala (Битва при Кербеле)': `In AD 681	At the Battle of [BLANK], the followers of Husayn, grandson of Ali, are defeated by forces loyal to the Umayyad Caliphate. The split between Shia and Sunni Muslims is traditionally dated to this battle.`,
  },
  {
    'Charles Martel': `In AD 732	The Frankish general [BLANK] defeats a Muslim army at the Battle of Tours (sometimes confusingly called the Battle of Poitiers). Though modern historians dispute the battle's macrohistorical importance, the battle has traditionally been seen as saving Western Europe from Islamic domination.`,
  },
  {
    Боробудур: `In AD 750	On the island of Java in what is now Indonesia, [BLANK], the largest Buddhist temple in the world, is built. It is still a major tourist attraction today.`,
  },
  {
    'An Lushan': `In AD 756	China is being devastated by civil war, sparked when a Turkish general named [BLANK] and his friend (and eventual successor) Shi Siming rebelled against the Emperor the previous year.`,
  },
  {
    Алкуин: `In AD 786	The English priest [BLANK] is active at the Palace School of Charlemagne in Aachen (or Aix-la-Chapelle). He is by far the leading scholar of his time in Western Europe, and is credited with standardizing the way that Latin is written and pronounced during the European Middle Ages.`,
  },
  {
    'Период Хэйан': `In AD 794 The Japanese capital is moved to modern-day Kyoto. This is the beginning of the [BLANK] period of Japanese history, named for a shrine in Kyoto. Tale of Genji would be written during this era.`,
  },
  {
    Lindisfarne: `In AD 794	The Viking Age has started in the British Isles, having formally commenced the previous year when Viking raiders attacked the monastery at [BLANK], located on an island off the coast of Northumberland, killing or enslaving most of the monks in an act that shocks the Christian West.`,
  },
  {
    Ravenna: `In AD 526	Theodoric the Great dies, and construction begins on the Basilica of San Vitale. Both of these events take place in [BLANK], a city in northern Italy known for its Byzantine mosaics and early Christian structures, eight of which are part of a UNESCO World Heritage Site.`,
  },

  {
    Tribonian: `In AD 539	The Byzantine Empire is now governed by the Corpus Juris Civilis, or the Justinian Code, a code of laws compiled by [BLANK], a nobleman and lawyer serving the Emperor Justinian.`,
  },
  {
    Суй: `In AD 589	Meanwhile, China has been reunited by Emperor Wen, who founds the short-lived [BLANK] dynasty. He will be one of only two emperors from this dynasty.	`,
  },
  {
    'Chichen Itza': `The Mayan City of [BLANK] in the Yucatan peninsula becomes a major power. It is famous for its pyramid called "El Castillo" (Пирамида Кукулькана) and is often visited by tourists from nearby Cancun. Indeed, so many tourists visit the ruins of this city today that it briefly had its own international airport.	`,
  },
  {
    'Augustine of Canterbury (первый архиепископ Кентерберийский. Вошёл в историю как «апостол англичан» и основатель Церкви Англии)': `In AD 597	[BLANK] becomes the first Archbishop of Canterbury, having been sent to convert the heathen English by Pope Gregory the Great (of Gregorian Chant fame).`,
  },
  {
    Кахокия: `In AD 800	Approximte time that Native Americans begin building mounds at [BLANK], an archaeological site near the modern-day American city of St. Louis. It is by far the most famous site of the Mississippian Culture.`,
  },

  {
    'Париж горит': `We'll start off by naming this 1990 documentary, in which Jennie Livingston explores the drag community of New York City.`,
  },
  {
    Бестолковые: `If you're not feeling up to an action movie, you could instead watch this Amy Heckerling movie, in which Alicia Silverstone wears fashionable clothes while being a virgin who can't drive.`,
  },
  {
    "Jennifer's Body": `We'll end with this 2009 Karyn Kusama film, in which Megan Fox is transformed into a demon and proceeds to kill a lot of men for personal reasons. This film is notable for its Diablo Cody dialogue.`,
  },
  {
    'Эйлин Уорнос': `Charlize Theron won the Academy Award for Best Actress for her portrayal of this serial killer in Patty Jenkins' Monster.`,
  },
  {
    'Полоса Аузу': ` Highlighted here in red is what "A" strip of land disputed between Chad and Libya?`,
  },
  {
    'Слёйсское морское сражение': `One of the first major engagements of the Hundred Years War was what 1340 naval battle near Zeeland where 190 French ships were lost, captured, or destroyed? The losses from this battle crippled France's navy and inhibited any future prospects of an invasion of England.`,
  },
  {
    'Хейке Камерлинг-Оннес': `What Dutch physicist and Nobel laureate discovered, in 1911, the phenomenon of superconductivity by using liquid helium to cool mercury below its critical temperature?`,
  },
  {
    Malawi: `The kwacha is the primary monetary unit of Zambia and what other country on Zambia's eastern border?`,
  },
  {
    Вуссуар: `What French loan word, derived from Latin for "to roll", describes a wedge-shaped or tapered stone used to construct an arch?`,
  },
  {
    Тинвальд: `What legislature of the Isle of Man claims to be the oldest continuous parliamentary body in the world? This legislature includes a directly-elected lower body called the House of Keys.`,
  },
  {
    'Империя Маурьев': `Chandragupta, Bindusara, and Asoka were the first three emperors of what empire that ruled in South Asia between 322-184 BC?`,
  },
  {
    Заветы: `What 2019 novel by Margaret Atwood is set 15 years after the events of The Handmaid's Tale?`,
  },
  {
    'Hendrik Lorentz (Сольвеевские конгрессы, в честь предпринимателя Эрнеста Сольве)': `Which Dutch physicist chaired the first Solvay conference? In 1902 he had won a Nobel prize for providing a theoretical explanation for the Zeeman effect.`,
  },
  {
    'Federico Garcia Lorca': `The 1932 play “Blood Wedding” is a tragedy written by which Spanish playwright who is thought to have been executed at the start of the Spanish Civil War in 1936, although his remains have never been found?`,
  },
  {
    Cassiopeia: `Which Aethiopian queen bragged that she was more beautiful than the Nereids, an action which resulted in her daughter Andromeda being chained to a rock as a sacrifice to the sea monster Cetus?`,
  },
  {
    'Nizami Ganjavi': `Which Persian Sunni Muslim poet, who died in 1209, is best-remembered for a set of five long narrative poems known collectively as the Khamsa? One of those poems, Layla and Majnun (Лейли и Маджнун), was called "the Romeo and Juliet of the East" by Lord Byron and inspired Eric Clapton to write the Derek and the Dominos' hit Layla.`,
  },
  {
    'Nan Goldin': `The Ballad of Sexual Dependency (Баллада о сексуальной зависимости) (1986), which documents New York's gay subculture, is perhaps the best-known work of which American photographer?	`,
  },
  {
    'Christa Luding-Rothenburger (Криста Лудинг-Ротенбургер)': `The first female to win a medal in both the Summer and Winter Games, and the first athlete of either sex to win Winter and Summer Olympic medals in the same year, which German won gold and silver medals in speed skating at the 1988 Winter Olympics and a silver medal in track cycling at that year's Summer Olympics?	`,
  },
  {
    'Лердальский тоннель (Тоннель стал самым длинным автомобильным тоннелем в мире, превзойдя Готардский автомобильный тоннель на 8 километров.)': `At an astonishing 15 miles (24.5 km) long, this Norwegian Tunnel is the world’s longest road tunnel. Costing 1 billion Norwegian kroner to build (that's about USD $110 million) the tunnel connects its namesake community and Aurland. What is the name of this tunnel?`,
  },
  {
    'Zora Neale Hurston': `This woman was a novelist and folklorist who was part of the Harlem Renaissance. In addition to her influential novel Their Eyes Were Watching God (Их глаза видели Бога), she was an early filmmaker, taking ethnographic footage of black people's lives in the 1920s South. Who was this woman, whose book Mules and Men is thought to be the first collection of African-American folk tales by an African-American?`,
  },
  {
    'Magnavox Odyssey': `This was the first commercial home video game console. The hardware was designed by a small team led by Ralph H. Baer at Sanders Associates, while its namesake completed development and released it in the United States in September 1972 and overseas the following year. What was the name of this home video game console?`,
  },
  {
    'Laguna del Carbon': `Argentina is a land of extremes, as it boasts the highest literacy rate in South America and the highest point in the Southern Hemisphere - Mount Aconcagua (6,962 metres) which lies in Argentina’s Province of Mendoza; and the lowest point, in the Province of Santa Cruz. What is the name of this lake, that is the lowest point in South America, and sounds a lot like a chemical element?`,
  },
  {
    'Nicholas Pileggi (Умник - Славные парни, еще Казино)': `An adaptation of Wiseguy, Goodfellas chronicles the life of young Mafia mobster Henry Hill as he ruthlessly climbs his way to the top, oblivious to the effects his actions have on others and on himself. But who wrote the book Wiseguy?`,
  },
  {
    'Richard Garfield': `This is an American mathematician, inventor, and game designer, whocreated Magic: The Gathering, which is considered to be the first modern collectible card game (CCG). Who is this man, whose name is the same as that of a former American president?`,
  },
  {
    'Fernando Meirelles': `This Brazilian film director's biographical drama "The two Popes" takes viewers behind the walls of the Vatican, telling the story of how Pope Benedict and Pope Francis had to come together to create a new vision for the modern Catholic Church. Who is this film director?`,
  },
  {
    'Fabian Gottlieb von Bellingshausen': `JANUARY 28 2021: Estonians celebrated the 200th anniversary of the discovery of Alexander Island (Земля Александра I), Antarctica's largest, by this Baltic cartographer and naval officer who now gives his name to the sea where the said island lies.	`,
  },
  {
    'Speciesism (Видовая дискриминация, спешисизм)': `JANUARY 27 2021: Animal rights group PETA posted a tweet saying that "Using animals as insults perpetuates..." this, the practice of treating individuals differently based on their taxonomic rank.	`,
  },
  {
    'Собор Святого Бавона': `The Ghent Altarpiece (or The Adoration of the Mystic Lamb), completed in 1432 by Hubert and Jan van Eyck, is displayed in which cathedral that is named after a 7th century Roman Catholic and Eastern Orthodox saint?	`,
  },
  {
    NEUM: `What is the only town to be situated along Bosnia and Herzegovina's 20 km of coastline on the Adriatic? It separates the area around Dubrovnik from the rest of Croatia.	`,
  },
  {
    'Бриан Бору (Объединил ирландские королевства под своей властью. В 1014 году разбил датчан при Клонтарфе и остановил их вторжение на территорию Ирландии. В этой битве Бриан Бору погиб. После его смерти Ирландия вновь распалась.)': `Who was the High King of Ireland, killed at the Battle of Clontarf in 1014?`,
  },
  {
    'Turning Torso': `What is the two word alliterative name of a 190m tall twisted skyscraper in Malmo, Sweden designed by Santiago Calatrava?	`,
  },
  {
    'Hollinghurst, Alan': `Who won the 2004 Booker prize for his novel The Line of Beauty (Линия красоты), with its description of a post-graduate student's life amongst opulent upper class friends as HIV strikes at the heart of the 1980's gay community in London?`,
  },
  {
    'Delibes (Leo)': `Which French composer and church organist is best known for his ballets Sylvia (1876) and Coppelia (1870), and for his opera Lakmé (1883)?	`,
  },
  {
    'Nacho Libre (Суперначо)': `Based on the life of a real life monk/wrestler Fray Tormenta ("Friar Storm") and directed by Jared Hess, which 2006 Sports comedy film stars Jack Black as a Mexican monk who earns money for the orphanage where he works a cook by moonlighting secretly as a luchador (wrestler)?`,
  },
  {
    Йентл: `Which 1983 musical film, with a score composed by Michael Legrand and featuring the song "Papa Can You Hear Me", stars Barbara Streisand as a Polish girl who decides to dress and live like a boy after her father dies, so that she can receive an education in Talmudic Law?	`,
  },
  {
    Ятрогения: `the causation of a disease, a harmful complication, or other ill effect by any medical activity, including diagnosis, intervention, error, or negligence. First used in this sense in 1924,[1] the term was introduced to sociology in 1976 by Ivan Illich, alleging that industrialized societies impair quality of life by overmedicalizing life. `,
  },
  {
    'Edwards (Jonathan)': `Which British athlete still holds the World Record for the Triple jump, set in Gothenburg in 1995 at the World Championships?	`,
  },
  {
    Khepri: `Which ancient Egyptian god, associated with the movement of the sun and rebirth, had the head of a scarab beetle? In China Miéville's Perdido Street Station, Lin is this type of insect-like humanoid.	`,
  },
  {
    'Fritz Haber': `For which German Nobel Prize winner in Chemistry is the industrial process of synthetic Nitrogen fixation to make ammonia named, along with his fellow Nobel Laureate Carl Bosch? He also pioneered the weaponization of Chlorine gas in the first World War, which is thought to have been a factor in his wife's suicide.`,
  },
  {
    'Juan de Fuca': `Born on the island of Cephalonia, who is best known for exploring the strait between Vancouver Island and the Olympic Peninsula while in the service of Phillip II of Spain?`,
  },
  {
    'Maurice Bishop': `Leader of the Marxist-Leninist New Jewel Movement, who led the People's Revolutionary Government of Grenada from 1979 to 1983?	`,
  },
  {
    Обрамление: `Present in works such as One Thousand and One Nights and Bocaccio's Decameron, what literary device is the use of a unifying story within which other tales are related?  `,
  },
  {
    'Heathers (Смертельное влечение)': `The script of which 1989 teen black comedy film starring Winona Ryder uses a specially constructed slang which has passed into common usage, resulting in many citations in the OED? Examples include the use of 'very' as an adjective, 'perfecto', and 'cow tipping'.	`,
  },
  {
    'Theravada (другая – Махаяна)': `Prevalent in Myanmar, Thailand, Cambodia, Laos and Sri Lanka, which school of Buddhism has a name which translates as 'way of the elders'?	`,
  },
  {
    Резолют: `Also known as the Hayes desk after its original recipient, which desk was constructed from timbers of a British Arctic exploration ship and currently sits in the Oval Office?	`,
  },
  {
    'Francis Galton': `Which English polymath coined the phrase "nature versus nurture"? Called "the father of eugenics", University College London dropped his name from a building named after him in 2020.	`,
  },
  {
    'Steve Kerr': `Which current basketball coach (born 1965 in Beirut, Lebanon) has won 8 NBA championships in total? He won 5 as a player (3 with Chicago Bulls, 2 with San Antonio Spurs) between 1996 and 2003 and has won 4 since 2015 as the head coach of Golden State Warriors.	`,
  },
  {
    'Gianni Schicchi': `“O Mio Babbino Caro” is a popular aria from which Puccini opera? It is sung by Lauretta, daughter of the title character (a historical figure who appears in Dante’s “Inferno”). This aria was a signature piece of Maria Callas and has been performed by numerous opera and classical crossover singers.`,
  },
  {
    'Безэховая камера': `What term describes a room that has been designed to absorb reflections of either sound or electromagnetic waves? Sound made in these rooms does not reverberate at all, giving the effect that the room is infinitely large and incredibly quiet.	 `,
  },
  {
    'Bette Davis  (Psycho-biddy - популярный жанр фильмов ужасов 1960-1970х годов, благодаря которому, у пожилых женщин были вакансии в Голливуде.)': `Finally, this actress of Dangerous and Jezebel spent a good part of her late career playing 'psycho-biddy' roles, in films like The Nanny, Dead Ringer, and the film that started the genre, What Ever Happened to Baby Jane?	`,
  },
  {
    'Patria o Muerte, Venceremos': `official national motto of Cuba, adopted in 1960.

The origin of the motto was derived from a speech by revolutionary leader Fidel Castro to commemorate the workers and soldiers who died in the La Coubre explosion on March 5, 1960 at the harbour in Havana. 
`,
  },
  {
    'Leon Battista Alberti': `Treatises on painting, sculpture, and architecture respectively, De pictura, De statua, and De re aedificatoria were works by which 15th century Italian Renaissance Man whose architectural works include the unfinished Tempio Malatestiano in Rimini and the Santa Maria Novella in Florence?`,
  },
  {
    'Matthias Sindelar': `Nicknamed "The Mozart of football", which Austrian centre-forward captained his country at the 1934 World Cup and was voted the best Austrian footballer of the 20th century in a 1999 poll by the International Federation of Football History and Statistics? He died in mysterious circumstances in 1939 after refusing to play for Germany following Austria's annexation by Nazi Germany.	`,
  },
  {
    'Birutė Galdikas': `The 'Trimates' was the collective name Louis Leakey gave to the three women he chose to study hominids in their natural environments. Jane Goodall and Dian Fossey were sent to study chimpanzees and gorillas, respectively, but which German-born Lithuanian-Canadian anthropologist, primatologist, conservationist, ethologist, and author was posted to South-East Asia to study orangutans?	`,
  },
  {
    'My Name is Red': `A dog, a tree, a gold coin, and a corpse are among the many unusual narrators in which 1998 novel by Orhan Pamuk that opens with the murder of a miniaturist in 1591?	`,
  },
  {
    Voortrekkers: `Meaning ‘pioneers’ in both Afrikaans and Dutch, what name is given to the Dutch emigrants who, during the 1830s and 1840s, left the Cape Colony to move into the interior of what is now South Africa?	`,
  },
  {
    Kismet: `Which word, derived from the Arabic for 'fate', is the title of both a musical based upon the works of Alexander Borodin and a Marvel Comics superheroine (pictured) who has alternatively been known as Paragon, Her, and Ayesha?	`,
  },
  {
    'Бюро (легенд)': `What French television series starring Mathieu Kassovitz and Sara Giraudeau is based on real accounts by former spies at France's Directorate-General for External Security?	`,
  },
  {
    'Suryavarman II': `What King of the Khmer Empire (1113-1150) built Angkor Wat as the empire's state temple?	`,
  },
  {
    'Battle of Gaugamela': `Alexander the Great completed his conquest of Darius III's Persian Empire at what decisive October 1, 331 BC battle also called the Battle of Arbela?	`,
  },
  {
    'Florence Foster Jenkins': `The French film Marguerite (2015) and the play "Colorature - Mrs x and her pianist" are inspired by the sadly comic career of probably the worst singer in the history of music. Who was this American soprano?	`,
  },
  {
    'Чинкве-Терре': `This Italian national park is often mentioned like it’s just one spot, but it’s actually a collection of five villages. What is the name of this national park in the La Spezia Province?	`,
  },
  {
    '«Чёртов остров»': `Рене Бельбёнуа украл несколько жемчужин и в 1920 году был приговорён к восьми годам лишения свободы на этом острове у берегов Гвианы. Отсидев, выпустил книгу мемуаров «Сухая гильотина».

`,
  },
  {
    Чемульпо: `Бой крейсера «Варяг» и канонерской лодки «Кореец» с японской эскадрой 27 января 1904 года состоялся близ корейского города, который ныне называется Инчхон. А как этот город назывался в 1904 году?

`,
  },
  {
    'Ангел Златые Власы': `На этой иконе новгородской школы из собрания Русского музея волосы Архангела Гавриила действительно выложены сусальным золотом.

`,
  },
  {
    Дыхтау: `Эта вторая после Эльбруса вершина Кавказа и России достигает высоты 5 204 метра.
 
`,
  },
  {
    '«Письмо с фронта» (Нифонтов был учеником А. И. Лактионова и позировал ему для фигуры солдата)': `На надгробном камне художника Владимира Нифонтова, прошедшего всю Великую Отечественную, изображена репродукция этой знаменитой картины Александра Лактионова.

`,
  },
  {
    'Португальский и испанский языки': `Людей, говорящих на портуньоле — смеси этих двух языков, — можно встретить, например, в приграничных районах Бразилии.

`,
  },
  {
    'Гоплиты (щит назывался гоплон)': `Своё название эти древнегреческие тяжеловооружённые пехотинцы получили от круглых выпуклых щитов.

`,
  },
  {
    'Император Шив Палпатин': `Этот уроженец города Тид на планете Набу создал и возглавил Галактическую империю.

`,
  },
  {
    'Правильный ответ: Оттон I Великий': `В 962 году папа римский короновал этого короля Германии как императора, что дало начало Священной Римской империи.

`,
  },
  {
    Feijoada: `The Brazilian national dish is a black bean stew with dried, salted, and smoked meat. What is the name of this dish?`,
  },
  {
    Карача́й: `This Lake in Russia is the most polluted place in the world. The lake is near the largest nuclear facility in Russia, the Mayak Production Association, which has had many nuclear meltdowns and leaks into the Techa River that flows into Lake. What is the name of this lake, that sounds a lot like a city in Pakistan?	`,
  },
  {
    Kaffa: `This was a province on the southwestern side of Ethiopia, and its capital city was Bonga. It was named after the namesake former kingdom, and the etymology of it is thought to be from the Arabic word meaning "a drink from berries", an etymology which it shares with the English word coffee. What former region is this?	`,
  },
  {
    'Battle of Ayacucho': `This painting by Daniel Hernández Morillo depicts José de Canterac signing the final capitulation of the Spanish Royalist army to the Independentist forces, led by Antonio de Sucre, following which December 1824 battle that secured the independence of Peru?	`,
  },
  {
    Пропилеи: `Now giving its name to any monumental gateway to a Classical building, which gateway serves as the entrance to the Acropolis in Athens?	`,
  },
  {
    Umbria: `Which region of Italy, with its capital at Perugia, contains Lake Trasimeno (В 217 году до нашей эры произошла битва при Тразименском озере, в которой карфагенский полководец Ганнибал разбил римские войска) and Marmore Falls, and is crossed by the River Tiber? 	`,
  },
  {
    Thoth: `With the head of the Ibis and the body of man, and said to be borne out of the forehead of Set, who accidentally swallowed the semen of Horus, which Egyptian deity, "the Reckoner of Time and Of Seasons" was the god of writing, magic and the moon? 	`,
  },
  {
    Салуин: `Situated between the Irrawaddy and Brahmaputra river systems on the west and the Mekong system on the east, and sharing a shorter boundary with the Yangtze system to the north, which river flows from the Tibetan Plateau south into the Andaman Sea, through southern China and Myanmar, forming part of the border between the latter and Thailand?	`,
  },
  {
    Демаве́нд: `спящий стратовулкан в горном хребте Эльбурс, на севере Ирана, в южной части остана Мазендеран. Достигает 5610 метров над уровнем моря и имеет диаметр в основании около 20 километров. На вершине располагается кратер диаметром 400 метров с небольшим озером. Является наивысшей точкой Ирана и всего Ближнего Востока, также является самым высоким вулканом в Азии `,
  },
  { 'Шибальба́ ': `название преисподней у майя, находящейся под землёй. ` },
  {
    'Колонна Нельсона ': `монумент, расположенный в центре Трафальгарской площади в Лондоне Англия Колонна была построена в период с 1840 по 1843 год в память об адмирале, погибшем в Трафальгарском сражении в 1805 году. `,
  },
  {
    'Мари́на  Вязо́вская ': `украинский математик.  Лауреат Филдсовской премии (2022).`,
  },
  {
    'Наполео́н О́рда ': `(11 февраля 1807, деревня Вороцевичи, Пинский уезд, Минская губерния — 26 апреля 1883, Варшава) — белорусский, литовский и польский литератор, музыкант, композитор, художник, скульптор, педагог.`,
  },
  {
    'Барри-спасатель': `(1800—1814) — собака породы, впоследствии ставшей известной как Сенбернар, которая работала в качестве собаки-спасателя в Швейцарии при монастыре Святого Бернарда. Является самым известным из описанных сенбернаров — за свою жизнь он спас как минимум сорок человек.`,
  },
  {
    'Румспри́нга ': `обряд инициации в некоторых общинах амишей (одно из направлений анабаптизма): подросток в возрасте от 14—16 лет получает выбор: принять крещение и стать членом церкви в общине амишей либо покинуть общину. Подавляющее большинство выбирает крещение и остаётся в лоне церкви. `,
  },
  {
    'Медаль Волластона ': `высшее отличие Геологического общества Лондона, которым отмечают учёных, внесших наибольший вклад в развитие геологии. Вручается с 1831 года, названа в честь английского учёного (1766—1828), изготовляется ныне из открытого им палладия`,
  },
  {
    'Капсула Боумена': `a cup-like sac at the beginning of the tubular component of a nephron in the mammalian kidney that performs the first step in the filtration of blood to form urine. `,
  },
  {
    'A Son of Sam law ': `an American English term for any law designed to keep criminals from profiting from the publicity of their crimes, for instance by selling their stories to publishers. Such laws often authorize the state to seize money earned from deals such as book/movie biographies and paid interviews and use it to compensate the criminal's victims. These laws have been criticized as violating the free-speech guarantee of the First Amendment to the United States Constitution.`,
  },
  {
    'Eliezer Ben Yehuda ': `(7 January 1858 – 16 December 1922) was a Hebrew linguist, grammarian, and journalist, renowned as the lexicographer of the first Hebrew dictionary, and the editor of HaZvi, one of the first Hebrew newspapers published in the Land of Israel. He was the main driving force behind the revival of the Hebrew language.`,
  },
  {
    'Андромаха ': `супруга Гектора, мать Астианакта. После гибели Гектора и падения Трои была взята в плен сыном Ахилла Неоптолемом, от которого имела трех сыновей, в том числе Пергама. После гибели Неоптолема она вышла замуж за Елена, брата Гектора. Когда Елен умер, она с Пергамом переселилась в Малую Азию, где ее сын основал город, названный его именем.`,
  },
  {
    'Антигона ': `дочь фиванского царя Эдипа и Иокасты, сопровождавшая своего слепого отца во время изгнания. После смерти Эдипа она вернулась в Фивы, как раз к началу осады города семью вождями. Когда ее брат Полиник, воевавший против Фив, погиб в единоборстве с Этеоклом, она нарушила запрет своего дяди царя Креонта и предала тело брата погребению. За это она была заживо замурована в пещеру, где покончила с собой.`,
  },
  {
    'Апоп ': `огромный змей, олицетворяющий мрак и зло, извечный враг бога солнца Ра. Обитает в глубине земли, где и происходит его борьба с Ра. `,
  },
  {
    МОЛДОВЯ́НУ: `гора в Южных Карпатах, в массиве Фэгэраш; высшая точка Румынии (2543 м), расположена в центральной части страны.`,
  },
  {
    'МÁТОЧКИН ШАР': `пролив между Северным и Южным островами Новой Земли, соединяющий Баренцево море с Карским. `,
  },
  {
    'Sisu ': `Finnish concept described as stoic determination, tenacity of purpose, grit, bravery, resilience, and hardiness, and is held by Finns themselves to express their national character.`,
  },
  {
    'Candace Bushnell ': `(born December 1, 1958) is an American author, journalist, and television producer. She wrote a column for The New York Observer (1994–96) that was adapted into the bestselling Sex and the City anthology.`,
  },
  {
    'Jamie Uys': `a South African film director, best known for directing the 1980 comedy film The Gods Must Be Crazy and its 1989 sequel The Gods Must Be Crazy II.`,
  },
  {
    'Glauber Rocha ': `(14 March 1939 – 22 August 1981) was a Brazilian film director, actor and screenwriter. He was one of the most influential moviemakers of Brazilian cinema and a key figure of Cinema Novo. His films Black God, White Devil (Бог и дьявол на земле солнца) and Entranced Earth (Земля в трансе) are often considered to be two of the greatest achievements in Brazilian cinematic history, being selected by Abraccine as, respectively, the second and fifth best Brazilian films of all-time.`,
  },
  {
    'Принце́сса Уко́ка (Алтайская принцесса)': `данное журналистами и жителями Республики Алтай название мумии молодой женщины возрастом примерно 28-30 лет, найденной в ходе археологических раскопок на могильнике Ак-Алаха урочища Укок в 1993 году. Причиной смерти женщины был рак молочной железы`,
  },
  {
    'lacuna ': `a gap in a manuscript, inscription, text, painting, or musical work. A manuscript, text, or section suffering from gaps is said to be "lacunose" or "lacunulose". Weathering, decay, and other damage to old manuscripts or inscriptions are often responsible for lacunae - words, sentences, or whole passages that are missing or illegible. Palimpsests are particularly vulnerable. To reconstruct the original text, the context must be considered. In papyrology and textual criticism, this may lead to competing reconstructions and interpretations.`,
  },
  {
    'Вирунга ': `национальный парк на территории Демократической Республики Конго, один из старейших в Африке. Парк расположен около границы с Угандой и имеет площадь 7 800 км². Со стороны Уганды местность, прилегающая к горам Рувензори, также охраняется, там находится национальный парк «Горы Рувензори». `,
  },
  {
    Кума́ри: `живое индуистское божество в Непале. Ею становится девочка, не достигшая половой зрелости, выбираемая из касты Шакья народа неваров. Хотя она и индуистское божество, она почитается по всей стране и индуистами, и буддистами. `,
  },
  {
    'Но́й Уэ́бстер ': `американский лексикограф, языковед, составитель «Американского словаря английского языка». Родился в 1758 году в Уэст-Хартфорде, штат Коннектикут, в семье фермера. В 1778 году он окончил Йельский университет, после чего работал школьным учителем. `,
  },
  {
    'У́тёйа ': `остров на озере Тюрифьорд в коммуне Хуле фюльке Бускеруд (Норвегия). Расположен в 35 км к северо-западу от Осло. Размеры острова около 500 × 300 метров. Ближайший берег находится на расстоянии около 600 метров. Остров принадлежит норвежской Рабочей молодёжной лиге, которая устраивает на нём летний лагерь. Остров стал печально известен после произошедшего 22 июля 2011 года нападения на молодёжный лагерь, совершённого Андерсом Брейвиком, в результате которого погибли 69 человек.`,
  },
  {
    'Вириат ': `(? — 139 год до н. э.) — предводитель племени лузитанов в Лузитанской войне против римлян.`,
  },
  {
    'Санджовезе ': `наиболее распространённый в Италии сорт чёрного винного (технического) винограда. Его название происходит от латинского «sanguis Jovis» («кровь Юпитера»). За пределами Италии известен как основной компонент знаменитых вин Брунелло и Кьянти. `,
  },
  {
    'Эле́ктрум ': `минерал, разновидность самородного золота; представляет собой сплав серебра с золотом (Ag, Au). Содержание серебра 15-50 %. `,
  },
  {
    'Энри́ко Чекке́тти ': `итальянский танцовщик-виртуоз, балетмейстер и педагог. Известен как автор методики обучения искусству танца. В 1877—82 годах выступал в России.`,
  },
  {
    'Гунгнир ': `в германо-скандинавской мифологии копьё Одина. Копьё было изготовлено двумя карликами-свартальвами, сыновьями Ивальди (в некоторых источниках упоминается гном Двалин), чтобы показать богам мастерство подземного народа.`,
  },
  {
    'Джеймс Линд ': `врач британского флота. В то время (1753 год) моряки очень часто умирали в экспедициях из-за цинги. Он доказал, что лимоны и апельсины предотвращают цингу. Благодаря открытию на его корабле никто не умер от цинги, что было большим успехом.`,
  },
  {
    'Том Ху́пер ': `(род. 1 октября 1972, Лондон) — британский кинорежиссёр, снявший фильмы «Проклятый „Юнайтед“», «Отверженные», «Король говорит!» и «Девушка из Дании». Лауреат премии «Оскар» в номинации «Лучшая режиссура» за фильм «Король говорит!». `,
  },
  {
    'Обезьянья лапка': `рассказ Уильяма Уаймарка Джекобса в жанре сверхъестественного хоррора, впервые опубликованный в Англии в 1902 году в сборнике «». В истории владельцу обезьяньей лапки даются три желания, но за их исполнение и вмешательство в судьбу приходится платить огромную цену.`,
  },
  {
    'Шха́ра ': `горная вершина в центральной части Главного Кавказского (Водораздельного) хребта, является его высочайшей точкой, также высочайшая точка Грузии. Высота главной вершины — 5193,2 м`,
  },
  {
    'Банана́л ': `речной остров, расположенный в среднем течении реки Арагуая. Площадь острова — 19 162 км², что немногим меньше площади такой страны, как Словения, и более чем в два раза превышает площадь Кипра. Остров имеет до 300 км в длину и до 160 — в ширину. Он считается крупнейшим речным островом в мире (остров Маражо формально не считается речным островом, так как омывается и Атлантическим океаном).`,
  },
  {
    'Иван Моторин ': `(1660 — 17 августа 1735) — русский литейщик, колокольных и артиллерийских дел мастер. Под его руководством был отлит знаменитый Царь-колокол.`,
  },
  {
    'Коридор Силигури': `узкая полоса индийской территории, соединяющая северо-восточные штаты Индии с остальной частью Индии. Ширина коридора составляет от 21 до 40 километра, на севере проходит граница с Непалом, на юге — с Бангладеш. `,
  },
  {
    'Битва за Санта Клару ': `серия вооруженных столкновений, приведших в конце декабря 1958 к взятию кубинского города ... революционерами под командованием Эрнесто Че Гевары. Битва стала решающей победой повстанцев, боровшихся против режима президента Фульхенсио Батисты: через 12 часов после взятия города Батиста бежал с Кубы, и войска Фиделя Кастро одержали окончательную победу.`,
  },
  {
    'Тремби́та ': `одна из разновидностей альпийского рога, род обёрнутой берестой деревянной трубы. Является народным музыкальным инструментом украинских горцев — гуцулов, которые проживают в основном на Западной Украине, а также в Восточной Польше, Словакии и северной Румынии. Представляет собой деревянную трубу длиной до четырёх метров и диаметром около 30 мм, расширяющуюся в раструбе. Не имеет вентилей и клапанов.`,
  },
  {
    'Ги Лалиберте́ ': `(род. 2 сентября 1959, город Квебек, Канада) — основатель и руководитель компании Cirque du Soleil (Цирк Солнца).`,
  },
  {
    '«Ведьмы» (Häxan) ': `немой фильм 1922 года, снятый датским режиссёром Беньямином Кристенсеном. Сочетает элементы документального и игрового кино. Фильм состоит из 7 частей. Некоторые из них являются чисто документальными, некоторые чисто игровыми, некоторые сочетают элементы обоих жанров.`,
  },
  {
    Тифарити: `город-оазис на северо-востоке Западной Сахары, центр северной части Свободной зоны, контролируемой силами ПОЛИСАРИО. Фактическая временная столица Сахарской Арабской Демократической Республики`,
  },
  {
    'Жизнь Иисуса': `книга Эрнеста Ренана, посвящённая Иисусу из Назарета. Опубликована в 1863 году. Входит в «Историю происхождения христианства» («История первых веков христианства», 1864—1907), состоящую из семи книг. `,
  },
  {
    'Ла Виоле́нсия ': `вооружённый конфликт в Колумбии, происходивший с 1948 по 1958 год, катализатором которого стало противостояние Либеральной и Консервативной партий Колумбии. Некоторые историки расходятся во мнениях относительно дат начала конфликта: некоторые из них утверждают, что война началась в 1946 году, когда консерваторы вернулись в правительство, и на региональном уровне руководство полиции и городских советов перешло в руки консерваторов, поддерживаемых крестьянами. Но традиционно большинство историков считают, что война началась со смерти Хорхе Гайтана.`,
  },
  {
    'Хайди: годы странствий и учёбы ': `повесть о событиях в жизни маленькой девочки, живущей на попечении своего деда в Швейцарских Альпах. Как указала на титульном листе в 1880 году автор, швейцарская писательница Иоханна Спири, повесть написана для детей и тех, кто любит детей.`,
  },
  {
    'Танграм ': `головоломка, состоящая из семи плоских фигур, которые складывают определённым образом для получения другой, более сложной, фигуры (изображающей человека, животное, предмет домашнего обихода, букву или цифру и т. д.). Фигура, которую необходимо получить, при этом обычно задаётся в виде силуэта или внешнего контура. При решении головоломки требуется соблюдать два условия: первое — необходимо использовать все семь фигур, и второе — фигуры не должны накладываться друг на друга.`,
  },
  {
    'Мануэ́ль Эстиа́рте ': `испанский ватерполист, олимпийский чемпион 1996 года и чемпион мира 1998 года. Считается лучшим игроком в истории водного поло, семь лет подряд избирался лучшим ватерполистом мира (1986, 1987, 1988, 1989, 1990, 1991 и 1992). `,
  },
  {
    'Анасирма ': `жест, заключающийся в подъеме юбки или килта. Он используется в религиозных ритуалах, в связи с эротизмом и непристойными шутками (см. баубо). Термин используется при описании произведений искусства. Она отличается от обнажения ягодиц в эксгибиционизме, тем, что эксгибиционист стремится получить сексуальное возбуждение, тогда как анасирма делается только для воздействия на зрителей. `,
  },
  {
    'Принцип Поллианны ': `психологический феномен, согласно которому люди склонны соглашаться в первую очередь с положительными утверждениями, которые относятся к ним же самим. Это явление имеет много общего с эффектом Барнума. Термин был заимствован от названия книги культовой американской детской писательницы Элеанор Портер `,
  },
  {
    'Adult Swim ': `блок на телеканале Cartoon Network, работающий с 20:00 до 5:00 по тихоокеанскому/восточному времени и транслирующий мультсериалы и live-action шоу для взрослых. По субботам, в рамках отдельного блока, также показываются некоторые аниме-сериалы. `,
  },
  {
    'Лобно́р ': `высохшее бессточное озеро на западе Китая, в юго-восточной части Кашгарской (Таримской) равнины, на территории Синьцзян-Уйгурского автономного района (СУАР), на высоте около 780 метров выше уровня моря. Некогда являясь крупным солёным озером, как и Аральское море, он постепенно уменьшался и засолонялся вследствие хозяйственной деятельности человека.`,
  },
  {
    'Мэ́ри ': `азиатская слониха, выступавшая в американском цирке братьев Спаркс (Sparks World Famous Shows). Получила известность после того, как была повешена за убийство человека. `,
  },
  {
    'Сэ́ндфорд Фле́минг  ': ` инженер, создавший железнодорожную сеть Канады. Благодаря ему мир стал поделён на часовые пояса`,
  },
  {
    'Кантарелла  ': `легендарный яд (смертельное отравляющее вещество, вызывающее смерть в течение суток), которым пользовались средневековые отравители. Скорее всего речь идёт о кантаридине, убивающем при соприкосновении с кожей человека веществе, выделяемом шпанской мушкой (cantharis), жуком-навозником и некоторыми другими видами насекомых. В больших дозах он вызывает летальный исход, а в умеренных издавна использовался как мужской афродизиак. В массовой культуре распространена легенда, что этот яд использовался домом Борджиа, в частности Лукрецией Борджиа. `,
  },
  {
    'Гипотеза Хокни — Фалько  ': `theory of art history, advanced by artist David Hockney and physicist Charles M. Falco. Both argued that advances in realism and accuracy in the history of Western art since the Renaissance were primarily the result of optical instruments such as the camera obscura, camera lucida, and curved mirrors, rather than solely due to the development of artistic technique and skill.  `,
  },
  {
    'The Elephant Celebes  ': `1921 painting by the German Dadaist and surrealist Max Ernst. It is among the most famous of Ernst's early surrealist works and "undoubtedly the first masterpiece of Surrealist painting in the de Chirico tradition." It combines the vivid dreamlike atmosphere of Surrealism with the collage aspects of Dada.  `,
  },
  {
    'МАКАСÁРСКИЙ ПРОЛИ́В ': `Пролив между островами Калимантан и Сулавеси, входящими в Малайский архипелаг (Индонезия). Соединяет море Сулавеси (Целебесское) на С. с Яванским морем на Ю.  `,
  },
  {
    ' PIPA': ` Which traditional Chinese musical instrument, belonging to the plucked category of instruments, reached a height of popularity during the Tang Dynasty, and was a principal musical instrument in the imperial court? `,
  },
  {
    ' LOITUMA': `Released in 1928, the popular Finnish song "Ievan polkka" became famous after a cappella performance by which Finnish quartet? It was first released on their debut album of the same name in 1995.  `,
  },
  {
    'PAGERANK ': `What is the name of the algorithm used by the Google search engine to rank web pages in search results? Its name plays on the name of the developer, as well as on the concept of hypertext documents on the World Wide Web.  `,
  },
  {
    'John Cleland  ': `(c. 1709, baptised – 23 January 1789) was an English novelist best known for his fictional Fanny Hill: or, the Memoirs of a Woman of Pleasure, whose eroticism led to his arrest. `,
  },
  {
    'John  Avildsen  ': `(December 21, 1935 – June 16, 2017) was an American film director. He is best known for directing Rocky (1976), which earned him the Academy Award for Best Director. He is also renowned for directing the first three films in The Karate Kid franchise (1984–1989). `,
  },
  {
    'Stefán  Stefánsson  ': `(10 July 1975 – 21 August 2018) was an Icelandic actor and singer. He was best known for portraying Robbie Rotten, the antagonist of the children's television series LazyTown. `,
  },
  {
    ' Omar Sy ': `(20 January 1978) is a French actor, best known in France for his sketches with Fred Testot on the Service après-vente des émissions television show on Canal+ (2005–2012). He gained wider recognition for his role in the 2011 comedy-drama film Intouchables, which earned him the César Award for Best Actor, making him the first Black recipient of the award. `,
  },
  {
    'Martin Landau  ': ` (June 20, 1928 – July 15, 2017) was an American actor. His career breakthrough came with leading roles in the television series Mission: Impossible (1966–1969) and Space: 1999 (1975–1977). Landau earned Academy Award nominations for his performances in Tucker: The Man and His Dream (1988) and Woody Allen's Crimes and Misdemeanors (1989). He won the Academy Award for Best Supporting Actor as well as the Screen Actors Guild Award and a Golden Globe Award for his portrayal of Bela Lugosi in Ed Wood (1994).`,
  },
  {
    ' Idrissa Ouédraogo ': ` (21 January 1954 – 18 February 2018) was a Burkinabé filmmaker. His work often explored the conflict between rural and city life and tradition and modernity in his native Burkina Faso and elsewhere in Africa. He is best known for his feature film Tilaï (Закон), which won the Grand Prix at the 1990 Cannes Film Festival and Samba Traoré (1993), which was nominated for the Silver Bear award at the 43rd Berlin International Film Festival.`,
  },
  {
    ' Ġgantija ': ` megalithic temple complex from the Neolithic era (c. 3600–2500 BC), on the Mediterranean island of Gozo in Malta. `,
  },
  {
    ' mastaba ': ` a type of ancient Egyptian tomb in the form of a flat-roofed, rectangular structure with inward sloping sides, constructed out of mudbricks. These edifices marked the burial sites of many eminent Egyptians during Egypt's Early Dynastic Period and Old Kingdom. In the Old Kingdom epoch, local kings began to be buried in pyramids instead of in mastabas, although`,
  },
  {
    ' Mummy brown': `rich brown bituminous pigment with good transparency, sitting between burnt umber and raw umber in tint. Suppliers ceased to offer it by the middle of the twentieth century. `,
  },
  {
    'Carmina Burana (Макаронизм, макароническая поэзия ) ': ` a manuscript of 254 poems and dramatic texts mostly from the 11th or 12th century, although some are from the 13th century. The pieces are mostly bawdy, irreverent, and satirical. They were written principally in Medieval Latin, a few in Middle High German and old Arpitan. Some are macaronic, a mixture of Latin and German or French vernacular.`,
  },
  {
    'Pasargadae  ': `the capital of the Achaemenid Empire under Cyrus the Great (559–530 BC). Today it is an archaeological site located just north of the town of Madar-e-Soleyman and about 90 km to the northeast of the modern city of Shiraz. It is one of Iran's UNESCO World Heritage Sites. It is considered to be the location of the Tomb of Cyrus. The city remained the Achaemenid capital until Darius moved it to Persepolis. `,
  },
  {
    'Солнечный крест ': ` solar symbol consisting of an equilateral cross inside a circle. The design is frequently found in the symbolism of prehistoric cultures, particularly during the Neolithic to Bronze Age periods of European prehistory. `,
  },
  {
    'Эль-Аю́н  ': `город в Марокко, является крупнейшим городом Западной Сахары, территории со спорным статусом на северо-западе Африки. Находится под контролем марокканской администрации.  `,
  },
  {
    'А́мпулы Лоренци́ни  ': ` орган чувств у нескольких отрядов рыб, отвечающий за электрорецепцию и достигающий наибольшего развития у хрящевых рыб (акул, скатов и химер). Позволяет улавливать электрические поля и замечать чрезвычайно малые изменения в их напряженности. `,
  },
  {
    'Маранелло  ': ` итальянский город с 17 693 жителями в провинции Модена в области Эмилии-Романья, расположенной к северу от столицы. С 1943 года здесь находится штаб-квартира завода Ferrari, престижного автопроизводителя, основанного Энцо Феррари из Модены.`,
  },
  {
    'Анита  Экберг  ': `(29 сентября 1931, Мальмё — 11 января 2015, Рокка-ди-Папа) — шведская актриса и фотомодель. Наиболее известна ролью Сильвии в фильме Федерико Феллини «Сладкая жизнь» 1960 года и считается одним из секс-символов итальянского кино 60-х годов.  `,
  },
  {
    'Рут Хэндлер  ': ` (4 ноября 1916, Денвер, Колорадо, США — 27 апреля 2002, Лос-Анджелес, Калифорния, США) — американский предприниматель, президент компании Mattel, создательница куклы Барби.`,
  },
  {
    ' Бир-Тави́ль ': `территория, граничащая с севера с Египтом, а с запада, юга и востока — с Суданом. Своё название получила по имени местного источника воды (ныне не существующего). Обе страны отказываются от своих претензий на него; таким образом, он является terra nullius — «ничейной территорией».  `,
  },
  {
    '«Квир-лев» («Голубой лев») ': `специальная награда Венецианского кинофестиваля, вручаемая с 2007 года лучшим фильмам, посвященным теме гомосексуальности и квир-культуры.  `,
  },
  {
    'Полуденные сети ': `американский 14-минутный экспериментальный немой фильм, снятый Майей Дерен и в 1943 году. Считается вехой в истории артхаусного кинематографа в США. Фильм был включён в Национальный реестр фильмов на второй год после создания реестра, в 1990 году. Обе роли в фильме сыграли Хаммид и Дерен, которые во время его создания состояли в браке. Следующий муж Дерен, японский композитор, в 1959 году написал музыку к фильму. Фильм построен на круговращении фабулы, состоящей в том, что, следуя за фигурой в чёрной накидке с зеркалом вместо лица героиня возвращается к себе в дом, садится в кресло, закрывает глаза и видит, как она идёт к дому за фигурой с цветком в руке, останавливает проигрыватель, садится в кресло.  `,
  },
  {
    ' Жан Юбе́р ': `швейцарский художник и силуэтист, известный серией работ, изображающих Вольтера. `,
  },
  {
    'Оксфордские калькуляторы ': ` группа английских философов XIV века, связанных с Мертон-колледжем в Оксфорде. В эту группу входили Томас Брадвардин, Уильям Хейтсбери, Ричард Суайнсхед, Джон Дамблтон. Этими мыслителями была развита особая дисциплина — «учение об интенсии и ремиссии качеств», ставшее одной из наиболее ярких страниц в средневековом учении о движении.`,
  },
  {
    'Драупнир ': `в германо-скандинавской мифологии волшебное золотое кольцо. Было подарено Одину гномами Синдри и Броком. Согласно легендам это кольцо каждую девятую ночь приносило своему владельцу ещё восемь точно таких же (видимо имелось в виду золотых, но не волшебных), опоясавшись поясом из этих колец, он становится неуязвимым.`,
  },
  {
    'Манитулин ': `остров на озере Гурон, самый большой остров мира, расположенный в пресном озере. Административно остров относится к канадской провинции Онтарио, а в рамках неё — к одноимённому себе округу. Население Манитулина составляет 12,6 тыс. жителей (2007). `,
  },
  {
    'Фирн ': `плотно слежавшийся, зернистый и частично перекристаллизованный, обычно многолетний снег, точнее — промежуточная стадия между снегом и глетчерным льдом.`,
  },
  {
    'Кладограмма ': `одно из основных понятий в современной биологической систематике — древовидный граф, отражающий отношения сестринского родства между таксонами. `,
  },
  {
    'Сандхи ': `в лингвистике — изменение звуков в зависимости от их места в отрезке текста (в слове или предложении). Термин введён древнеиндийскими грамматиками, предположительно — Панини. Примеры в русском языке — морфонологическое чередование ч/щ в суффиксе -чик/-щик`,
  },
  {
    'Папа Вемба ': `конголезский эстрадный и фолк-певец, композитор, один из крупнейших музыкальных деятелей Африки XX века и популяризаторов африканской музыки, имевший прозвище «короля румбы» `,
  },

  {
    'Библия Тиндейла ': `перевод Библии на английский язык. Считается первым английским переводом еврейских и греческих текстов. `,
  },
  {
    'Ваянг ': `различные виды традиционного народного театра в Индонезии и Малайзии. Термин используется как для обозначения самого театра, так и для названия кукол, используемых в постановках. В Индонезии наиболее широко распространён на островах Ява и Бали. `,
  },
  {
    'Кайтэн ': `название нескольких типов торпед, управляемых пилотами-смертниками (тэйсинтай). Применялись японским Императорским флотом для поражения противника в конце Второй мировой войны. `,
  },

  {
    'Триста́нский пастушо́к ': `вид птиц семейства пастушковых, эндемик острова Инаксессибл, самая маленькая на Земле нелетающая птица. В 2004 году численность популяции составляла примерно 8 тысяч особей. `,
  },
  {
    'Weber–Fechner laws ': `two related hypotheses in the field of psychophysics, known as Weber's law and Fechner's law. Both laws relate to human perception, more specifically the relation between the actual change in a physical stimulus and the perceived change. This includes stimuli to all senses: vision, hearing, taste, touch, and smell. `,
  },
  {
    'Apophenia ': `the tendency to perceive meaningful connections between unrelated things. `,
  },

  {
    'El Greco fallacy ': `perceptive fallacy, where it is assumed that particular perceptual abnormalities will influence interactions with the world of a similar nature. It is named after an erroneous explanation for the vertically distorted painting style of ..., which held that the artist must have seen the world as distorted by a peculiar astigmatism, and thus painted this distorted world. This theoretical astigmatism cannot explain ...'s style though, as he would have seen his canvases distorted in the same way, and painting onto them would have cancelled out any distortion. `,
  },
  {
    'Tom Collins ': `cocktail made from gin, lemon juice, sugar, and carbonated water. First memorialized in writing in 1876 by Jerry Thomas, "the father of American mixology", this "gin and sparkling lemonade" drink is typically served over ice.`,
  },
  {
    "Wendy's ": `American international fast food restaurant chain founded by Dave Thomas on November 15, 1969, in Columbus, Ohio. Its headquarters moved to Dublin, Ohio, on January 29, 2006. As of December 31, 2018, it was the world's third-largest hamburger fast-food chain with 6,711 locations, following Burger King and McDonald's.`,
  },

  {
    'Mortadella ': `large Italian sausage or luncheon meat (salume ) made of finely hashed or ground meat-cured pork, which incorporates at least 15% small cubes of pork fat (principally the hard fat from the neck of the pig). `,
  },
  {
    Пулькоги: `Korean-style grilled or roasted dish) made of thin, marinated slices of meat, most commonly beef, grilled on a barbecue or on a stove-top griddle. It is also often stir-fried in a pan in home cooking. Sirloin, rib eye or brisket are frequently used cuts of beef for the dish.`,
  },
  {
    'Teppanyaki ': `post-World War II style of Japanese cuisine that uses an iron griddle to cook food. `,
  },

  {
    Посоле: `traditional soup or stew from Mexican cuisine. It is made from hominy with meat (typically chicken or pork), and can be seasoned and garnished with shredded lettuce or cabbage, chilli peppers, onion, garlic, radishes, avocado, salsa or limes. Known in Mesoamerica since the pre-Columbian era, today the stew is common across Mexico and neighboring countries, and is served both as a day-to-day meal and as a festive dish.`,
  },
  {
    'pimento ': `variety of large, red, heart-shaped chili pepper (Capsicum annuum) that measures 3 to 4 in (7 to 10 cm) long and 2 to 3 in (5 to 7 cm) wide (medium, elongate). `,
  },
  {
    'Ray Kroc ': `(October 5, 1902 – January 14, 1984) was an American businessman. He purchased the fast food company McDonald's in 1961 from the McDonald brothers and was its CEO from 1967 to 1973. He is credited with the global expansion of McDonald's, turning it into the most successful fast food corporation in the world by revenue`,
  },

  {
    'jalapeño ': `Spanish for "from Xalapa", the capital city of Veracruz, Mexico, where the pepper was traditionally cultivated.`,
  },
  {
    'Mondelez International ': `manufactures chocolate, cookies, biscuits, gum, confectionery, and powdered beverages. Belvita, Oreo,  Milka, Côte d'Or, Toblerone, Cadbury, and Alpen Gold;`,
  },
  {
    "Dunkin' Donuts ": `American multinational coffee and doughnut company, as well as a quick service restaurant. `,
  },
  {
    Капоколло: `essentially the pork counterpart of the air-dried, cured beef bresaola.`,
  },
  {
    'Gumbo ': `hearty stew popular in the U.S. state of Louisiana, and is the official state cuisine. It consists primarily of a strongly flavored stock, meat or shellfish (or sometimes both), a thickener, and the Creole "holy trinity" ― celery, bell peppers, and onions.`,
  },
  {
    'Furikake ': `dry Japanese condiment sprinkled on top of cooked rice, vegetables, and fish, or used as an ingredient in. It typically consists of a mixture of dried fish, sesame seeds, chopped seaweed, sugar, salt, and monosodium glutamate. Other ingredients in such as (sometimes indicated on the package as bonito), or (bonito flakes moistened with soy sauce and dried again), freeze-dried salmon particles,, egg, powdered miso and vegetables are often added to the mix.`,
  },
  {
    'Diageo ': `British multinational alcoholic beverage company, with its headquarters in London, England. Distilleries owned by Diageo, produce 40% of all Scotch whisky with over 24 brands, such as Johnnie Walker, J&B and Vat 69. Its leading brands include Johnnie Walker, Guinness, Smirnoff, Baileys liqueur, Captain Morgan rum and Tanqueray and Gordon's gin.`,
  },
  {
    'Soju ': `clear and colorless distilled alcoholic beverage popular in the Korean Peninsula. It is usually consumed neat. Its alcohol content varies from about 12.9% to 53% alcohol by volume (ABV)`,
  },
  {
    'Lidl ': `German international discount retailer chain that operates over 12,000 stores across Europe and the United States. It is the chief competitor of the similar German discount chain Aldi in several markets. `,
  },
  {
    'bottle episode ': `Episode produced cheaply and restricted in scope to use as few regular cast members, effects and sets as possible. `,
  },
  {
    'Throwback Thursday ': `internet trend used among social media platforms such as Instagram, Twitter and Facebook. On a Thursday, users will post nostalgia-inducing pictures – from a different era of their life`,
  },
  {
    'Flying while Muslim ': `sardonic description of problems that Muslim passengers have faced on airplanes, during stopovers, or at airports in the aftermath of the September 11 attacks. It is a snowclone inspired by "driving while black", which similarly satirizes racial profiling of African Americans by police and other law enforcement. `,
  },
  {
    'Chimerica ': `neologism and portmanteau coined by Niall Ferguson and Moritz Schularick describing the symbiotic relationship between China and the United States, with incidental reference to the legendary chimera. Though the term is largely in reference to economics, there is also a political element. `,
  },
  {
    'Cool Britannia ': `name for the period of increased pride in the culture of the United Kingdom throughout the mid and second half of the 1990s, inspired by Swinging London from 1960s pop culture. This loosely coincided with John Major's conservative government and the 1997 United Kingdom general election where Tony Blair's New Labour government won in a landslide. The success of Britpop and musical acts such as the Spice Girls, Blur, and Oasis led to a renewed feeling of optimism in the United Kingdom following the tumultuous years of the 1970s and 1980s. The name is a pun on the title of the British patriotic song "Rule, Britannia!"`,
  },
  {
    womances: `Films like In Her Shoes (2005), Baby Mama (2008), The Women (2008), Bride Wars (2009), The Sisterhood of the Travelling Pants (2005)`,
  },
  {
    'ghost skin ': `white supremacist who refrains from openly displaying their racist beliefs for the purpose of blending into wider society and surreptitiously furthering their agenda. The term has been used in particular to refer to the entryism of racist activists in law enforcement.`,
  },
  {
    'Mx ': `English-language neologistic honorific that does not indicate gender. Developed as an alternative to gendered honorifics (such as Mr. and Ms.) in the late 1970s, it is the most common gender-neutral title among non-binary people and people who do not wish to imply a gender in their titles.`,
  },
  {
    'Взгляд на две тысячи ярдов': `несфокусированный взгляд, часто наблюдаемый у солдат, перенёсших боевую психическую травму. `,
  },
  {
    'Ниста́гм ': `непроизвольные колебательные движения глаз высокой частоты (до нескольких сотен в минуту). `,
  },
  {
    'Эротомания Клерамбо ': `разновидность эротомании, при которой больной убеждён, что он любим человеком с более высоким социальным положением, чем его собственное. Подобный вид бреда часто возникает при психозах, особенно при шизофрении и маниакальной фазе биполярного расстройства. Больной верит, что объект эротомании проявляет своё отношение к нему посредством особых знаков, тайных сигналов, телепатически, либо зашифрованными сообщениями в СМИ. Как правило, он отвечает на эти «сообщения» ответным выражением привязанности посредством писем, телефонных звонков, подарков и личных визитов. Когда объект иллюзорной любви отрицает её существование, пациент интерпретирует это как часть тайной стратегии, скрывающей их секретные отношения от внешнего мира.`,
  },
  {
    'Симпто́м Фре́голи ': `бредовая убеждённость в том, что мнимый преследователь постоянно меняет свою внешность до неузнаваемости, предстаёт в самых разных обликах: мужчины, женщины, старика, ребёнка, животного и даже неодушевлённого объекта для того, чтобы остаться неузнанным. Данный феномен встречается у лиц, страдающих бредом преследования. Он считается разновидностью симптома ложного узнавания (входит в синдром Капгра, наряду с бредом положительного двойника, бредом отрицательного двойника и бредом интерметаморфозы). Название  происходит от имени итальянского актёра, славившегося своим умением менять внешность по ходу действия.`,
  },
  {
    'Маска Гиппократа': `признак тяжелых заболеваний органов брюшной полости (перитонита, перфорации язвы желудка и двенадцатиперстной кишки и т. д.), а также истощения, хронической бессонницы — или же, то есть при отсутствии подобных симптомов, признак предстоящей смерти (в этом случае обычно сопутствуется агонией): запавшие глаза, впавшие щёки, заострившийся нос, синевато-бледная кожа, покрытая каплями холодного пота. `,
  },
  {
    "Caran d'Ache ": `pseudonym of the 19th century French satirist and political cartoonist Emmanuel Poiré (6 November 1858 – 25 February 1909). While his first work glorified the Napoleonic era, he went on to create "stories without words" and as a contributor to newspapers such as the Le Figaro, he is sometimes hailed as one of the precursors of comic strips.`,
  },
  {
    'Paul-Émile Lecoq de Boisbaudran': `French chemist known for his discoveries of the chemical elements gallium, samarium and dysprosium. `,
  },
  {
    'Zeeman effect ': `effect of splitting of a spectral line into several components in the presence of a static magnetic field. It is analogous to the Stark effect, the splitting of a spectral line into several components in the presence of an electric field`,
  },
  {
    'Bass Strait ': `strait separating the island state of Tasmania from the Australian mainland (more specifically the coast of Victoria, with the exception of the land border across Boundary Islet). `,
  },
  {
    'Batesian mimicry ': `form of mimicry where a harmless species has evolved to imitate the warning signals of a harmful species directed at a predator of them both. `,
  },
  {
    'Koch (Marita)': `Which German former track and field athlete's World record of 47.60 in the Women's 400 metres was set on 6 October 1985 and still stands?	`,
  },
  {
    'Pietro Torrigiano': `This terracotta bust of Henry VII was made by which Italian sculptor, famous for having assaulted Michelangelo and breaking his nose?`,
  },
  {
    'Флейта из Дивье Бабе': `Considered to the oldest known musical instrument in the world, this artefact, discovered in 1995, is estimated to be more than 40,000 years old and made from the thigh bone of a cave bear. Part of the National Museum of Slovenia, by what three word term is it known?`,
  },
  {
    'Wounded Knee': `On December 29, 1890, the US 7th Cavalry Regiment massacred hundreds of Native American Sioux people near which location in South Dakota? The location is mentioned in the title of Dee Brown's 1970 book with the subtitle "An Indian History of the American West."`,
  },
  {
    'David Lagercrantz': `Which Swedish author was commissioned by the publisher to continue Stieg Larsson's Millennium trilogy? This author has since written The Girl in the Spider's Web, The Girl Who Takes an Eye for an Eye and The Girl Who Lived Twice.`,
  },
  {
    Zohar: `With a name meaning "splendor" in Hebrew, what "Z" work is the chief text of Kabbalah? It's largest section presents mystical interpretations of the books of the Torah, Book of Ruth, Song of Solomon, and others.`,
  },
  {
    'Alp Arslan': `Born Muhammad bin Dawud Chaghri, this 11th century sultan of the Seljuk Empire is better-known by a name translating into English as ‘heroic lion’. Who is this celebrated leader who led his empire to victory over the Byzantine Empire at the Battle of Manzikert in 1071?`,
  },
  {
    'Tatjana Patitz': `This famous photograph by Peter Lindbergh depicts the ‘Big Five’ supermodels of the day. Who is the tall blonde supermodel at the centre of the picture, flanked by (from left to right) Naomi Campbell, Linda Evangelista, Christy Turlington, and Cindy Crawford?`,
  },
  {
    'SOFONISBA / SOPHONISBA (Anguissola)': `What was the given name of this Italian painter born in Cremona who, alongside Artemisia Gentileschi, is among the best known female painters of the Renaissance? A 3rd century BC Carthaginian woman of the same name was herself the subject of paintings, being usually depicted poisoning herself rather than being humiliated in a Roman triumph.`,
  },
  {
    BASF: `Which German multinational company is the largest chemical producer in the world and is headquarterd at Ludwigshafen? It was founded by Friedrich Engelhorn on 6 April 1865 in Mannheim, when the tar produced as a by-product of a gasworks was used to manufacture aniline dyes`,
  },
  {
    Vico: `The Latin phrase 'Verum esse ipsum factum' [What is true is that which is made] is an early example of constructivist epistemology coined by which Italian philosopher and rhetorician during the Age of Enlightenment? Edward Said acknowledged his scholar's debt to this person, whose 1725 work 'Scienza Nuova' is considered his magnum opus.`,
  },
  {
    'Daily planet (of Superman fame)': `The staff of this fictional newspaper include Jimmy Olsen, Perry white (Editor-in-chief), Lana Lang, Cat Grant, Ron Troupe, Steve Lombard and two more famous individuals. Identify the name of the tabloid`,
  },
  {
    'LEEEEEEROYYYYYY JENKINS!!!!': `Finish this piece of dialogue: “What do you think Abdul, can you give us a number crunch real quick?” “Uhh yeah, give me a sec. I’m coming up with 32.33 uh repeating of course, percentage of survival” “Hmm that’s a lot better than we usually do...” “Alright chums up let’s do this....”`,
  },
  {
    'Дело «Ира́н-ко́нтрас» (Ирангейт)': `крупный политический скандал в США во второй половине 1980-х годов. Разгорелся в конце 1986 года, когда стало известно о том, что отдельные члены администрации США организовали тайные поставки вооружения в Иран, нарушая тем самым оружейное эмбарго против этой страны. Дальнейшее расследование показало, что деньги, полученные от продажи оружия, шли на финансирование никарагуанских повстанцев-контрас в обход запрета конгресса на их финансирование.`,
  },
  {
    'Скандал с «Типот Доум» ': `скандал со взяточничеством, связанный с администрацией 29-го Президента США Уоррена Гардинга с 1921 по 1923 год. Министр внутренних дел США Элберт Фолл передал в аренду частным нефтяным компаниям запасы нефти Военно-морского флота США в месторождении ..., а также два объекта в Калифорнии по низким ценам без проведения конкурентных торгов[1]. `,
  },
  {
    Songkran: `also commonly known as the “Water Festival,” is a traditional New Year’s celebration in Thailand.`,
  },
  {
    'Хогманай ': `шотландский праздник последнего дня в году. Празднование включает в себя факельные шествия, различные развлечения с огнём. Длится праздник 2 дня. Одной из основных традиций является посещение друзей и соседей, с особым вниманием к первому в новом году гостю.`,
  },
  {
    'Натан Хейл ': `(6 июня 1755 — 22 сентября 1776) — солдат Континентальной армии во время американской Войны за независимость. 21 сентября он, переодетый в учителя-голландца, был захвачен англичанами в плен; за шпионаж полагалась смертная казнь. Более всего он известен благодаря своим предположительным последним словам, произнесённым перед казнью через повешение: «Я сожалею лишь о том, что у меня есть всего одна жизнь, чтобы отдать её за мою страну».`,
  },
  {
    Эйстетвод: `Let's end matters for now by coming home to the UK. In a June 1944 article about "Wales in Wartime", these girls are dressed up for what traditional festival of music and poetry? I'm sure you know what it's called - but I will only accept the correct spelling!`,
  },
  {
    'Phryne ': `Much of the March 1944 issue is devoted to Greece, including a series of illustrations of stories from ancient Greece. One of these depicts the sculptor Praxiteles of Athens creating the Aphrodite of Knidos. It was allegedly modelled on which courtesan, later successfully defended in a trial for impiety by the orator Hypereides?`,
  },
  {
    'Реакция Майяра': `What is the name of the CHEMICAL REACTION between amino acids and sugars that gives browned food its distinctive flavour? Examples include seared steak, baked biscuits and, rather fittingly, grilled duck.`,
  },
  {
    'Albert Uderzo': `For this question we're looking for French comic book artist who is best known as the co-creator and illustrater of the Asterix series together with René Goscinny. Who is this man that died in March 2020?`,
  },
  {
    'Pina (Пина Бауш)': `Filming for which 2011 Wim Wenders documentary film about the titular German contemporary dance choreographer was cancelled for a time in 2009 when its subject died unexpectedly? Her colleagues eventually convinced Wenders to complete the project.`,
  },
  {
    'Felix Gonzalez-Torres, Robert Smithson': `Two artists have been selected as the United States's main representative for the Venice Biennale posthumously. NAME EITHER. One was a Cuban-born artist known for his "candy spill" works symbolizing the wasting resulting from AIDS; the other was a pioneering land artist best known for Spiral Jetty, who died in a plane crash.`,
  },
  {
    'C+C Music Factory': `Gonna Make You Sweat (Everybody Dance Now) and 'Things that make you go Hmmm' were both early 1990 top 5 hits for Whom?`,
  },
  {
    Denpassar: `Located just 13 kilometers from the island's primary airport, Ngurah Rai International, is what largest and capital city of Bali?`,
  },
  {
    Чокекирао: `What is the name of the Incan archaeological site located in South Peru,
  often considered the 'sister city' of Machu Picchu?
  `,
  },
  {
    'Bobby DRISCOLL': `Which American child actor, known for his role as the voice of Peter
  Pan in the 1953 Disney film and his performance in 'Treasure Island,'
  struggled with personal issues later in life?
  `,
  },
  {
    'Millau Viaduct': `What is the name of the tallest bridge in the world which crosses the River Tarn
  in southern France? Designed by Norman Foster, it stands almost 300 metres
  above the valley floor.
  `,
  },
  {
    'The Newbery Medal': `Named after an 18th century British bookseller, which annual award is given to
  the most distinguished contribution to American literature for children? `,
  },
  { Гиберния: `What was the Roman name for Ireland?` },
  {
    'Бардо́ Тхёдо́л': `What text of Tibetan Buddhism, commonly known in the West as the "Tibetan Book of the Dead", is intended to guide one through the experiences of consciousness after death, in rebirth, and in titular interval between the two?`,
  },
  {
    'Vsevolod Pudovkin (остальные - «Мать», «Конец Санкт-Петербурга»)': `Storm Over Asia (Потомок Чингисхана), about a descendant of Genghis Khan who joins the Russian Civil War, is the final film of the "Revolutionary Trilogy" by what Soviet director (1893-1953)?`,
  },
  {
    Tachism: `Considered a European equivalent to Abstract Expressionism was what 1940's and 1950's style of painting led by Jean Dubuffet, Sergei Poliakoff, and Antoni Tapies? The name of this movement is from French for "a stain".`,
  },
  {
    Lamington: `What Australian-origin sponge cake, seen here, is first coated in a layer of chocolate sauce and then rolled in dried coconut? `,
  },
  {
    Эвдемония: `Aristotle used what 10-letter "e" word as a term for the highest human good?  This term derived from Greek words for "good" and "spirit" is commonly translated as "happiness" or "welfare". `,
  },
  {
    'KARIBA (крупнейшее в мире водохранилище)': `Which lake and reservoir along the border between Zambia and Zimbabwe was filled following the construction of a dam with the same name on the Zambesi River in 1959?`,
  },
  {
    'MARIE BYRD LAND': `Which territory of Antarctica, named after the wife of an American naval officer and explorer, has never been claimed by any sovereign state?`,
  },
  {
    'José Benito de Churriguera (Чурригереско)': `Which late-Baroque Spanish architect gives his name to the style of elaborate sculptural architectural ornament which emerged as a manner of stucco decoration in Spain and Mexico in the late 17th century, marked by extreme, expressive, and florid decorative detailing?`,
  },
  {
    Superflat: `Which postmodern art movement, influenced by manga and anime, and reflecting the aesthetic characteristics of the Japanese artistic tradition and the nature of postwar Japanese culture and society, was founded in 2000 by the contemporary artist Takashi Murakami?`,
  },
  {
    'Иоганн Тецель': `It is thought that Martin Luther was inspired, in part, to write his 95 theses by the actions of which German Dominican preacher - the Grand Commissioner for indulgences in Germany - who was trying to raise money for the ongoing construction of St. Peter's Basilica by selling indulgences?`,
  },
  {
    Фалуньгун: `Which spiritual practice, with over 70 million followers, was founded in China by Li Hongzhi in 1992 and was banned in that country in 1999 after more than 10,000 practitioners gathered at the Communist Party headquarters in Zhongnanhai in protest at the government’s refusal to officially recognize the practice?`,
  },
  {
    Bodrum: `The harbour of which Turkish city - known in ancient times as Halicarnassus - is dominated by the Petronium, also known as the Castle of St Peter, that was built by the Knights Hospitaller of St John of Jerusalem in 1402?`,
  },
  {
    'Тетское наступление': `Named after the Vietnamese New Year celebration, which surprise attack against US and South Vietnamese forces was launched by the Viet Cong in January 1968?`,
  },
  {
    'Erewhon (Едгин)': `Which 1872 work of utopian satire by the painter, author and erstwhile New Zealand sheep farmer, Samuel Butler (1835-1902) is an account of a young traveller seeking his fortune in a beautiful, remote country populated by incredibly handsome people? The moral code of this country is such that illness is a sin, and machines are destroyed to prevent their evolution to replace humans. Thinking will get you nowhere.`,
  },
  {
    'Hoffs (Susanna)': `Which co-founder of The Bangles released a solo single, My Side of the Bed, the lead single of her 1991 album When You're A Boy?`,
  },
  {
    'Goryeo (Корё)': `Which unifying Korean dynasty was founded in 918 CE by Taejo Wang Geon during a period of division later known as the Three Kingdoms period, due to its feuding constituent Hubaekje, Taebong and Unified Silla territories? It was succeeded by the Joseon Dynasty in 1392.`,
  },
  {
    Enthalpy: `In a thermodynamic system, what property, H, is defined as the sum of the system's internal energy + the product of its pressure and volume, i.e. H=U+PV?	`,
  },
  {
    'Пробуждение (Де Ниро дебила играет)': `Which 1990 drama film is based on a 1973 memoir by the Neurologist Oliver Sacks and stars Robin Williams as Malcolm Sayer, a doctor who treats patients with encephalitis lethargica using L-dopa?`,
  },
  {
    Феспис: `Which Greek Playwright and performer became the first actor around 535BC, by stepping out of the Chorus to recite portions of text alone? His name might remind you of a descriptive term for actors`,
  },
  {
    'Kip Thorne': `Which American theoretical physicist won the Nobel prize in Physics in 2017 with Rainer Weiss and Barry Barish "for decisive contributions to the LIGO detector and the observation of gravitational waves"? He was a scientific adviser to Christopher Nolan for the film Interstellar (2014). `,
  },
  {
    Espadrille: `With its name derived from a type of grass which is used to make the rope that forms the soles, what name is given to a casual, usually flat Spanish shoe with a cotton or canvas upper? Although traditionally worn by peasants, they became fashionable through their associations with Salvador Dali, Pablo Picasso and Yves St Laurent.`,
  },
  {
    Stratocaster: ` Designed by Leo Fender, Freddy Tavares, Bill Carson and George Fullerton between 1952-1954, which classic double-cutaway electric guitar with an extended top "horn" shape for balance, was used by many musicians, including George Harrison, Eric Clapton, David Gilmour and Jimi Hendrix, who burned one on stage at the Finsbury Astoria in 1967?`,
  },
  {
    Rendang: `Most popularly made with beef, which slow-cooked dry curry, made from coconut milk, sugar and spices,  originates from the Minangkabau region of Indonesia and has spread into the cuisines of other Southeast Asian Countries?`,
  },
  {
    'Lovecraft Country': `Based on a 2016 novel by Matt Ruff, which US TV series follows Tic Freeman, Leti Lewis and Uncle George as they embark on a road trip across America. encountering the horrors of racism and monsters from the works of a famous American horror writer (1890-1937) mentioned in the title of the series?`,
  },
  {
    Odoacer: `Which soldier and statesman (431-493 CE) deposed the child emperor Romulus Augustus in 476 CE  to become King of Italy, marking the end of the Western Roman Empire?  He was assassinated by Theodoric after being invited to his banquet of reconciliation.  Some dinner party that must have been!`,
  },
  {
    'Clemenceau (Georges)': `Which Prime Minister of France from 1906 to 1909 and again from 1917 until 1920, nicknamed Le Tigre (The Tiger), was the target of an attempted assassination in 1919 by anarchist Émile Cottin? The bullet narrowly missed his vital organs and was not removed.`,
  },
  {
    Courland: `Named after the ancient Baltic tribe that once lived there, which historical region makes up the westernmost part of Latvia? Together with Semigallia it was part of a 16th-18th century Duchy, considered the second smallest state to colonise the Americas (after the Knights of Malta).`,
  },
  {
    Sifakas: `Their name being an onomatopoeia of their characteristic alarm call, what species of arboreal lemur - seen in the image - doesn't run on all four legs because their legs are much longer than their arms? Instead, they bounce along the forest floor using a two-legged sideways hop while holding their arms up in the air.`,
  },
  {
    Husqvarna: `Safety first! In 1973, which Swedish multinational launched the world's first chainsaw featuring an automatic chain brake? In 1995 the company launched the world's first solar powered robotic lawn mower.`,
  },
  {
    'Buddenbrooks (by Thomas Mann)': `Writers Heinrich, Erika, Klaus, Golo, Monika and Elisabeth were all relatives of a man noted for writing which 1901 novel, that led to a Nobel Prize in Literature in 1929? Looking for the novel, not the writer.`,
  },
  {
    Keirin: `This sport had its Olympic debut in the city that hosted the 2000 Olympics. Roughly 8.000 km north (and just a tad to the west, you nitpicker) of this city lies a country in which the name of the sport means something like "racing wheels". What is the name of this sport, which remained Olympic and has a women's event since 2012 as well?`,
  },
  {
    'Western Sahara': `Founded in the early 1970s, the Polisario Front is a military and political organisation that aims to end Moroccan control of which (former Spanish) territory, among the most arid and inhospitable on the planet?`,
  },
  {
    'Blanquism ': `conception of revolution that holds that socialist revolution should be carried out by a relatively small group of highly organised and secretive conspirators. Having seized power, the revolutionaries would then use the power of the state to introduce socialism. It is considered a particular sort of "putschism"—that is, the view that political revolution should take the form of a putsch or coup d'état.`,
  },
  {
    'Bambi effect': `an objection against the killing of animals that are perceived as "cute" or "adorable", such as deer, while there may be little or no objection to the suffering of animals that are perceived as somehow repulsive or less than desirable, such as pigs or other woodland creatures.`,
  },
  {
    'Полоса Александра ': `optical phenomenon associated with rainbows which was named after Alexander of Aphrodisias. The dark band occurs due to the deviation angles of the primary and secondary rainbows.`,
  },
  {
    'Kevin Mitnick ': `(born August 6, 1963) is an American computer security consultant, author, and convicted hacker. He is best known for his high-profile 1995 arrest and five years in prison for various computer and communications-related crimes.`,
  },
  {
    affogato: `Italian coffee-based dessert. It usually takes the form of a scoop of plain milk-flavored (fior di latte) or vanilla gelato or ice cream topped or "drowned" with a shot of hot espresso. Some variations also include a shot of amaretto, Bicerin, Kahlua, or other liqueur. `,
  },
  {
    'Nusret Gökçe ': `(born 1983), nicknamed Salt Bae, is a Turkish butcher, chef, food entertainer and restaurateur, whose technique for preparing and seasoning meat became an internet meme in January 2017.`,
  },
  {
    'Aperol ': `Italian bitter apéritif made of gentian, rhubarb and cinchona, among other ingredients. It has a vibrant red hue. It was originally created in 1919 by Luigi and Silvio Barbieri after seven years of experimentation. It did not become widely popular until after World War II. It was first produced by the Barbieri company, based in Padua, but is now produced by the Campari Group. `,
  },
  {
    'spritz ': `Italian wine-based cocktail, commonly served as an aperitif in Northeast Italy. It consists of prosecco, digestive bitters and soda water. `,
  },
  {
    'Чамой ': `variety of savory sauces and condiments in Mexican cuisine made from pickled fruit. It may range from a liquid to a paste consistency, and typically its flavor is salty, sweet, sour, and spiced with chilis. It is prepared by first packing the fruit in a brine solution. Occasionally, this brine is acidulated with vinegar. `,
  },
  { 'Бок-чой ': `a type of Chinese cabbage, used as food` },
  {
    'pupusa ': `thick griddle cake or flatbread from El Salvador and Honduras, made with cornmeal or rice flour, similar to the Colombian and Venezuelan arepa. In El Salvador, it has been declared the national dish and has a specific day to celebrate it. It is usually stuffed with one or more ingredients, which may include cheese (such as quesillo or cheese with loroco buds), chicharrón, squash, or refried beans.`,
  },
  {
    Пибимпап: `Korean rice dish. It is served as a bowl of warm white rice topped with namul (sautéed or blanched seasoned vegetables) and gochujang (chili pepper paste). Egg and sliced meat (usually beef) are common additions, stirred together thoroughly just before eating.`,
  },
  {
    Дзадзики: `class of dip, soup, or sauce found in the cuisines of Southeastern Europe and the Middle East. It is made of salted strained yogurt or diluted yogurt mixed with cucumbers, garlic, salt, olive oil, sometimes with vinegar or lemon juice, and herbs such as dill, mint, parsley and thyme. It is served as a cold appetizer (mezze), a side dish, and as a sauce for souvlaki and gyros sandwiches and other foods. Tarator was the name of a dish made of ground walnuts and vinegar in the Ottoman Empire.`,
  },
  {
    'Takoyaki ': `ball-shaped Japanese snack made of a wheat flour-based batter and cooked in a special molded pan. It is typically filled with minced or diced octopus (tako), tempura scraps (tenkasu), pickled ginger (beni shoga), and green onion (negi). `,
  },
  {
    'Трес лечес ': `sponge cake—soaked in three kinds of milk: evaporated milk, condensed milk, and whole milk. `,
  },
  {
    'Baba ghanoush ': `Levantine appetizer consisting of finely chopped roasted eggplant, olive oil, lemon juice, various seasonings, and tahini. The eggplant is traditionally baked or broiled over an open flame before peeling, so that the pulp is soft and has a smoky taste. It is a typical meze ('starter') of the regional cuisine, often served as a side to a main meal and as a dip for pita bread. `,
  },
  {
    'Tabbouleh ': `Levantine salad made mostly of finely chopped parsley, with tomatoes, mint, onion, soaked uncooked bulgur, and seasoned with olive oil, lemon juice, salt and sweet pepper. Some variations add lettuce, or use semolina instead of bulgur.`,
  },
  {
    'Shirley Temple ': `non-alcoholic mixed drink traditionally made with ginger ale and a splash of grenadine, and garnished with a maraschino cherry. `,
  },
  {
    'flat white ': `coffee drink consisting of espresso with microfoam (steamed milk with small, fine bubbles and a glossy or velvety consistency). It is comparable to a latte, but smaller in volume and with less microfoam, therefore having a higher proportion of coffee to milk, and milk that is more velvety in consistency – allowing the espresso to dominate the flavour, while being supported by the milk.`,
  },
  { 'Кьят ': `currency of Myanmar (Burma). ` },
  {
    'lempira ': `currency of Honduras. It was named after the 16th-century ruler of the indigenous Lenca people, who is renowned in Honduran folklore for leading the local native resistance against the Spanish conquistador forces. `,
  },
  { 'guaraní ': `national currency unit of Paraguay` },
  {
    'Kina ': `currency of Papua New Guinea. It is divided into 100 toea. It was introduced on 19 April 1975 and circulated along with the Australian dollar until 31 December 1975.`,
  },
  { 'dobra ': `currency of São Tomé and Príncipe. ` },
  {
    'bolívar ': `official currency of Venezuela. Due to its decades-long reliance on silver and gold standards, and then on a peg to the United States dollar, it was considered among the most stable currencies and was internationally accepted until 1964, when the government decided to adopt a floating exchange rate instead.`,
  },
  {
    'ringgit ': `the currency of Malaysia. The word was originally used to refer to the serrated edges.`,
  },
  { 'leone ': `currency of Sierra Leone` },
  { 'Macanese pataca ': `currency of the Macau` },
  { 'naira ': `currency of Nigeria` },
  { 'cedi ': `unit of currency of Ghana` },
  {
    'sol ': `currency of Peru. It replaced the Peruvian inti in 1991 and the name is a return to that of Peru's historic currency`,
  },
  { 'boliviano ': `currency of Bolivia` },
  { 'córdoba ': `currency of Nicaragua. It was named after a conquistador ` },
  { 'Maldivian rufiyaa ': `currency of the Maldives` },
  {
    'balboa ': `along with the United States dollar, one of the official currencies of Panama. It is named in honor of the Spanish explorer/conquistador `,
  },
  { 'Loti ': `currency of the Kingdom of Lesotho. ` },
  { 'dalasi ': `currency of the Gambia that was adopted in 1971. ` },
  {
    'Galba ': `(24 December 3 BC – 15 January AD 69) was the sixth Roman emperor, ruling from AD 68 to 69. He was the first emperor in the Year of the Four Emperors and assumed the throne following Emperor Nero's suicide.`,
  },
  {
    'Vitellius ': `(24 September 15 – 20 December 69) was Roman emperor for eight months, from 19 April to 20 December AD 69. He was proclaimed emperor following the quick succession of the previous emperors Galba and Otho, in a year of civil war known as the Year of the Four Emperors.`,
  },
  {
    'nakfa ': `currency of Eritrea and was introduced on 15 November 1998 to replace the Ethiopian birr at par. The currency takes its name from the Eritrean town of BLANK, site of the first major victory of the Eritrean War of Independence.`,
  },
  {
    'metical ': `currency of Mozambique. It is nominally divided into 100 centavos.`,
  },
  {
    'somoni ': `currency of Tajikistan. It is subdivided into 100 dirams (дирам). It was introduced on 30 October 2000, replacing the rouble`,
  },
  {
    'Kerguelen Islands ': `a group of islands in the sub-Antarctic, a large igneous province mostly submerged in the southern Indian Ocean. They are among the most isolated places on Earth, located more than 3300 km from Madagascar`,
  },
  { 'Mascarene Islands ': `` },
  {
    'Mascarene Islands ': `group of islands in the Indian Ocean east of Madagascar consisting of the islands belonging to the Republic of Mauritius as well as the French department of La Réunion. Their name derives from the Portuguese navigator Pedro BLANK, who first visited them in April 1512. `,
  },
  {
    'Stewart Island ': `New Zealand's third-largest island, located 30 km south of the South Island, across the Foveaux Strait. Flightless birds, including penguins, thrive because there are few introduced predators. Almost all the island is owned by the New Zealand government, and over 80 per cent of the island is set aside as the Rakiura National Park.`,
  },
  {
    'Lanzarote ': `Spanish island, the easternmost of the Canary Islands in the Atlantic Ocean. It is located approximately 125 km off the north coast of Africa and 1000 km from the Iberian Peninsula. Covering 845.94 km2, it is the fourth-largest of the islands in the archipelago. With 152,289 inhabitants at the start of 2019, it is the third most populous Canary Island, after Tenerife and Gran Canaria. `,
  },
  {
    'Северный Сентинел': `one of the Andaman Islands, an Indian archipelago in the Bay of Bengal. It is home to the people who have defended, often by force, their protected isolation from the outside world.`,
  },
  {
    'Santiago ': `largest island of Cape Verde, its most important agricultural centre and home to half the nation's population. It is home to the nation's capital city of Praia.`,
  },
  {
    'Эллора ': `деревня в индийском штате Махараштра, около 30 километров западнее города Аурангабад. С 1983 года система пещер и многочисленные замки причислены ЮНЕСКО к всемирному наследию`,
  },
  {
    'Трупный синод': `name commonly given to the ecclesiastical trial of Pope Formosus, who had been dead for about seven months, in the Basilica of St. John Lateran in Rome during January 897. The trial was conducted by Pope Stephen VI, the successor to Formosus' successor, Pope Boniface VI. Stephen had Formosus' corpse exhumed and brought to the papal court for judgment. He accused Formosus of perjury, of having acceded to the papacy illegally, and illegally presiding over more than one diocese at the same time.`,
  },
  {
    'Пещеры Элефанта ': `collection of cave temples predominantly dedicated to the Hindu god Shiva, which have been designated a UNESCO World Heritage Site. `,
  },
  {
    'Крест крестоносцев ': `heraldic cross and Christian cross variant consisting of a large cross potent surrounded by four smaller Greek crosses, one in each quadrant. It was used as the emblem and coat of arms of the Kingdom of Jerusalem from the 1280s.`,
  },
  {
    Горжет: `from the French meaning throat, was a band of linen wrapped around a woman's neck and head in the medieval period or the lower part of a simple chaperon hood. The term later described a steel or leather collar to protect the throat, a set of pieces of plate armour, or a single piece of plate armour hanging from the neck and covering the throat and chest.`,
  },
  {
    'Burgess ': `Which writer also composed over 250 musical works; he considered himself as much a composer as an author, although he achieved considerably more success in writing.`,
  },
  {
    'Санта-Мария-дель-Фьоре': `. It was begun in 1296 in the Gothic style to a design of Arnolfo di Cambio and was structurally completed by 1436, with the dome engineered by Filippo Brunelleschi.`,
  },
  {
    'Gutenberg Bible ': `the earliest major book printed using mass-produced movable metal type in Europe. The book is valued and revered for its high aesthetic and artistic qualities as well as its historical significance. It is an edition of the Latin Vulgate `,
  },
  {
    'Palace of Fontainebleau ': `one of the largest French royal châteaux. The medieval castle and subsequent palace served as a residence for the French monarchs from Louis VII to Napoleon III.`,
  },
  {
    'House of Oldenburg ': `German dynasty with links to Denmark since the 15th century. The current Queen of Denmark, King of Norway and King of the United Kingdom are all patrilineal descendants of the Glücksburg branch of this house.`,
  },
  {
    'Wild Hunt ': `folklore motif occurring across various northern European cultures. They typically involve a chase led by a mythological figure escorted by a ghostly or supernatural group of hunters engaged in pursuit. `,
  },
  {
    'Harald Fairhair ': `Norwegian king. According to traditions current in Norway and Iceland in the eleventh and twelfth centuries, he reigned from c. 872 to 930 and was the first King of Norway. Supposedly, two of his sons, Eric Bloodaxe and Haakon the Good, succeeded him to become kings after his death. `,
  },
  {
    'Принцы в Тауэре': `refers to the mystery of the fate of the deposed King Edward V of England and his younger brother Richard of Shrewsbury, Duke of York, heirs to the throne of King Edward IV of England. The brothers were the only sons of the king by his queen, Elizabeth Woodville, living at the time of their father's death in 1483. Aged 12 and 9 years old, respectively, they were lodged in the Tower of London by their paternal uncle and England's regent, Richard, Duke of Gloucester, supposedly in preparation for Edward V's forthcoming coronation. Before the young king could be crowned, he and his brother were declared illegitimate. Gloucester ascended the throne as Richard III. It is unclear what happened to the boys after the last recorded sighting of them in the tower. It is generally assumed that they were murdered; a common hypothesis is that the murder was commissioned by Richard III in an attempt to secure his hold on the throne.`,
  },
  {
    "L'Anse aux Meadows ": `short term settlement near the northern tip of Newfoundland. Was created during The Norse exploration of North America began in the late 10th century`,
  },
  {
    'Galata Tower ': `old Genoese tower in the Beyoğlu district of Istanbul, Turkey. The tower is now an exhibition space and museum, and a symbol of Beyoğlu and Istanbul. `,
  },
  {
    'Tezcatlipoca ': `central deity in Aztec religion. He is associated with a variety of concepts, including the night sky, hurricanes, obsidian, and conflict. He was considered one of the four sons of Ometecuhtli and Omecihuatl, the primordial dual deity. His main festival was Toxcatl, which, like most religious festivals of Aztec culture, involved human sacrifice. His nagual, his animal counterpart, was the jaguar.`,
  },
  {
    'Marmite ': `British savoury food spread based on yeast extract, invented by the German scientist Justus von Liebig. It is made from by-products of beer brewing (lees) and is produced by the British company Unilever. "Love it or hate it." `,
  },
  {
    'Alfred Einhorn ': `(27 February 1856 – 21 March 1917) was a German chemist most notable for first synthesizing procaine in 1905 which he patented under the name Novocain. Until that time the primary anesthetic in use was cocaine, however its undesirable side effects (including toxicity and addiction) led scientists to seek out newer anesthetic drugs. `,
  },
  {
    'Andreas Stihl ': `(10 November 1896 – 14 January 1973 ) a Swiss-born German engineer and important inventor in the area of chainsaws. He is often hailed as the "Father of the chainsaw".`,
  },
  { 'Rhenium ': `the last element to be discovered having a stable isotope.` },
  { 'lari ': `the currency of Georgia. It is divided into 100 tetri.` },
  { 'kip ': `the currency of Laos since 1955. ` },
  { 'Bangladeshi taka ': `currency of the People's Republic of Bangladesh.` },
  {
    'pula ': `currency of Botswana. It literally means "rain" in Setswana, because rain is very scarce in Botswana—home to much of the Kalahari Desert—and therefore valuable and a blessing. The word also serves as the national motto of the country.`,
  },
  { 'riel ': `currency of Cambodia` },
  { 'shilling ': `currency of Kenya. It is divided into 100 cents. ` },
  {
    'quetzal ': `currency of Guatemala, named after the national bird of Guatemala`,
  },
  { 'lilangeni ': `currency of Eswatini and is subdivided into 100 cents` },
  { 'colón ': `currency of Costa Rica. ` },
  { 'afghani ': `official currency of Afghanistan. ` },
  { 'kwanza ': `currency of Angola. ` },
  {
    'dram ': `currency of Armenia, and is also used in the neighboring unrecognized Republic of Artsakh. `,
  },
  { 'manat ': `currency of Azerbaijan. It is subdivided into 100 gapiks.` },
  { 'gourde ': `currency of Haiti` },
  { 'escudo ': `currency of the Republic of Cape Verde` },
  {
    'Ronald Ross ': `British medical doctor who received the Nobel Prize for Physiology or Medicine in 1902 for his work on the transmission of malaria, becoming the first British Nobel laureate, and the first born outside Europe. His discovery of the malarial parasite in the gastrointestinal tract of a mosquito in 1897 proved that malaria was transmitted by mosquitoes, and laid the foundation for the method of combating the disease.`,
  },
  {
    'Система природы': `one of the major works of the Swedish botanist, zoologist and physician Carl Linnaeus (1707–1778) and introduced the Linnaean taxonomy.`,
  },
  {
    'Скучный миллиард': `otherwise known as the Mid Proterozoic and Earth's Middle Ages, is the time period between 1.8 and 0.8 billion years ago (Ga) spanning the middle Proterozoic eon, characterized by more or less tectonic stability, climatic stasis, and slow biological evolution.`,
  },
  {
    'Линия Армстронга': `высота, выше которой живые организмы не могут существовать. Линия находится на высоте 18-19 км над уровнем моря, атмосферное давление на этой высоте — порядка 6,3 кПа. Температура закипания воды равна нормальной температуре человеческого тела.`,
  },
  {
    'Lynn Margulis ': `(March 5, 1938 – November 22, 2011) was an American evolutionary biologist, and was the primary modern proponent for the significance of symbiosis in evolution. She was also the co-developer of the Gaia hypothesis with the British chemist James Lovelock. Was the wife of Carl Sagan`,
  },
  {
    'Мазок Папаниколау': `тест, с помощью которого можно определить предраковые или раковые клетки во влагалище и шейке матки`,
  },
  {
    "Allen's rule ": `ecogeographical rule formulated in 1877, broadly stating that animals adapted to cold climates have shorter and thicker limbs and bodily appendages than animals adapted to warm climates. More specifically, it states that the body surface-area-to-volume ratio for homeothermic animals varies with the average temperature of the habitat to which they are adapted (i.e. the ratio is low in cold climates and high in hot climates). `,
  },
  {
    'Coolidge effect ': `biological phenomenon seen in animals, whereby males exhibit renewed sexual interest whenever a new female is introduced, even after sex with prior but still available sexual partners.`,
  },
  {
    'HeLa ': `immortalized cell line used in scientific research. It is the oldest and most commonly used human cell line. The line is derived from cervical cancer cells taken on February 8, 1951, from Henrietta Lacks, a 31-year-old African-American mother of five, who died of cancer on October 4, 1951, and after whom they are named. The cell line was found to be remarkably durable and prolific, which allows it to be used extensively in scientific study. `,
  },
  {
    'Lordosis ': `historically defined as an abnormal inward curvature of the lumbar spine. Similarly, kyphosis historically refers to abnormal convex curvature of the spine. `,
  },
  {
    'Биогенетический закон Геккеля—Мюллера': `historical hypothesis that the development of the embryo of an animal, from fertilization to gestation or hatching (ontogeny), goes through stages resembling or representing successive adult stages in the evolution of the animal's remote ancestors (phylogeny). `,
  },
  {
    'Фосфен ': `зрительное ощущение, возникающее у человека без воздействия света на глаз. Могут возникать вследствие воздействия на зрительную систему на её разных уровнях: механическим воздействием (нажатие на закрытый глаз, например), сильными магнитными полями, химическими веществами, электрическим возбуждением сетчатки`,
  },
  {
    'Thomas Becket': `(21 December 1119 or 1120 – 29 December 1170) served as Lord Chancellor from 1155 to 1162, and then notably as Archbishop of Canterbury from 1162 until his death in 1170. He engaged in conflict with Henry II, King of England, over the rights and privileges of the Church and was murdered by followers of the king in Canterbury Cathedral. Soon after his death, he was canonised by Pope Alexander III. He is venerated as a saint and martyr by the Catholic Church and the Anglican Communion.`,
  },
  {
    'Ilkhanate ': `Mongol khanate established from the southwestern sector of the Mongol Empire. It was established after Hulagu Khan, the son of Tolui and grandson of Genghis Khan, inherited the Southwest Asian part of the Mongol Empire after his brother Möngke Khan died in 1259.`,
  },
  {
    'Alexander McQueen ': `(17 March 1969 – 11 February 2010) was a British fashion designer and couturier. He died by suicide in 2010 at the age of 40, at his home in Mayfair, London, shortly after the death of his mother. `,
  },
  {
    'Jean-Philippe Rameau ': `(September 25, 1683 – September 12, 1764) was a French composer and music theorist. Regarded as one of the most important French composers and music theorists of the 18th century, he replaced Jean-Baptiste Lully as the dominant composer of French opera and is also considered the leading French composer of his time for the harpsichord, alongside François Couperin.`,
  },
  {
    'Montfaucon ': `main gallows and gibbet of the Kings of France until the time of Louis XIII of France. It was used to execute criminals, often traitors, by hanging and to display their dead bodies as a warning to the population. `,
  },
  {
    'Nancy Goldin ': `(born September 12, 1953) is an American photographer and activist. Her work often explores LGBT subcultures, moments of intimacy, the HIV/AIDS crisis, and the opioid epidemic. Her most notable work is The Ballad of Sexual Dependency (1986).`,
  },
  {
    'Паррасий из Эфеса ': `Zeuxis painted some grapes so perfectly that a flock of birds flew down to eat them but, instead, only pecked at their picture. Zeuxis had fooled the birds with his picture. BLANK and Zeuxis walked to BLANK's studio whereupon BLANK asked Zeuxis to draw aside the curtain and witness his own masterpiece. When Zeuxis attempted to do so, he realized that the curtain was not a curtain, but a painting of a curtain. Zeuxis acknowledged himself to be surpassed, for while Zeuxis had deceived the birds, BLANK had deceived Zeuxis.`,
  },
  {
    'Tony Bennett': ` (August 3, 1926 – July 21, 2023) In 1962, he recorded his signature song, "I Left My Heart in San Francisco".`,
  },
  {
    'Herrenvolk (Раса господ)': `a people who believe they are superior to all other races and destined to rule the world, a concept espoused by the Nazi Party in Germany in the 1930s and 1940s.`,
  },
  {
    'hibachi ': `Japanese pot or brazier for burning charcoal for heating purposes; also a variety of portable outdoor cooking equipment resembling a barbecue.`,
  },
  {
    'инта́льо ': `an engraving or figure sunk in relief in stone or other hard material; also applied to such images printed or stamped in relief on paper.`,
  },
  {
    'intifada ': `uprising (specifically, the Palestinian rebellion against the Israeli occupation in 1987): `,
  },
  {
    'Хай-алай ': `game resembling handball, played on a three-walled court by two or four players who use a long, curved wicker basket strapped to the wrist to catch and throw a small, hard ball against the front wall.`,
  },
  {
    'Джеллаба ': `традиционная берберская одежда, представляющая собой длинный, с остроконечным капюшоном свободный халат с пышными рукавами, распространённая среди мужчин и женщин арабоязычных стран Средиземного моря, в основном североафриканских. На сегодняшний день более всего распространена в Марокко.`,
  },
  {
    'kaddish ': `Jewish liturgical prayer spoken in each of the three daily services in synagogues and also in the course of mourning rituals`,
  },
  {
    'Куфия (арафатка) ': `Arabic headdress comprising a folded square of cloth kept in place by a cord`,
  },
  {
    'kiblah ': `the direction in which Muslims turn to pray (specifically, toward the Kaaba at Mecca).`,
  },
  { 'kir ': `alcoholic drink comprising white wine and cassis` },
  {
    'majolica ': `a type of richly colored Italian earthenware pottery with a decorated tin glaze`,
  },
  {
    'Chesme, Battle of (July 5– 7, 1770) ': `1770 battle in the area between the western tip of Anatolia and the island of Chios, which was the site of a number of past naval battles between the Ottoman Empire and the Republic of Venice. It was a part of the Orlov Revolt of 1770, a precursor to the later Greek War of Independence (1821–1829), and the first of a number of disastrous fleet battles for the Ottomans against Russia. Today it is commemorated as a Day of Military Honour in Russia.`,
  },
  {
    'Curzon Line ': `Boundary between Poland and Russia drawn after World War I that figured in discussions during and after World War II over Poland’s eastern frontier. `,
  },
  {
    'ANTISTHENES OF ATHENS ': `Some take him to be the founder of the Cynic school of philosophy. He is said to have studied first with Gorgias and then with Socrates. He was notable for wearing exceedingly ragged and dirty clothing to demonstrate his disdain for material things.`,
  },
  {
    'APEIRON ': `Literally, “without limit” or “without definition.” Anaximander says that it is the origin of all things; Theophrastus understands him as meaning that the it is a material substrate that as yet has no characteristics. Some later writers took Anaximander as meaning that it is indefinitely extended space and time.`,
  },
  {
    'ARISTARCHUS OF SAMOS ': `He asserted a heliocentric solar system (anticipating Copernicus) and made a serious attempt to calculate the distance of the moon, sun, and stars from earth on the basis of careful observations, preserved in On the Sizes and Distances of the Sun and the Moon`,
  },
  {
    ARRIAN: `(c. 92–c. 175 CE). Known to historians of philosophy primarily for his nearly stenographic reports of the Discourses of Epictetus, he also wrote a very important account of the campaigns of Alexander of Macedon, the Anabasis Alexandri , and a report of the voyage back from India of the Macedonian fleet under Nearchus, the Indica.`,
  },
  {
    'DIOGENES LAERTIUS ': `the author of “The Lives and Opinions of the Philosophers,” (О жизни, учениях и изречениях знаменитых философов) the only extant ancient history of philosophy.`,
  },
  {
    DOXOGRAPHY: `Several ancient writers collected the opinions of various philosophers, giving generally brief and often comparative descriptions of their views. Some of those texts are our only evidence for the opinions of some of the ancient thinkers, or the only evidence for a significant portion of their work.`,
  },

  {
    Эннеа́ды: `сборник произведений Плоти́на в шести частях, по девять трактатов в каждой, собранный его учеником, финикийским неоплатоником и доксографом Порфирием ок. 270 года.`,
  },
  {
    'Mikis Theodorakis (Маутхаузен - концлагерь) ': `(29 July 1925 – 2 September 2021) was a Greek composer and lyricist credited with over 1,000 works. He scored for the films Zorba the Greek (1964), Z (1969), and Serpico (1973). He composed the "Mauthausen Trilogy", also known as "The Ballad of Mauthausen", which has been described as the "most beautiful musical work ever written about the Holocaust" and possibly his best work.`,
  },
  {
    'Diana Ross ': `(born March 26, 1944) is an American singer and occasional actress. She rose to fame as the lead singer of the vocal group The Supremes, who became Motown's most successful act during the 1960s and one of the world's best-selling girl groups of all time. `,
  },
  {
    'Gil Scott-Heron ': `(April 1, 1949 – May 27, 2011) was an American jazz poet, singer, musician, and author, known primarily for his work as a spoken-word performer in the 1970s and 1980s. His collaborative efforts with musician Brian Jackson featured a musical fusion of jazz, blues, and soul, as well as lyrical content concerning social and political issues of the time, delivered in both rapping and melismatic vocal styles `,
  },
  {
    'Simon Cowell ': `(born 7 October 1959) is an English television personality, entrepreneur and record executive. He is the creator of The X Factor and Got Talent franchises which have been sold around the world. He has judged on the British television talent competition series Pop Idol (2001–2003), The X Factor UK (2004–2010, 2014–2018) and Britain's Got Talent (2007–present), and the American television talent competition series American Idol (2002–2010), The X Factor US (2011–2013),`,
  },
  {
    'Brian Wilson ': `(born June 20, 1942) is an American musician, singer, songwriter, and record producer who co-founded the Beach Boys.`,
  },
  {
    'George Henry Martin ': `(3 January 1926 – 8 March 2016) was an English record producer, arranger, composer, conductor, and musician. He was commonly referred to as the "Fifth Beatle" because of his extensive involvement in each of the Beatles' original albums. AllMusic has described him as the "world's most famous record producer".`,
  },
  {
    'Phillip Spector ': ` (born December 26, 1939 - January 16, 2021) was an American record producer and songwriter, best known for his innovative recording practices and entrepreneurship in the 1960s, followed decades later by his two trials and conviction for murder in the 2000s. He developed the Wall of Sound, a production style that is characterized for its diffusion of tone colors and dense orchestral sound, which he described as a "Wagnerian" approach to rock and roll.`,
  },
  {
    'Нэ́нси Спа́нджен': `девушка басиста британской панк-рок-группы Sex Pistols Сида Вишеса`,
  },
  {
    'The square–cube law ': `mathematical principle, applied in a variety of scientific fields. Things get heavier (much) faster than they get wider, as they increase in size in all three dimensions.
  And since every layer of bone (or girders, or concrete, etc) has to support the weight of everything above it, this creates a maximum size for structures or animals or plants made of specific materials.
  
  `,
  },
  {
    'Поведенческая клоака (Многие [самки крыс] были неспособны перенести беременность до полного срока или пережить роды. Ещё большее число после успешных родов демонстрировали снижение материнских инстинктов. Среди самцов нарушения поведения варьировались от полового отклонения до каннибализма и от неистовой чрезмерной активности до патологической абстиненции, при которой индивиды могли есть, пить и передвигаться, только когда другие члены сообщества спали. ) ': `term invented by ethologist John B. Calhoun to describe a collapse in behavior which can result from overcrowding. The term and concept derive from a series of over-population experiments Calhoun conducted on Norway rats between 1958 and 1962. In the experiments, Calhoun and his researchers created a series of "rat utopias" – enclosed spaces in which rats were given unlimited access to food and water, enabling unfettered population growth. `,
  },
  {
    'Визуальный снег ': `uncommon neurological condition in which the primary symptom is that affected individuals see persistent flickering white, black, transparent, or coloured dots across the whole visual field. Other common symptoms are palinopsia, enhanced entoptic phenomena, photophobia, and tension headaches. The condition is typically always present and has no known cure, as viable treatments are still under research.`,
  },
  {
    'Songhai Empire': `state located in the western part of the Sahel during the 15th and 16th centuries. At its peak, it was one of the largest African empires in history. Sonni Ali (Сонни Али Бер) established Gao as the empire's capital`,
  },
  {
    'Битва при Бэннокбёрне': `was fought on 23–24 June 1314, between the army of Robert the Bruce, King of Scots, and the army of King Edward II of England, during the First War of Scottish Independence. It was decisive victory for Robert Bruce and formed a major turning point in the war, which ended 14 years later with the de jure restoration of Scottish independence under the Treaty of Edinburgh–Northampton. For this reason, this battle is widely considered a landmark moment in Scottish history.`,
  },
  {
    'Odoacer ': `( – 15 March 493 AD), was a barbarian soldier and statesman from the Middle Danube who deposed the Western Roman child emperor Romulus Augustulus and became the ruler of Italy (476–493). The overthrow of Romulus Augustulus is traditionally seen as marking the end of the Western Roman Empire as well as Ancient Rome.`,
  },
  {
    'Hulagu Khan': `c. 1217 – 8 February 1265), was a Mongol ruler who conquered much of Western Asia. His army greatly expanded the southwestern portion of the Mongol Empire, founding the Ilkhanate of Persia, a precursor to the eventual Safavid dynasty, and then the modern state of Iran. Under his leadership, the Mongols sacked and destroyed Baghdad ending the Islamic Golden Age `,
  },
  {
    'Monte Cassino ': `rocky hill about 130 km southeast of Rome, in the Latin Valley, Italy. Site of the Roman town of Casinum, it is widely known for its abbey, the first house of the Benedictine Order`,
  },
  {
    'Душан Сильный': `создатель Сербского царства. В ходе ряда успешных войн под его руководством Сербское царство превратилось в самую сильную державу региона, включив в свой состав значительную часть Балканского полуострова и составив реальную конкуренцию Византийской империи.`,
  },
  {
    'Battle of Kosovo ': `крупное сражение, состоявшееся 15 июня 1389 года между объединённым войском сербских феодалов в союзе с Боснийским королевством с одной стороны и армией турок-османов с другой. Несмотря на победу османских войск, сразу же после битвы армия султана спешным маршем направилась к Адрианополю из-за больших потерь, а также опасений наследника Мурада Баязида, что смерть его отца может привести к смутам в Османской империи. `,
  },
  {
    'Hel ': `female being in Norse mythology who is said to preside over an underworld realm of the same name, where she receives a portion of the dead.`,
  },
  {
    'Lollardy (бормочущие)': `movement that was active in England from the mid-14th century until the 16th-century English Reformation. It was initially led by John Wycliffe, a Catholic theologian who was dismissed from the University of Oxford in 1381 for criticism of the Roman Catholic Church. The Lollards' demands were primarily for reform of Western Christianity.`,
  },
  {
    'John Wycliffe ': `English scholastic philosopher, theologian, biblical translator, reformer, Catholic priest, and a seminary professor at the University of Oxford. He became an influential dissident within the Catholic priesthood during the 14th century and is considered an important predecessor to Protestantism. `,
  },
  {
    'Harry Hotspur': `English knight who fought in several campaigns against the Scots in the northern border and against the French during the Hundred Years' War. The nickname "Hotspur" was given to him by the Scots as a tribute to his speed in advance and readiness to attack.`,
  },
  {
    'Соляная шахта в Величке': `salt mine near Kraków in southern Poland.
  From Neolithic times, sodium chloride (table salt) was produced there from the upwelling brine. It produced table salt continuously until 1996, as one of the world's oldest operating salt mines`,
  },
  {
    'Юстинианова чума': `первая в истории зарегистрированная пандемия (мировая эпидемия) чумы, охватившая почти всю территорию цивилизованного мира того времени. В виде отдельных вспышек и эпидемий проявлялась на протяжении двух веков — с 541 года до середины VIII века.
  `,
  },
  {
    'Anteros ': `god of requited love (literally "love returned" or "counter-love") and also the punisher of those who scorn love and the advances of others, or the avenger of unrequited love.`,
  },
  {
    'Cecrops ': `mythical king of Attica. He was the founder and the first king of Athens itself though preceded in the region by the earth-born king Actaeus of Attica. He was a culture hero, teaching the Athenians marriage, reading and writing, and ceremonial burial.`,
  },
  {
    'Sedna ': `goddess of the sea and marine animals in Inuit mythology, also known as the Mother of the Sea or Mistress of the Sea. Her story, which is a creation myth, describes how she came to rule over Adlivun, the Inuit underworld.`,
  },
  {
    'Momotarō ': `popular hero of Japanese folklore. His name is often translated as Peach Boy`,
  },
  {
    'Сунь Укун': `китайский литературный персонаж, являющий из себя царя обезьян, известный по роману «Путешествие на Запад» У Чэнъэня. Как и Нэчжа, является одним из наиболее популярных образов трикстеров в культуре Восточной Азии.

  `,
  },
  {
    'Родо́пис ': `гетера, жившая, предположительно, в VI веке до н. э., современница поэтессы Сапфо и любовница её брата. Вероятный прототип самой ранней из записанных вариаций сказки о Золушке (её потерянной туфле).
  `,
  },
  {
    'Shangri-La ': `fictional place in Tibet’s Kunlun Mountains, described in the 1933 novel Lost Horizon by English author James Hilton. Hilton portrays it as a mystical, harmonious valley, gently guided from a lamasery, enclosed in the western end of the Kunlun Mountains. It has become synonymous with any earthly paradise, particularly a mythical Himalayan utopia – an enduringly happy land, isolated from the world`,
  },
  {
    'Sif ': `goddess associated with earth. She is known for her golden hair and is married to the thunder god Thor`,
  },
  {
    'Minos ': `King of Crete, son of Zeus and Europa. Every nine years, he made King Aegeus pick seven young boys and seven young girls to be sent to Daedalus's creation, the labyrinth, to be eaten by the Minotaur. After his death, he became a judge of the dead in the underworld. The archeologist Sir Arthur Evans named the civilization of Crete after him.`,
  },
  {
    'Peter Henlein ': `(1485 - August 1542), a locksmith and clockmaker of Nuremberg, Germany, is often considered the inventor of the watch. He was one of the first craftsmen to make small ornamental portable clocks which were often worn as pendants or attached to clothing, and which are regarded as the first watches. Many sources also erroneously credit him as the inventor of the mainspring.`,
  },
  {
    'Tabun ': `extremely toxic synthetic organophosphorus compound. It is a clear, colorless, and tasteless liquid with a faint fruity odor. It is classified as a nerve agent because it fatally interferes with normal functioning of the mammalian nervous system. Its production is strictly controlled and stockpiling outlawed by the Chemical Weapons Convention of 1993. It is the first of the G-series nerve agents along with GB (sarin), GD (soman) and GF (cyclosarin).`,
  },
  {
    'J. J. Thomson ': `In 1897, he showed that cathode rays were composed of a previously unknown negatively charged particle, which was later named the electron.`,
  },
  {
    'Jawed Karim ': `(born October 28, 1979) is an American software engineer and Internet entrepreneur of Bangladeshi and German descent. He is a co-founder of YouTube and the first person to upload a video to the site. This inaugural video, "Me at the zoo", uploaded on April 23, 2005, has been viewed over 260 million times. `,
  },
  {
    'Z3 ': `German electromechanical computer designed by Konrad Zuse in 1938, and completed in 1941. It was the world's first working programmable, fully automatic digital computer. `,
  },
  {
    'Льюльяйлья́ко ': `dormant stratovolcano at the border of Argentina (Salta Province) and Chile (Antofagasta Region). It lies in the Puna de Atacama, a region of tall volcanic peaks on a high plateau close to the Atacama Desert, one of the driest places in the world. It is the second highest active volcano in the world after Ojos del Salado.`,
  },
  {
    'Musala ': `highest peak in the Rila Mountains, as well as in Bulgaria and the entire Balkan Peninsula, standing at 2925 m. `,
  },
  {
    'Burkhan Khaldun ': `one of the Khentii Mountains in the Khentii Province of northeastern Mongolia. The mountain or its locality is believed to be the birthplace of Genghis Khan as well as his tomb. It is also the birthplace of one of his most successful generals, Subutai. It had strong religious significance before Genghis Khan made it a powerful landmark and is considered the most sacred mountain in Mongolia since it was designated as sacred by Genghis Khan. `,
  },
  {
    'Troodos ': `largest mountain range in Cyprus, located in roughly the center of the island. Its highest peak is Mount Olympus`,
  },
  {
    'El Capitan ': `is a vertical rock formation in Yosemite National Park, on the north side of Yosemite Valley, near its western end. The granite monolith is about 3,000 ft from base to summit along its tallest face and is a world-famous location`,
  },
  {
    'Pico de Orizaba': `active stratovolcano, the highest mountain in Mexico and the third highest in North America, after Denali of Alaska in the United States and Mount Logan of Canada. `,
  },
  {
    'Parícutin ': `cinder cone volcano located in the Mexican state of Michoacán, near the city of Uruapan and about 322 km west of Mexico City. The volcano surged suddenly from the cornfield of local farmer Dionisio Pulido in 1943, attracting both popular and scientific attention. It presented the first occasion for modern science to document the full life cycle of an eruption of this type. During the volcano's nine years of activity, scientists sketched and mapped it and took thousands of samples and photographs. `,
  },
  {
    'Carlo Gesualdo ': `(c. 30 March 1566 – 8 September 1613) As a composer he is known for writing madrigals and pieces of sacred music that use a chromatic language not heard again until the late 19th century. He is also known for killing his first wife and her aristocratic lover upon finding them in flagrante delicto.`,
  },
  {
    'John Lasseter ': `(born January 12, 1957) is an American film director. Lasseter oversaw all of Pixar's films and associated projects as executive producer. In addition, he directed Toy Story (1995), A Bug's Life (1998), Toy Story 2 (1999), Cars (2006), and Cars 2 (2011).`,
  },
  {
    'Leoš Janáček': `His later works are his most celebrated. They include operas such as Káťa Kabanová and The Cunning Little Vixen, the Sinfonietta, the Glagolitic Mass, the rhapsody Taras Bulba, two string quartets, and other chamber works.`,
  },
  {
    'Carl Nielsen ': `(9 June 1865 – 3 October 1931) was a Danish composer, conductor and violinist, widely recognized as his country's most prominent composer.`,
  },
  {
    'Brian Epstein ': `(19 September 1934 – 27 August 1967) was a British music entrepreneur who managed the Beatles from 1962 until his death in 1967.`,
  },
  {
    'Stephen Hillenburg ': `(August 21, 1961 – November 26, 2018) was an American animator, writer, producer, director, and marine science educator. He is known for creating the Nickelodeon animated television series SpongeBob SquarePants, on which he served as the showrunner for the first three seasons of the show, and which has become the fifth-longest-running American animated series.`,
  },
  {
    'The Kinks ': `English rock band formed in Muswell Hill, North London, in 1963 by brothers Ray and Dave Davies. "You Really Got Me"`,
  },
  {
    'Amália Rodrigues ': `(23 July 1920 – 6 October 1999) was a Portuguese fadista (fado singer). Known as the 'Rainha do Fado' ("Queen of Fado"), `,
  },
  {
    'Sinn Sisamouth ': `(c. 1932 – c. 1976) was a Cambodian singer-songwriter active from the 1950s to the 1970s. Widely considered the "King of Khmer Music", he along with Ros Serey Sothea, Pen Ran, Mao Sareth, and other Cambodian artists, was part of a thriving pop music scene in Phnom Penh that blended elements of Khmer traditional music with the sounds of rhythm and blues and rock and roll to develop a Cambodian rock sound. He died during the Khmer Rouge regime under circumstances that are unclear.`,
  },
  {
    'Yma Sumac ': `was a Peruvian-born vocalist, composer, producer, actress and model. Her name means "how beautiful" in Quechua. She has also been called Queen of Exotica and is considered a pioneer of world music. `,
  },
  {
    'Thomas Nast ': `(September 26, 1840 – December 7, 1902) was a German-born American caricaturist and editorial cartoonist often considered to be the "Father of the American Cartoon". He was a critic of Democratic Representative "Boss" Tweed and the Tammany Hall Democratic party political machine. He created a modern version of Santa Claus (based on the traditional German figures of Sankt Nikolaus and Weihnachtsmann) and the political symbol of the elephant for the Republican Party (GOP). Contrary to popular belief, Nast did not create Uncle Sam (the male personification of the United States Federal Government), Columbia (the female personification of American values), or the Democratic donkey, although he did popularize those symbols through his artwork. `,
  },
  {
    'Frederic Remington ': `(October 4, 1861 – December 26, 1909) was an American painter, illustrator, sculptor, and writer who specialized in the genre of Western American Art. His works are known for depicting the Western United States in the last quarter of the 19th century and featuring such images as cowboys, American Indians, and the US Cavalry.`,
  },
  {
    'John Prendergast ': `(3 November 1933 – 30 January 2011) was a British composer and conductor of film music. He composed the scores for eleven of the James Bond films between 1963 and 1987, as well as arranging and performing the "James Bond Theme" for the first film in the series, 1962's Dr. No. He wrote the Grammy- and Academy Award-winning scores to the films Dances with Wolves and Out of Africa, as well as the scores of The Scarlet Letter, Chaplin, The Cotton Club, Game of Death, The Tamarind Seed, Mary, Queen of Scots and the theme for the television series The Persuaders!, in a career spanning over 50 years.`,
  },
  {
    'Julia Cameron ': `(11 June 1815 – 26 January 1879) was a British photographer who is considered one of the most important portraitists of the 19th century. She is known for her soft-focus close-ups of famous Victorian men and women, for illustrative images depicting characters from mythology, Christianity, and literature, and for sensitive portraits of men, women and children.`,
  },
  {
    'Wiley ': `British grime MC, rapper, songwriter, DJ and record producer from Bow, London. Wiley is considered a key figure in the creation of grime music and often labelled the "Godfather of Grime". `,
  },
  {
    'Sun Ra': `American jazz composer, bandleader, piano and synthesizer player, and poet known for his experimental music, "cosmic" philosophy, prolific output, and theatrical performances. Claiming to be an alien from Saturn on a mission to preach peace, he developed a mythical persona and an idiosyncratic credo that made him a pioneer of Afrofuturism.`,
  },
  {
    'Daniel Elfman ': `(born May 29, 1953) is an American film composer, singer and songwriter. He came to prominence as the singer-songwriter for the new wave band Oingo Boingo in the early 1980s. Since scoring his first studio film in 1985, he has garnered international recognition for composing over 100 feature film scores, as well as compositions for television, stage productions, and the concert hall. `,
  },
  {
    'Lidia Ruslanova ': `(27 October 1900 in Saratov Governorate – 21 September 1973 in Moscow) was a performer of Russian folk songs. "Valenki"`,
  },
  {
    Duccio: `(c. 1255–1260 – c. 1318–1319) was an Italian painter active in Siena, Tuscany, in the late 13th and early 14th century. He was hired throughout his life to complete many important works in government and religious buildings around Italy. He is considered one of the greatest Italian painters of the Middle Ages, and is credited with creating the painting styles of Trecento and the Sienese school.`,
  },
  {
    'Émile Cohl ': `(4 January 1857 – 20 January 1938) was a French caricaturist of the Incoherent Movement, cartoonist, and animator, called "The Father of the Animated Cartoon". Фантасмагория`,
  },
  {
    'Robert Frank ': `Swiss photographer and documentary filmmaker, who became an American binational. His most notable work, the 1958 book titled The Americans, earned Frank comparisons to a modern-day de Tocqueville for his fresh and nuanced outsider's view of American society. Critic Sean O'Hagan, writing in The Guardian in 2014, said The Americans "changed the nature of photography, what it could say and how it could say it. [ ... ] it remains perhaps the most influential photography book of the 20th century."`,
  },
  {
    'Max Martin': `Swedish record producer and songwriter. He rose to prominence in the late 1990s making a string of hit singles such as Britney Spears's "...Baby One More Time" (1998), the Backstreet Boys' "I Want It That Way" (1999), Céline Dion's "That's the Way It Is" (1999) and NSYNC's "It's Gonna Be Me" (2000). Martin has written or co-written 25 Billboard Hot 100 number-one songs, most of which he has also produced or co-produced, including Katy Perry's "I Kissed a Girl" (2008) and "Roar" (2013), Maroon 5's "One More Night" (2012), Taylor Swift's "Shake It Off" and "Blank Space" (2014), and The Weeknd's "Blinding Lights" (2019) and "Save Your Tears" (2020). `,
  },
  {
    'Nobuo Uematsu ': `Japanese composer and keyboardist best known for his contributions to the Final Fantasy video game series by Square Enix. A self-taught musician, he began playing the piano at the age of twelve, with English singer-songwriter Elton John as one of his biggest influences.`,
  },
  {
    'Fairuz ': `Lebanese singer. She is considered by many as one of the leading vocalists and most famous singers in the history of the Arab world. She is considered the musical icon of Lebanon and is popularly known as "the soul of Lebanon". She began her musical career as a teenager at the national radio station in Lebanon in the late 1940s as a chorus member.`,
  },
  {
    'White Stripes ': `American rock duo from Detroit formed in 1997. The group consisted of Jack White (songwriter, vocals, guitar, piano, and bass) and Meg White (drums, percussion, and vocals). They were a leading group of the 2000s indie rock and garage rock revival.`,
  },
  {
    'Jimmy Page ': `(born 9 January 1944) is an English musician who achieved international success as the guitarist and founder of the rock band Led Zeppelin. He is prolific in creating guitar riffs. His style involves various alternative guitar tunings and melodic solos, coupled with aggressive, distorted guitar tones.`,
  },
  {
    'The Bee Gees ': `were a musical group formed in 1958 by brothers Barry, Robin, and Maurice Gibb.`,
  },
  {
    'George Clinton ': `(born July 22, 1941 ) is an American musician, singer, bandleader, and record producer. His Parliament-Funkadelic collective (which primarily recorded under the distinct band names Parliament and Funkadelic) developed an influential and eclectic form of funk music during the 1970s that drew on science fiction, outlandish fashion, psychedelia, and surreal humor. He launched his solo career with the 1982 album Computer Games and would go on to influence 1990s hip hop and G-funk. He is regarded, along with James Brown and Sly Stone, as one of the foremost innovators of funk music.`,
  },
  {
    'Theodor Schwann ': `( 7 December 1810 – 11 January 1882) was a German physician and physiologist. His most significant contribution to biology is considered to be the extension of cell theory to animals. Other contributions include the discovery of BLANK cells in the peripheral nervous system, the discovery and study of pepsin, the discovery of the organic nature of yeast, and the invention of the term "metabolism".`,
  },
  { 'Ewald von Kleist  ': `the inventor of the Leyden jar.` },
  {
    'Огниво Дёберейнера': `первая полноценная зажигалка. Огниво было изобретено в 1823 году. Этот прибор вскоре стали продавать по всей Германии. Практичное и относительно безопасное огниво имело успех, его выпуск достиг 20 000 экземпляров к 1829 году.`,
  },
  {
    'Fraunhofer lines ': `set of spectral absorption lines named after the German physicist (1787–1826). The lines were originally observed as dark features (absorption lines) in the optical spectrum of the Sun (white light). `,
  },
  {
    'Johann Denner ': `(13 August 1655 – 26 April 1707) was a German woodwind instrument maker of the Baroque era, to whom the invention of the clarinet is attributed.`,
  },
  {
    'Stollen ': `fruit bread of nuts, spices, and dried or candied fruit, coated with powdered sugar or icing sugar and often containing marzipan. It is a traditional German Christmas bread.`,
  },
  {
    'Magnus effect ': `observable phenomenon commonly associated with a spinning object moving through a fluid. A lift force acts on the spinning object. The path of the object may be deflected in a manner not present when the object is not spinning. The deflection can be explained by the difference in pressure of the fluid on opposite sides of the spinning object. `,
  },
  {
    'Emile Berliner ': `(May 20, 1851 – August 3, 1929) was a German-American inventor. He is best known for inventing the lateral-cut flat disc record (called a "gramophone record" in British and American English) used with a gramophone. He founded the United States Gramophone Company in 1894;`,
  },
  {
    'Lager ': `beer which has been brewed and conditioned at low temperature. They can be pale, amber, or dark. Pale  is the most widely consumed and commercially available style of beer. The term comes from the German for "storage", as the beer was stored before drinking, traditionally in the same cool caves in which it was fermented.`,
  },
  {
    'Carl Diem ': `(24 June 1882, Würzburg – 17 December 1962, Cologne) was a German sports administrator, and as Secretary General of the Organizing Committee of the Berlin Olympic Games, the chief organizer of the 1936 Olympic Summer Games. He created the tradition of the Olympic torch relay when he organised the 1936 build-up event, and was an influential historian of sport, particularly the Olympic games.`,
  },
  {
    'Фридрих Людвиг Ян': `(11 August 1778 – 15October 1852) was a German gymnastics educator and nationalist whose writing is credited with the founding of the German gymnastics (Turner) movement as well as influencing the German Campaign of 1813, during which a coalition of German states effectively ended the occupation by Napoleon's First French Empire. `,
  },
  {
    'Shandy ': `beer or cider mixed with a lemon or a lemon-lime flavored beverage. The citrus beverage, often called lemonade, may or may not be carbonated. The proportions of the two ingredients are adjusted to taste but are usually half lemonade and half beer/cider, resulting in a lower ABV for the finished drink.`,
  },
  {
    'Иоганн Липперсгей': `голландский изобретатель немецкого происхождения, оптик и мастер по производству очков, наиболее вероятный создатель телескопа. `,
  },
  {
    'Gerhard Schrader ': `(25 February 1903 – 10 April 1990) was a German chemist specializing in the discovery of new insecticides, hoping to make progress in the fight against hunger in the world. Schrader is best known for his accidental discovery of nerve agents such as sarin and tabun, and for this he is sometimes called the "father of the nerve agents".`,
  },
  {
    'Диск Нипкова': `механическое устройство для сканирования изображений, изобретённое в 1884 году. Этот диск являлся неотъемлемой частью многих систем механического телевидения вплоть до 1930-х годов. `,
  },
  {
    Пумперникель: `typically dense, slightly sweet rye bread traditionally made with sourdough starter and coarsely ground rye. It is sometimes made with a combination of rye flour and whole rye grains ("rye berries").`,
  },
  {
    habanera: `a slow Cuban dance in simple duple time, or the music that accompanies it.`,
  },
  {
    'gutta-percha ': `rubbery plastic substance derived from the latex of various Malaysian trees, variously used in dentistry, electrical insulation, and elsewhere.`,
  },
  {
    'grisette ': `French working girl or shopgirl, typically coquettish in character. Also applied to such young women who supplemented their income with part-time prostitution`,
  },
  { gravlax: `salmon cured with salt, dill, and other spices.` },
  {
    'frottage ': `practice of rubbing one's body against other people for the purposes of sexual excitement; alternatively, the artistic technique of making impressions of textured material by rubbing a pencil over a sheet of paper laid on top of it.`,
  },
  {
    'fartlek ': `system of training used especially by distance runners, in which speed and intensity are continually varied within each session.`,
  },
  {
    'faience ': `colorful tin-glazed earthenware of the type developed at the town of BLANK, Italy, sometimes applied to any type of glazed ceramic`,
  },
  {
    'Экзегетика  ': `an explanation or critical examination of a text, especially scriptural texts: `,
  },
  {
    'Эспадрильи ': `a type of sandal with a canvas upper and a flexible rope sole`,
  },
  {
    'Эскабече ': `a spicy marinade made with vinegar or citrus juice, onion, jalapeno peppers, and seasonings, used to flavor and preserve fish or meat.`,
  },
  { 'Айстедвод ': `a competitive Welsh festival of the arts: ` },
  {
    'effendi ': `a title of respect reserved for men of authority, education, or property in Arab or eastern Mediterra nean cultures: `,
  },
  {
    'dumdum ': `[after the arsenal in the town of BLANK, near Calcutta, India] noun a type of hollow-nosed bullet that expands explosively on hitting its target, with devastating effect:`,
  },
  {
    'Diwali ': `the Hindu and Sikh festival of lights, held in October and November.`,
  },
  {
    'dirndl ': `a full skirt gathered at the waistband, resembling that of the traditional Alpine peasant costume.`,
  },
  {
    'dashiki ': `a loose, brightly colored pullover shirt of a type widely worn in West Africa and the United States.`,
  },
  {
    'coprolalia ': `(in psychiatry) the involuntary, repetitive use of obscene language, especially as a characteristic of Tourette's syndrome or schizophrenia.`,
  },
  {
    'Charles Eames and Ray Eames ': `an American married couple of industrial designers who made significant historical contributions to the development of modern architecture and furniture. Among their most recognized designs is the BLANK Lounge Chair and the BLANK Dining Chair`,
  },
  {
    'Kat Von D': `an American tattoo artist, television personality, entrepreneur and recording artist. She is best known for her work as a tattoo artist on the TLC reality television show LA Ink, which premiered in the United States on August 7, 2007, and ran for four seasons. `,
  },
  {
    'Ornette Coleman ': `(March 9, 1930 – June 11, 2015) was an American jazz saxophonist, trumpeter, violinist, and composer. He was best known as a principal founder of the free jazz genre, a term derived from his 1960 album Free Jazz: A Collective Improvisation. `,
  },
  {
    'Stéphane Grappelli ': `(26 January 1908 – 1 December 1997) was a French jazz violinist. He is best known as a founder of the Quintette du Hot Club de France with guitarist Django Reinhardt in 1934. It was one of the first all-string jazz bands.`,
  },
  {
    'Eugène Viollet-le-Duc ': `(27 January 1814 – 17 September 1879) was a French architect and author, famous for his restoration of the most prominent medieval landmarks in France. His major restoration projects included Notre-Dame de Paris, the Basilica of Saint Denis, Mont Saint-Michel, Sainte-Chapelle, the medieval walls of the city of Carcassonne, and Roquetaillade castle in the Bordeaux region.`,
  },
  {
    'Markus Persson ': `(born 1 June 1979), also known as Notch, is a Swedish video game programmer and designer. He is best known for creating the sandbox video game Minecraft, which has since become the best-selling video game of all time, and for founding the video game company Mojang in 2009.`,
  },
  {
    'Jeremy Soule ': `(born December 19, 1975) is an American composer of soundtracks for film, television, and video games. He has composed soundtracks for over 60 games and over a dozen other works during his career, including The Elder Scrolls, Guild Wars, Icewind Dale, and the Harry Potter series.`,
  },
  {
    'Cynthia Sherman ': `(born 1954) is an American artist whose work consists primarily of photographic self-portraits, depicting herself in many different contexts and as various imagined characters. Her breakthrough work is often considered to be the collected Untitled Film Stills, a series of 70 black-and-white photographs of herself evoking typical female roles in performance media (especially arthouse films and popular B-movies).`,
  },
  {
    'Jean Dubuffet ': `(31 July 1901 – 12 May 1985) was a French painter and sculptor. His idealistic approach to aesthetics embraced so-called "low art" and eschewed traditional standards of beauty in favor of what he believed to be a more authentic and humanistic approach to image-making. He is perhaps best known for founding the art movement art brut, and for the collection of works—Collection de l'art brut—that this movement spawned.`,
  },
  {
    'Тайто Кубо': `a Japanese manga artist and character designer. His manga series Bleach (2001–2016) had over 130 million copies in circulation as of 2022.`,
  },
  {
    'Peter Parler ': `(1333 – 13 July 1399) was a German-Bohemian architect and sculptor). After 1356 he lived in Prague, capital of the Kingdom of Bohemia and seat of the Holy Roman Empire, where he created his most famous works: St. Vitus Cathedral and the Charles Bridge.`,
  },
  {
    'Edith Head ': `(October 28, 1897 – October 24, 1981) was an American costume designer who won a record eight Academy Awards for Best Costume Design between 1949 and 1973, making her the most awarded woman in the Academy's history. `,
  },
  {
    'Thomas Kinkade': `(January 19, 1958 – April 6, 2012) was an American painter of popular realistic, pastoral, and idyllic subjects. He is notable for achieving success during his lifetime with the mass marketing of his work as printed reproductions (puzzles)`,
  },
  {
    'Carl Barks ': `an American cartoonist, author, and painter. He is best known for his work in Disney comic books, as the writer and artist of the first Donald Duck stories and as the creator of Scrooge McDuck. He worked anonymously until late in his career; fans dubbed him The Duck Man and The Good Duck Artist. `,
  },
  {
    'Masashi Kishimoto ': `a Japanese manga artist. His manga series, Naruto, which was in serialization from 1999 to 2014, has sold over 250 million copies worldwide in 46 countries as of May 2019. `,
  },
  {
    'Hubert de Givenchy ': `(20 February 1927 – 10 March 2018) was a French aristocrat and fashion designer who founded the luxury fashion and perfume house in 1952. He is famous for having designed much of the personal and professional wardrobe of Audrey Hepburn and clothing for Jacqueline Bouvier Kennedy.`,
  },
  {
    'Hironobu Sakaguchi ': `The creator of the Final Fantasy franchise, in addition to other titles during his time at Square.`,
  },
  {
    'Joan Jett ': `(September 22, 1958) is an American singer, guitarist, record producer and actress. Jett is best known for her work as the frontwoman of her band BLANK and the Blackhearts, and for earlier founding and performing with the Runaways, which recorded and released the hit song "Cherry Bomb". With the Blackhearts, she is known for her rendition of the song "I Love Rock 'n Roll" which was number-one on the Billboard Hot 100 for seven weeks in 1982. `,
  },
  {
    'Maurice De Bevere': `a Belgian cartoonist, comics artist, illustrator and the creator of Lucky Luke, a bestselling comic series about a gunslinger in the American Wild West. He was inspired by the adventures of the historic Dalton Gang and other outlaws. It was a bestselling series for more than 50 years that was translated into 23 languages and published internationally.`,
  },
  {
    'Thomas Tompion': `(1639–1713) was an English clockmaker, watchmaker and mechanician who is still regarded to this day as the "Father of English Clockmaking". His work includes some of the most historic and important clocks and watches in the world, and can command very high prices whenever outstanding examples appear at auction.`,
  },
  {
    'Gaspard de Coligny ': `(16 February 1519 – 24 August 1572) was a French nobleman, Admiral of France, and Huguenot leader during the French Wars of Religion. He was assassinated at the start of the St Bartholomew's Day massacre, in 1572, on the orders of Henry, Duke of Guise.`,
  },
  {
    'Niccolò Tartaglia ': `(1499/1500 – 1557) was an Italian mathematician, engineer (designing fortifications), a surveyor (of topography, seeking the best means of defense or offense) and a bookkeeper from the then Republic of Venice. He published many books, including the first Italian translations of Archimedes and Euclid, and an acclaimed compilation of mathematics. Ру was the first to apply mathematics to the investigation of the paths of cannonballs, known as ballistics, in his Nova Scientia (A New Science, 1537); his work was later partially validated and partially superseded by Galileo's studies on falling bodies. He also published a treatise on retrieving sunken ships.`,
  },
  {
    'Синдром Котара ': `бредовое расстройство, характеризующееся ипохондрическими и мегаломаническими идеями. Психическое расстройство проявляется убеждением в наличии тяжелого заболевания, гниении или отсутствии внутренних органов, конечностей. Некоторые больные считают себя умершими и существующими в виде трупа или бестелесного создания. `,
  },
  {
    'Лилиева дата': `В программировании количество дней от принятия григорианского календаря (15 октября 1582 года).`,
  },
  {
    'Алоизий Лилий ': `итальянский врач, астроном, философ и хронолог, а также автор предложений, которые легли в основу календарной реформы 1582 года`,
  },
  {
    'Матте́о Ри́ччи ': `(1552 — 1610, Пекин) — итальянский миссионер-иезуит, математик, астроном, картограф и переводчик, который провёл последние тридцать лет своей жизни в Китае, положив начало иезуитской миссии в Пекине. Всемирно-историческое значение его деятельности состоит в установлении постоянных культурных контактов между христианской Европой и замкнутым китайским обществом.`,
  },
  {
    'Эрнест  Бо ': `русский и французский парфюмер, создавший знаменитые альдегидные духи Chanel No. 5, которые принесли ему славу. `,
  },
  {
    'Дио́гу Кан ': `(ок. 1440 — 1486) — португальский мореплаватель, который своими плаваниями вдоль западного побережья Африки проложил дорогу Бартоломеу Диашу и Васко да Гаме. В 1482 году открыл устье реки Конго.`,
  },
  {
    'Па́линка ': `венгерский фруктовый бренди.
  Этимологически слово восходит к славянизму  со значением «жечь».
  Напиток также распространён в других странах Карпатского бассейна (от Австрии до Румынии). Однако согласно венгерскому Закону о палинке от 2008 года, название может носить только произведённый в Венгрии из 100 % фруктового материала продукт, имеющий крепость не менее 40 % (для продажи в магазине), для венгров от 42-43°.
  `,
  },
  {
    'Поти́н ': `ирландский национальный крепкий алкогольный напиток крепостью 40—90 %, получаемый перегоном в кубе браги, приготовляемой из ячменя, картофеля, патоки, свёклы и других ингредиентов. Он является ирландской разновидностью самогона, который до недавнего времени производился нелегально в кустарных условиях.`,
  },
  {
    'Ирландское рагу ': `национальное блюдо ирландской кухни. Является традиционным и одним из самых популярных в стране.
  В состав входят баранина, картофель, лук, а также петрушка и тмин. Чаще всего мясо режется небольшими кусочками, в то время как овощи — крупно, наполовину или четвертями. Ингредиенты складывают в глубокую посуду, например, сотейник, после чего заливают водой и тушат на медленном огне около 1 часа.
  `,
  },
  {
    'Муга́м ': `один из основных жанров азербайджанской традиционной музыки, многочастное вокально-инструментальное произведение, являющееся классическим музыкально-поэтическим искусством азербайджанского народа`,
  },
  {
    'Бута́ (Пейсли)': `миндалевидный узор с заострённым загнутым верхним концом. Мотив известен у многих народов Востока на обширной территории. Хорошо известен в странах Ближнего Востока и в Европе.`,
  },
  {
    'Муль-фрит ': `блюдо из отварных мидий и картофеля фри, входит в бельгийскую и французскую кухни. Национальное блюдо Бельгии; также распространено в северной части Франции.`,
  },
  {
    'Стечки ': `монументальные средневековые надгробия (датируются в интервале от XII века до XVI века), встречающиеся в Боснии и Герцеговине (около 60 000), Хорватии, Черногории и Сербии (около 10 000). В 2009 году все четыре страны подали заявки на включение стечек в Список Всемирного наследия ЮНЕСКО`,
  },
  {
    'Мартени́ца ': `у болгар и македонцев украшение, амулет из шерсти или ниток, которое повязывают в первый день марта, чтобы в течение года быть здоровыми, счастливыми`,
  },
  {
    'Фри́дрих Кре́йцвальд ': `(1803 — 1882) — эстонский поэт, писатель, фольклорист, просветитель, врач и общественный деятель; основоположник национальной эстонской литературы.`,
  },
  {
    'Лати́нский квадра́т ': `таблица размеров n × n, заполненная n элементами множества M таким образом, что в каждой строке и в каждом столбце таблицы каждый элемент из M встречается в точности один раз.`,
  },
  {
    'Fisher–Yates shuffle ': `algorithm for generating a random permutation of a finite sequence—in plain terms, the algorithm shuffles the sequence. The algorithm effectively puts all the elements into a hat; it continually determines the next element by randomly drawing an element from the hat until no elements remain. The algorithm produces an unbiased permutation: every permutation is equally likely. `,
  },
  {
    'Джон Валлис': `(1616 – 1703) was an English clergyman and mathematician who is given partial credit for the development of infinitesimal calculus. Between 1643 and 1689 he served as chief cryptographer for Parliament and, later, the royal court. He is credited with introducing the symbol ∞ to represent the concept of infinity. He similarly used 1/∞ for an infinitesimal. He was a contemporary of Newton and one of the greatest intellectuals of the early renaissance of mathematics.`,
  },
  {
    'Monty Norman': `(4 April 1928 – 11 July 2022) was a British composer, musician and singer. A contributor to West End musicals in the 1950s and 1960s, he is best known for composing the "James Bond Theme", first heard in the 1962 film Dr. No.)`,
  },
  {
    'Премия Юхана Шютте ': `международная научная премия, вручаемая учёному, внесшему значительный вклад в развитие политической науки. «Нобелевская премия по политологии»`,
  },
  {
    'Вуду́ ': `ритуальное омовение в исламе, являющееся обязательным условием для совершения намаза, тавафа, прикосновения к Корану и желательным при выполнении других видов поклонения. `,
  },
  {
    'Reynolds number': `a dimensionless quantity that helps predict fluid flow patterns in different situations by measuring the ratio between inertial and viscous forces. At low Reynolds numbers, flows tend to be dominated by laminar (sheet-like) flow, while at high Reynolds numbers, flows tend to be turbulent`,
  },
  {
    'Генри Таннер ': `(1859, Питтсбург — 1937, Париж) — американский художник-реалист. Первый из художников негритянского происхождения, добившийся международного признания (Урок игры на банджо (1893))`,
  },
  {
    'По реке в день поминовения усопших ': `живописная панорама, созданная в XII веке при дворе династии Сун, очевидно, художником по имени Чжан Цзэдуань. На свитке запечатлена повседневная жизнь обитателей императорской столицы, Кайфына, в день празднования Цинмина `,
  },
  {
    'Крупный план ': `Based on a real incident, Abbas Kiarostami’s masterly film first appears to present itself as a purely documentary reconstruction of events leading to the trial of the impoverished Hossein Sabzian for attempted fraud. After meeting an elderly woman on a bus and passing himself off as Mohsen Makhmalbaf (Iranian director of The Cyclist [1987] and Kandahar [2001]), Sabzian is invited to meet her family, and leads them to believe that, if they finance him, they’ll appear in his next film. Eventually, they suspect he’s an impostor planning to burgle their home, and call the police.`,
  },
  {
    'ONCE UPON A TIME IN CHINA ': `Tsui Hark was Hong Kong’s reigning filmmaker in the 1980s and early 1990s, deftly infusing his eye-popping action films with witty political commentary. This film finds him breathing new life into the chronicles of Chinese folk hero Wong Fei-Hung. `,
  },
  {
    'RAISE THE RED LANTERN ': `Completing a loose trilogy that began with Red Sorghum (1987) and Ju Dou (1990), Yimou Zhang’s grim adaptation of a novel by Su Tong once again stars Li Gong as a young woman who marries a much older man. Again he tells a story that explicitly critiques Chinese feudalism and indirectly contemporary China. This time, however, the style is quite different (despite another key use of the color red) and the vision much bleaker. `,
  },
  {
    'FAREWELL MY CONCUBINE ': `First of the “Fifth Generation” of Chinese filmmakers to emerge onto the world scene from the Beijing Film Academy since it reopened its doors in 1978, Kaige Chen bravely invoked his own bitter memories of the Cultural Revolution. The film is an exquisite, fascinating drama of the fifty-year relationship between two male Beijing Opera singers that spans China’s turbulent twentieth century through convulsive collective and personal betrayals.`,
  },
  {
    Bonking: `a term among racing cyclists that refers to a complete loss of energy that occurs for failing to eat or drink enough during a race and thereby replace nutrients and fluids. It occurs because of depletion of glycogen storage in the body. It is greatly feared among cyclists because the energy loss is so complete that they will often fall far off the pace of the lead riders.`,
  },
  {
    'Фабиан Канчеллара': `He was world champion in the time trial in 2006, 2007, 2009, and 2010 and won the Olympic gold medal in the event in 2008, adding a silver medal in the road race at the Beijing Olympics.`,
  },
  {
    'Alberto Contador ': `a Spanish professional who is one of five riders ever to have won all three of the grand tours—the Tour de France, the Giro d’Italia, and the Vuelta a España.`,
  },
  {
    'domestique ': `A support rider whose job is to ride for the leaders of their teams. He will often be required to ride in front of the team leader, breaking the wind resistance for him, or go back to team cars and get drinks and food for the main riders on the team. `,
  },
  {
    'Chris Hoy ': `He led the very successful British cycling team at the 2008 Beijing Olympics, with three gold medals. After anchoring the British team sprint squad to the title, Hoy dominated the match sprint and keirin competitions to win three gold medals, the best track cycling performance at a single Olympics by a man since Marcus Hurley in 1904.`,
  },
  {
    'MONUMENT RACES': `Milano–Sanremo, Paris–Roubaix , Liège–Bastogne–Liège, Ronde van Vlaanderen, and the Giro di Lombardia, and they are considered the most prestigious of the single-day races on the professional calendar. `,
  },
  {
    'RED JERSEY': `is given to the leader of the general classification after every stage and eventual winner of the Vuelta a España, similar to the yellow jersey (maillot jaune) in the Tour de France and the pink jersey in the Giro d’Italia`,
  },
  {
    'PINK JERSEY': `is given to the leader of the general classification after every stage and the eventual winner of the Giro d’Italia, similar to the yellow jersey (maillot jaune) in the Tour de France. `,
  },
  {
    'Бумажная луна ': `Режиссер: Питер Богданович. Восхитительная комедия о похождениях авантюриста-продавца библий Мозеса Прея и маленькой девочки Эдди на среднем Западе Америки в годы Великой депрессии. 9-летняя Татум О’Нил, дочь Райана О’Нила, стала самой юной обладательницей «Оскара» в истории (Ширли Темпл в 6 лет получила специальный, а не регулярный приз) и заработала за свою роль $ 350 000.`,
  },
  {
    'Вечер в опере ': `В свою обычную голую эксцентрику безумно смешные братья Маркс ввели мягкую любовную интригу, от которой, впрочем, стало еще смешнее. Пройдоха-управляющий (усатый Граучо с сигарой в зубах) уговорил богатую вдову, делами которой и управлял, вложить деньги в Нью-Йоркскую оперу. Та согласилась, ибо всегда мечтала попасть в высший свет, а пройдоха заключил контракт не на I 1000, как обещал, а на $ 10, и не с прославленным тенором, а с участником хора из той же оперы. Хорист поет за 10 долларов, как за 1000.`,
  },
  {
    'Во имя отца ': `Режиссер: Джим Шеридан. Основан на мемуарах бывшего заключенного Джерри Койл она, ирландца из Белфаста, осужденного английским судом на 30 лет вместе со своим отцом за взрыв в кафе в центре Лондона в 1974 году. На самом деле Конлон ничего не взрывал, так как грабил в это время бордель в сквере неподалеку. Тем не менее он отсидел 15 лет, а остальные 15 спасла для него энергичная, настойчивая адвокатесса Гарет Пирс.`,
  },
  {
    'Воскрешая мертвецов ': `Режиссер Скорсезе словно вернулся к своему «Таксисту» 23-летней давности. Только теперь на безумный ночной Нью-Йорк начала 90-х смотрят слипающиеся глаза врача «скорой помощи» Фрэнка Пирса. Отчаянные попытки спасти несчастные тела и души приводят к галлюцинациям: Фрэнка преследуют призраки людей, которым он не смог или не успел помочь. Игра на грани нервного срыва Николаса Кейджа. `,
  },
  {
    'Враг общества (The Public Enemy) ': `Эталон для грядущих гангстерских фильмов, включая «Крестного отца». Начало бурной мафиозной жизни на экране Джеймса Кэгни в роли ирландца Тома, который осуществляет свою американскую мечту с кольтом в руке и яростью во взгляде.`,
  },
  {
    'Враг у ворот ': `Режиссер: Жан-Жак Анно. Голливудский фильм французского режиссера с чисто русским названием о Сталинградской битве. Захватывающий поединок русского снайпера Зайцева (Ло) и немецкого снайпера-аса (Харрис) в разрушенном Сталинграде осенью 1942-го и зимой 1943-го. `,
  },
  {
    'Всплеск (Splash) ': `Светлая история о том, как Аллен Бауер, нескладный молодой человек из Нью-Йорка, влюбляется во время каникул в красавицу-русалку. Это был первый из диснеевских фильмов, где появилась обнаженная грудь (сама Дэрил Ханна очень смущалась при съемках), и по этому поводу были даже протесты и попытки спрятать хотя бы соски русалки. Играл Том Хэнкс`,
  },
  {
    'Генерал ': `Лучший фильм Бастера Китона с уникальными трюками. Один из них – крушение поезда на мосту – считается самым сложным и дорогостоящим в истории немого кино. Чудесные приключения (основанные на реальных событиях) времен Гражданской войны поезда ..., который крадут северяне, переодетые в южан, и за которым устремляются в погоню ополченцы во главе с лихим машинистом Джонни Греем (Китон). `,
  },
  {
    'Геркулес в Нью-Йорке': `Дебют 23-летнего Арнольда Шварценеггера, за два года до этого переехавшего в Америку и получившего титул «Мистер Олимпиа» – высший титул в международной федерации бодибилдинга. Красачик Шварц под псевдонимом Стронг носится за гангстерами на геркулесовой колеснице по Нью-Йорку, дает сеанс греко-римской борьбы свешавшему из зоопарка гризли, мчится со своим дружком Кренделем на гору Олимп, водруженную в центральном парке, куда доносится вой полицейских машин с Манхэттена. `,
  },
  {
    'Michel Faber ': `He revisited the Victorian domestic novel to fashion The Crimson Petal and the White, an escapist fiction set in London’s Gothic underworld in 1874 and 1875. `,
  },
  {
    'Год опасной жизни ': `Режиссер: Питер Уир. Это как раз тот единственный случай в истории, когда женщина за исполнение мужской роли получила «Оскар». Речь идет о 37-летней американке Линде Хант, сыгравшей в этом фильме индонезийского фоторепортера Билли Квана. Он работает помощником в корпункте у австралийского журналиста Гая Гамильтона, который стал свидетелем падения режима Сукарно в Индонезии в 1965 году и до побега из страны успел передать публицистический репортаж.`,
  },
  {
    'dybbuk ': `a displaced soul that expiates former sins by wandering until it can locate a living body in which to dwell. The term derives from the Yiddish word for “cling” or “attach.” `,
  },
  {
    'Эвердюпойс ': `[Old French goods sold by weight]a series of units of weight based on a pound of 16 ounces:`,
  },
  {
    'Баррэ ': `a method of playing a chord on a guitar or other stringed instrument with the forefinger laid across all the strings.`,
  },
  {
    'biriyani ': `in Indian cuisine, a dish of spiced meat or vegetables, served with rice.`,
  },
  { Бланманже: `a gelatinous milk-based dessert dish.` },
  { 'bodega ': `` },
  { 'bouzouki ': `a Greek musical stringed instrument with a long neck.` },
  {
    'bricolage ': `a construction made with whatever is conveniently at hand.`,
  },
  {
    'cartouche ': `in Egyptian hieroglyphics, an oblong outline enclosing the name of a pharoah of ancient Egypt and by extension an ornamental frame, usually in the shape of a scroll;`,
  },
  {
    'Чапарель ': `an impenetrable thicket of dwarf evergreen oaks or other shrubs and trees`,
  },
  {
    'chinook ': `warm, moist wind that blows from the ocean onto the northwest coast of the United States; also a warm, dry wind that blows down the eastern side of the Rocky Mountains.`,
  },
  {
    'Pablo de Sarasate': `was a Spanish (Navarrese) violin virtuoso, composer and conductor of the Romantic period. His best known works include Zigeunerweisen (Gypsy Airs), the Spanish Dances, and the Carmen Fantasy.`,
  },
  {
    'Luciano Berio ': `(24 October 1925 – 27 May 2003) was an Italian composer noted for his experimental work (in particular his 1968 composition Sinfonia and his series of virtuosic solo pieces titled Sequenza), and for his pioneering work in electronic music. His early work was influenced by Igor Stravinsky and experiments with serial and electronic techniques, while his later works explore indeterminacy and the use of spoken texts as the basic material for composition.`,
  },
  {
    'Анацуи ': `(born 1944) is a Ghanaian sculptor active for much of his career in Nigeria. He has drawn particular international attention for his "bottle-top installations". These installations consist of thousands of aluminum pieces sourced from alcohol recycling stations and sewn together with copper wire, which are then transformed into metallic cloth-like wall sculptures. `,
  },
  {
    'Arne Jacobsen': `(11 February 1902 – 24 March 1971) was a Danish architect and furniture designer. He is remembered for his contribution to architectural functionalism and for the worldwide success he enjoyed with simple well-designed chairs.`,
  },
  {
    'Allan Kaprow ': `(August 23, 1927 – April 5, 2006) was an American painter, assemblagist and a pioneer in establishing the concepts of performance art. He helped to develop the "Environment" and "Happening" in the late 1950s and 1960s, as well as their theory. His Happenings — some 200 of them — evolved over the years.`,
  },

  {
    'Copacabana ': `New York City nightclub that has existed in several locations. The nightclub was used as a setting in the films Goodfellas, Raging Bull, Tootsie, The Purple Rose of Cairo, Carlito's Way, The French Connection, Martin and Lewis, Green Book, Beyond the Sea, The Irishman, and One Night in Miami. `,
  },
  {
    Туо́льсленг: `музей в городе Пномпень (столица Камбоджи), основанный в 1980 году на территории бывшей школы Туоль Свай Прей, которая в период с 1975 по 1979 гг. использовалась Красными Кхмерами как печально известная «Тюрьма безопасности 21» `,
  },
  {
    'Парад роз (англ. Rose Parade)': `крупнейший из парадов, проводимых в штате Калифорния. Парад организует некоммерческая организация «Пасадинская ассоциация турниров роз», он проходит ежегодно утром 1 января на бульваре Колорадо калифорнийского города Пасадины.
  В параде принимают участие цветочные передвижные платформы, марширующие оркестры и конные ансамбли. `,
  },
  {
    'Катастрофа G.212 в Суперга': `авиационная катастрофа, произошедшая в среду 4 мая 1949 года под Турином, в результате которой погибла команда футбольного клуба «Торино» в полном составе.`,
  },
  {
    'Авиакатастрофа в Мюнхене 6 февраля 1958 года ': `На борту самолета находились игроки английского футбольного клуба «Манчестер Юнайтед», а также несколько тренеров, болельщиков и журналистов. Из находившихся на его борту 44 человек погибли 23, ещё 19 получили ранения. Раненые были доставлены в мюнхенский госпиталь.`,
  },
  {
    'Столкнове́ние над Днепродзержи́нском ': `крупная авиационная катастрофа, произошедшая 11 августа 1979 года и ставшая одной из крупнейших в истории авиации. В небе на высоте 8400 метров столкнулись два авиалайнера Ту-134А авиакомпании «Аэрофлот». Погибли все находившиеся на обоих самолётах 178 человек; 17 человек на борту рейса 7880 являлись членами футбольной команды «Пахтакор», из-за чего катастрофа получила особый резонанс.`,
  },
  {
    'Эйзельская трагедия ': `произошла 29 мая 1985 года в Брюсселе, Бельгия, перед началом финала Кубка европейских чемпионов между итальянским «Ювентусом» и английским «Ливерпулем». В результате обрушения стены одной из трибун погибло 39 человек, преимущественно итальянцев, сотни человек получили ранения и травмы разной степени тяжести.`,
  },
  {
    'Модель ударного формирования Луны ': `распространённая гипотеза формирования Луны. Согласно этой модели, Луна возникла в результате столкновения молодой Земли и объекта, по размерам сходного с Марсом. Этот гипотетический объект иногда называют Тейя в честь одной из сестёр-титанид, матери Гелиоса, Эос и Селены (луны).`,
  },
  {
    'Сымен ': `горный хребет в северной части Эфиопского нагорья к северо-востоку от Гондэра.
  Название местности на амхарском языке означает «север».
  Высшая точка — гора Рас-Дашен вулканического происхождения. Её высота над уровнем моря по разным источникам оценивается от 4533 м до 4620 м`,
  },
  {
    'Випала ': `квадратная эмблема, используемая в качестве флага некоторых народов проживающих в Андах (Перу, Боливия, Чили, Эквадор, северо-запад Аргентины и юг Колумбии). Состоит из квадратов 7 × 7 из семи цветов, расположенных по диагонали.
  `,
  },
  {
    'Земля Александра I ': `крупнейший остров Антарктики, площадью 43 250 км². `,
  },
  {
    'Пейо ': `франкоязычный бельгийский художник, создатель комиксов о Смурфиках.`,
  },
  {
    'Джон Роме́ро ': `программист и дизайнер компьютерных игр. Долгое время работал в компании id Software и является одним из её основателей. Один из популяризаторов жанра шутера от первого лица, участвовал в разработке таких игр, как Wolfenstein 3D, Doom, Doom II и Quake.`,
  },
  {
    'Бехистунская надпись ': `трёхъязычный (древнеперсидский, эламский и аккадский) клинописный текст на скале "",  в Иране, высеченный по приказу царя Дария I о событиях 523—521 гг. до н. э. Самая важная по значению из надписей ахеменидских царей и один из крупнейших эпиграфических памятников древности. Прочтён (в основном) в 30—40-х гг. XIX века английским учёным Генри Роулинсоном, что положило начало дешифровке клинописного письма многих народов древнего Востока.`,
  },
  {
    'Джордж Смит ': `британский ассириолог. Открыл и перевёл на английский язык «Эпос о Гильгамеше» — древнейшее из известных литературных произведений. Также дешифровал кипрское письмо.`,
  },
  {
    'Майкл Вентрис': `английский архитектор. Более известен как лингвист-самоучка, дешифровавший (совместно с Дж. Чедвиком) наиболее позднюю форму критского письма — Линейное письмо Б.`,
  },
  {
    'Ронго-ронго': `деревянные дощечки с письменами жителей острова Пасхи. В настоящее время не ясно, представляют ли каждый символ отдельное слово или слог. На сегодня в музеях мира сохранилось всего около 25 «дощечек». `,
  },
  {
    'Нко ': `система консонантно-вокалического письма и шрифт, разработанные в 1949 году гвинейским писателем Соломаном Канте для языков манде в Западной Африке, а также название литературного языка, использующего это письмо. `,
  },
  {
    'Граба́р ': `классический армянский язык, или древнеармянский язык — наиболее древняя из сохранившихся в письменных источниках форма армянского языка. В качестве богослужебного языка он используется по сей день как в Армянской апостольской церкви, так и в Армянской католической церкви.`,
  },
  {
    'Малая́лам ': `дравидийский язык, распространённый на юго-западе Индии. Говорят свыше 35 миллионов человек — прежде всего, в индийском штате Керала. Язык используется в качестве богослужебного языка различными христианскими конфессиями и общинами Индии.`,
  },
  {
    'razor and blades business model': `business model in which one item is sold at a low price (or given away for free) in order to increase sales of a complementary good, such as consumable supplies. `,
  },
  {
    'Freemium ': `бизнес-модель, которая заключается в предложении воспользоваться компьютерной игрой, программным продуктом, онлайн-сервисом или услугой бесплатно, в то время как расширенная (улучшенная, премиальная) версия продукта, его дополнительная функциональность, или сервисы, другие продукты, связанные с основным, предлагаются за дополнительную плату на основе популярности основного бесплатного продукта. `,
  },
  {
    'Презентация для лифта ': `короткий рассказ о концепции продукта, проекта или сервиса. Термин отражает ограниченность по времени — длина презентации должна быть такой, чтобы она могла быть полностью рассказана за время поездки на лифте, то есть одну-две минуты`,
  },
  {
    'Гана́ш ': `крем из шоколада и свежих сливок, используемый в качестве начинки для конфет и пирожных, а также для украшения десертов. Может быть ароматизирован пряностями, фруктами, кофе, алкоголем.`,
  },
  {
    '100 лет': `научно-фантастический фильм Роберта Родригеса, поставленный по сценарию Джона Малковича. Фильм рекламировался с лозунгом «Фильм, который вы никогда не увидите» (англ. The Movie You Will Never See) и должен быть выпущен 18 ноября 2115 года, что соответствует 100 годам, которые требуется пролежать бутылке коньяка Louis XIII прежде, чем она будет выпущена для потребителей. Главные роли в фильме играет международный ансамбль: американский актёр Джон Малкович, китайская актриса Шуя Чан и чилийский актёр Марко Сарор.`,
  },
  {
    'Библиотека будущего ': `общественный арт-проект шотландской художницы Кэти Патерсон, стартовавший в 2014 году и рассчитанный на 100 лет. Каждый год в течение века один из крупных современных писателей передаёт проекту свой новый роман. Собранные таким образом произведения будут опубликованы в 2114 году.`,
  },
  {
    'Океан, полный шаров для боулинга': `неопубликованный рассказ классика американской литературы Джерома Дэвида Сэлинджера.
  В произведении рассказывается о смерти Кеннета Колфилда, ставшего в более позднем романе «Над пропастью во ржи» Алли, умершим младшим братом главного героя — Холдена. Сэлинджер хотел опубликовать текст и продал его в 1948 году изданию «Woman's Home Companion». Издатель, однако, не стал публиковать произведение ни в этом журнале, ни в «Collier's», и Сэлинджер забрал его. Рассказ доступен только в библиотеке Принстонского университета. Те, кто хочет его прочитать, должны предъявить две формы удостоверения личности (например, водительские права и студенческое удостоверение) и читать рассказ в присутствии библиотекаря в специальном закрытом читальном зале. Он не будет опубликован вплоть до 27 января 2060 года — то есть до 50-летия со дня смерти Сэлинджера
  `,
  },
  {
    'Бык Фаларида ': `древнее орудие казни.
  Орудие убийства представляло собой полое медное изваяние быка, выполненное в натуральную величину, с дверцей на спине между лопаток (по другой версии — в боку). `,
  },
  {
    'Кровавый орёл': `легендарная казнь времён викингов, заключавшаяся в том, что по спине осуждённого били топором, чтобы рассечь рёбра; затем рёбра разводили в стороны наподобие крыльев птицы (отсюда название) и вытаскивали наружу лёгкие. Причиной скорой смерти в этом случае должен был стать травматический шок либо пневмоторакс.`,
  },
  {
    'Маронинг (англ. Marooning) ': `преднамеренное оставление кого-то в отдаленном районе, например, на необитаемом острове. Слово впервые появляется в письменной форме в начале XVIII в.[1] и является производным от термина марон, беглый раб, который, в свою очередь, может являться искажением исп. cimarrón, означающим домашнее животное (или раба), ставшего «диким».`,
  },
  {
    'Уше́бти ': `статуэтки, которые в Древнем Египте помещались в могилу, с тем чтобы они выполняли необходимые обязанности по отношению к умершему. Изготавливались из дерева, камня, терракоты или фаянса. `,
  },
  {
    Ухуру: `первая орбитальная рентгеновская обсерватория. Впервые спутниковая миссия была полностью посвящена изучению небесных источников рентгеновского излучения. Предыдущие эксперименты по исследованию рентгеновского излучения небесных источников проводились исключительно на суборбитальных ракетах, что значительно ограничивало полезное время работы их инструментов. The satellite's name is the Swahili word for "freedom". `,
  },
  {
    'The Fable of The Bees': `(1714) is a book by the Anglo-Dutch social philosopher Bernard Mandeville. Mandeville describes a bee community that thrives until the bees decide to live by honesty and virtue. As they abandon their desire for personal gain, the economy of their hive collapses, and they go on to live simple, "virtuous" lives in a hollow tree. Mandeville's implication—that private vices create social benefits—caused a scandal when public attention turned to the work, especially after its 1723 edition.

  `,
  },
  {
    Соуэ́то: `группа тауншипов/поселений на юго-западной окраине Йоханнесбурга. Во времена апартеида — место для принудительного проживания африканского населения. `,
  },
  {
    'Ви́лья мисериа': `общее название неформальных поселений и трущоб в Аргентине, характеризуемых высокой плотностью заселения и временностью жилищ. `,
  },
  {
    'Кинсеаньера ': `в странах Латинской Америки возраст совершеннолетия девочек, символизирующий переход от подросткового возраста к взрослой жизни. Празднуется в день пятнадцатилетия.`,
  },
  {
    'Бомби́лья ': `металлическая или деревянная трубочка с фильтром, через которую пьётся настой мате. `,
  },
  {
    'Тсантса ': `особым образом высушенная человеческая голова. Черты лица сохраняются, но размером она становится с кулак. Индейцы южноамериканских Анд, и прежде всего хиваро, считают ее главным трофеем`,
  },
  {
    'Nils Bohlin ': `(17 July 1920 – 26 September 2002) was a Swedish mechanical engineer and inventor who invented the three-point safety belt while working at Volvo.`,
  },
  {
    Enheduanna: `The earliest known author and a high priestess in ancient Sumeria. She composed 42 hymns and is considered the first known poet and author in the world, living around 2300 BCE`,
  },
  {
    'Lyudmila Pavlichenko': `A Soviet sniper during WWII, known as "Lady Death." She is credited with no less than 309 kills and became a symbol of Soviet resistance against Nazi forces. She was also known for her tour in the United States, where she advocated for the Soviet war effort`,
  },
  {
    'Cassius Marcellus Clay': `A 19th-century American politician and abolitionist from Kentucky. Despite being born into a slave-owning family, he freed his slaves and became a vocal opponent of slavery, known for surviving multiple assassination attempts due to his beliefs`,
  },
  {
    'Алис Ги-Блаше': `Recognized as the first female filmmaker and a pioneer in the early film industry. She directed her first film in 1896 and went on to direct over 1,000 films, playing a significant role in the evolution of film narrative and production`,
  },
  {
    'Vasili Arkhipov': `A Soviet Navy officer credited with preventing a Soviet nuclear strike during the Cuban Missile Crisis. As flotilla commander and second-in-command of the nuclear-armed submarine B-59, he refused to authorize the captain's use of nuclear torpedoes against US Navy ships.`,
  },
  {
    'Quantum Entanglement': `A phenomenon where two particles become linked, and the state of one instantly influences the other, regardless of the distance separating them.`,
  },
  {
    'Фермионный конденсат': `A state of matter similar to the Bose-Einstein condensate but formed using fermions instead of bosons. Шестое состояние вещества`,
  },
  {
    'magnetic monopole ': `hypothetical elementary particle that is an isolated magnet with only one magnetic pole (a north pole without a south pole or vice versa). It would have a net north or south "magnetic charge". Modern interest in the concept stems from particle theories, notably the grand unified and superstring theories, which predict their existence.`,
  },
  {
    'Casimir Effect ': `a fascinating and somewhat counterintuitive phenomenon in quantum physics. Here's a simple explanation: Imagine two very flat, uncharged metal plates placed very close to each other in a vacuum. According to classical physics, if there's no charge on these plates, there shouldn't be any force between them. However, the BLANK shows that these plates can attract each other. This attraction happens because of something called "quantum vacuum fluctuations." Even in a vacuum, where there are no particles, the energy of the vacuum isn't zero. Instead, it's filled with tiny, temporary particles that pop in and out of existence. These are quantum fluctuations.`,
  },
  {
    Catenation: `The ability of an element (like carbon) to form long chains with itself. Carbon's BLANK ability is the foundation of organic chemistry, leading to the vast diversity of organic compounds.`,
  },
  {
    'Чёрная легенда  ': `историографический феномен, при котором устойчивая тенденция в исторической литературе предвзятого освещения и введения сфабрикованных, преувеличенных и/или вырванных из контекста фактов направлена против конкретных лиц, наций или учреждений с намерением создать искажённый и однозначно бесчеловечный образ их, скрывая их положительный вклад в историю. `,
  },
  {
    'Огора́живания (англ. enclosure, inclosure) ': `насильственная ликвидация общинных земель и обычаев в Европе на раннем этапе развития капитализма. Данная практика приводила к обнищанию сельского населения и его выселению в города, обезлюдевшие сельскохозяйственные угодья отдавались под выпас скота. `,
  },
  {
    Physiocrats: `A group of 18th-century economists who believed that the wealth of nations was derived solely from the value of land agriculture or land development. They were one of the first to formulate theories of economics.`,
  },
  {
    'Wergild (на Руси – вира): ': `A value placed on every being and piece of property in the Salic Code. If property was stolen or someone was injured or killed, the guilty person would have to pay wergild as restitution to the victim's family or to the owner of the property.`,
  },
  {
    'Scutage (щитовые деньги) ': `medieval English tax levied on holders of a knight's fee under the feudal land tenure of knight-service. Under feudalism the king, through his vassals, provided land to knights for their support. The knights owed the king military service in return. The knights were allowed to "buy out" of the military service by paying it`,
  },
  {
    'Domesday Book': `Commissioned by William the Conqueror in 1086, this manuscript record was a survey of all the land in England, its value, and who owned it. It was used to determine taxes and represents one of the earliest attempts at a census.`,
  },
  {
    'Hell money (Адские деньги) ': `modernized form of joss paper printed to resemble legal tender bank notes. The notes are not an official form of recognized currency or legal tender as their sole intended purpose is to be offered as burnt offerings to the deceased as a solution to resolve their assumed monetary problems in the afterlife. This ritual has been practiced by modern Chinese and across East Asia since the late 19th century, and some Wicca-based faiths in recent years have adopted this practice`,
  },
  {
    'Liberum Veto': `A parliamentary device in the Polish-Lithuanian Commonwealth. It allowed any member of the Sejm to end the current session and nullify all legislation that had been passed by it simply by shouting "Nie pozwalam!" (I do not allow!).`,
  },
  {
    'Золота́я во́льность ': `одно из явлений политической системы Королевства Польского и позже, после Люблинской унии 1569 года, Речи Посполитой, известной как шляхетская демократия. В этой системе вся знать (шляхта) обладала равными и обширными правами и привилегиями. Шляхтичи заседали в законодательном органе — сейме и выбирали короля. `,
  },
  {
    'Ро́кош ': `официальное восстание против короля, на которое имела право шляхта во имя защиты своих прав и свобод. Изначально это съезд всей польской шляхты на сейм.`,
  },
  {
    Чинлон: `traditional, national sport of Myanmar (Burma). It is non-competitive, with typically six people playing together as one team. The ball used is normally made from hand-woven rattan, which sounds like a basket when hit. Similar to the game of hacky-sack, it is played by individuals passing the ball among each other within a circle without using their hands.`,
  },
  {
    'Katamari Damacy ': `В основе сюжета игры лежит данное маленькому принцу поручение отстроить заново случайно уничтоженные его отцом звёзды, созвездия и Луну. Эта цель достигается перекатыванием магического клейкого шара по различной местности, собирая всё бо́льшие и бо́льшие по размеру объекты, в пределах от чертёжных кнопок до школьников и гор — до тех пор, пока шар из объектов не станет достаточно большим, чтобы стать звездой. `,
  },
  {
    'Getting Over It with Bennett Foddy': `A notoriously difficult game where you control a man stuck in a cauldron and must use a sledgehammer to navigate a surreal landscape.`,
  },
  {
    'Quick Time Events (QTE) ': `элемент компьютерных игр. Обычно представляют собой сцены, во время которых игрок должен в определенный момент выполнить какие-либо действия с контроллером. Почти во всех ситуациях невыполнение отрицательно сказывается на происходящем (например, в «Dead Space», если игрок не успевал выполнять разнообразные "", то каждый провал приводил к смерти; в Heavy Rain провал в "" приводил к гибели ключевых персонажей). `,
  },
  {
    'Буллет-тайм ': `техника комбинированной съёмки, которая используется для создания на экране иллюзии «заморозки» времени, то есть движения съёмочной камеры и зрителя вокруг застывшего объекта, в реальности быстро двигающегося, например в момент прыжка или падения`,
  },
  {
    'Save-scumming ': `process where players will reload an earlier save they have made in the game to tackle a level differently, get a different story outcome, or undo a mistake they have made in a game. It is an extremely popular practice in RPGs like The Elder Scrolls V: Skyrim, Fallout, XCOM, and Fire Emblem.`,
  },
  {
    'Ludonarrative dissonance ': `conflict between a video game's narrative told through the non-interactive elements and the narrative told through the gameplay. Brett Makedonski of Destructoid used the Mass Effect series as another example, in which the player-character Commander Shepard can perform actions that are seen as ethically good (Paragon) or bad (Renegade), but throughout the game, Shepard is still regarded as a hero regardless of how much of a Renegade status they may have obtained`,
  },
  {
    'The Utility Monster': `A thought experiment in the study of utilitarianism. It questions whether it would be just to sacrifice the happiness of many people for the sake of one individual who can derive immense utility from their resources or suffering.`,
  },
  {
    'A Defense of Abortion': `moral philosophy essay by Judith Jarvis Thomson. You wake up in the morning and find yourself back to back in bed with an unconscious violinist. A famous unconscious violinist. He has been found to have a fatal kidney ailment, and the Society of Music Lovers has canvassed all the available medical records and found that you alone have the right blood type to help. They have therefore kidnapped you, and last night the violinist's circulatory system was plugged into yours, so that your kidneys can be used to extract poisons from his blood as well as your own. [If he is unplugged from you now, he will die; but] in nine months he will have recovered from his ailment, and can safely be unplugged from you.`,
  },
  {
    Skíðblaðnir: `The best of all ships in Norse mythology, belonging to the god Freyr. Made by dwarves, it can be folded like a cloth when not in use.`,
  },
  {
    Gleipnir: `The magical binding that holds the mighty wolf Fenrir. It appears to be a mere silken ribbon but is made from six impossible ingredients and is incredibly strong.`,
  },
  {
    'Исто́чник Ми́мира ': `в скандинавской мифологии источник мудрости, охраняемый великаном Мимиром.`,
  },
  {
    'Андхримнир ': `в скандинавской мифологии повар в Валхалле. Он кормит эйнхериев: готовит для них мясо вепря Сехримнира в котле Эльдхримнире.`,
  },
  {
    'Wabi-Sabi ': `A Japanese aesthetic that finds beauty in imperfection and profundity in nature, accepting the natural cycle of growth and decay.`,
  },
  {
    Ikigai: `A Japanese concept meaning "a reason for being", referring to having a direction or purpose in life that makes one's life worthwhile.`,
  },
  {
    'Lagom ': `Swedish word meaning "just the right amount" or "not too much, not too little". The word can be variously translated as "in moderation", "in balance", "perfect-simple", "just enough", "ideal" and "suitable" (in matter of amounts).`,
  },
  {
    'Besa ': `Albanian cultural precept, usually translated as "faith" or "oath", that means "to keep the promise" and "word of honor".`,
  },
  {
    'Сила́т ': `обобщающее название для боевых искусств Малайского архипелага и полуострова Малакка в Юго-Восточной Азии. `,
  },
  {
    'Фаюмские портреты ': `созданные в технике энкаустики погребальные портреты в Римском Египте I—III веков. Своё название получили по месту первой крупной находки в "" оазисе в 1887 году британской экспедицией во главе с Флиндерсом Питри.`,
  },
  {
    'Джамский минарет ': `уникальный хорошо сохранившийся минарет XII века на северо-западе Афганистана. Высота — 65 метров. Второй по высоте исторический минарет из обожжённого кирпича в мире после Кутб-Минара в Дели. `,
  },
  {
    'Дельта Окаванго': `самая большая внутренняя дельта планеты, не имеющая при этом стока в мировой океан. Находится на территории Ботсваны. Дельта заболочена, мелководна, главный источник воды в этом регионе, примыкающем к пустыне Калахари — это река "", стекающая с возвышенностей Анголы.`,
  },
  {
    'О́пыт Ма́йкельсона — Мо́рли ': `экспериментальная попытка обнаружить существование светоносного эфира, гипотетической среды, заполняющей пространство, которая считалась носителем световых волн.`,
  },
  {
    'Джоселин Белл Бернелл ': `британский астрофизик. Первооткрывательница нового класса астрономических объектов — пульсаров.`,
  },
  {
    'Сигнал «Wow!», в русских публикациях — «сигнал „Ого-го!“»': `сильный узкополосный радиосигнал, зарегистрированный доктором Джерри Эйманом 15 августа 1977 года во время работы на радиотелескопе «Большое ухо» в Университете штата Огайо. Прослушивание радиосигналов проводилось в рамках проекта SETI.`,
  },
  {
    'Заряд-демон (англ. Demon core) ': `название, данное подкритичному объёму плутония массой 6,2 кг, который участвовал в двух несчастных случаях в лаборатории Лос-Аламоса в 1945 и 1946 годах. В обоих случаях радиоактивное облучение в результате незапланированного перехода в надкритическое состояние приводило к гибели учёных, после чего сборка и получила своё название. Конструкция состояла из двух половин шаров плутония в дельта-фазе, покрытых слоем никеля, общей массой 6,2 кг`,
  },
  {
    'Клерксдо́рпские шары́ (англ. Klerksdorp sphere) ': `сферические либо дискообразные объекты размером в несколько сантиметров с продольными углублениями и бороздами наподобие насечек, часто уплощённые и иногда сросшиеся друг с другом, которые находят в отложениях пирофиллита в Северо-Западной провинции ЮАР. Они были собраны шахтёрами в пирофиллите на месторождении, где этот минерал добывается. Возраст отложений составляет приблизительно 3 миллиарда лет. В псевдоархеологической литературе эти шары принято преподносить как «неуместные артефакты» из сложных металлических сплавов, которые могли быть изготовлены лишь разумными существами. В действительности, как установлено геологами, эти находки, возраст которых исчисляется миллиардами лет, имеют естественное происхождение, и не состоят из металла`,
  },
  {
    'Polybius ': `якобы существующая игра для аркадных игровых автоматов, выпущенная в 1981 году и известная благодаря городской легенде, начало распространения которой прослеживается с 2000 года. Не существует авторитетных источников, доказывавших бы факт существования оригинальной версии игры, однако легенда стала источником вдохновения для создания нескольких бесплатных и коммерческих электронных игр с таким же названием. Городская легенда гласит, что игра являлась частью проводившегося американским правительством краудсорсингового психологического эксперимента, а её игровой процесс вызывал у игроков сильные психоактивные эффекты и игровую зависимость. Несколько размещённых в общедоступных игровых залах автоматов якобы посещались «людьми в чёрном» с целью сбора данных и анализа этих эффектов. `,
  },
  {
    'Плитки Тойнби ': `сообщения неизвестного происхождения, появлявшиеся на асфальтированных дорогах приблизительно двадцати четырёх североамериканских и четырёх южноамериканских городов. В период с 1980-х годов было обнаружено несколько сотен таких сообщений.`,
  },
  {
    'Dymaxion ': `«динамика, максимум, натяжение») — трёхколёсный автомобиль, спроектированный американским архитектором Ричардом Фуллером в 1933 году. Это торговая марка и имя, данное Фуллером нескольким своим изобретениям, чтобы подчеркнуть, что они — часть общего проекта по улучшению условий жизни.`,
  },
  {
    'Танцевальная чума 1518 года': `вспышка танцевальной мании, произошедшая в Страсбурге в июле 1518 года. Около 400 человек без отдыха танцевали на улицах города несколько дней подряд. За это время многие из них скончались от сердечных приступов, инсультов или физического истощения.`,
  },
  {
    'Война с эму': `операция по истреблению эму, осуществлённая в ноябре-декабре 1932 года вооружёнными силами Австралии. Причиной операции стали массовые жалобы фермеров по поводу колоссального числа эму, атаковавших посевы пшеницы в округе Кэмпион, Западная Австралия.`,
  },
  {
    'Roberto Durán': `(born June 16, 1951) is a Panamanian Mexican former professional boxer who competed from 1968 to 2001. He held world championships in four weight classes: Lightweight, welterweight, light middleweight and middleweight. He also reigned as the undisputed and lineal lightweight champion and the lineal welterweight champion. He is also the second boxer to have competed over a span of five decades, the first being Jack Johnson`,
  },
  {
    Седиль: `Used in languages like French and Portuguese, it appears as a comma-like mark under the letter "ç" to indicate a soft "c" sound, as in "garçon."`,
  },

  {
    'Ogonek ': `Used in Polish and Lithuanian, it appears under consonants (e.g., "ą" or "ę") to indicate nasalization.`,
  },
  {
    'Macron ': `Found in Latin and some other languages, it appears over vowels (e.g., "ā") to indicate a long vowel sound.`,
  },
  {
    'háček ': `diacritical mark used in several languages to modify the pronunciation of certain letters. It looks like a small "v" or a checkmark (^) and is placed above various consonants or vowels.`,
  },
  {
    'Santorio Santorio ': `(1561-1636): An Italian physician, often credited with inventing several medical devices including the clinical thermometer.`,
  },
  {
    'Гео́рг Ре́тик ': `немецкий математик и астроном. Единственный ученик Николая Коперника, оказавший содействие в публикации его главного труда, и пропагандист его наследия.`,
  },
  {
    Валькнут: `An old Norse symbol consisting of three interlocking triangles. It is often associated with the god Odin and represents the afterlife.`,
  },
  {
    'Joseph Merrick ': `(1862-1890): Known as "The Elephant Man" due to severe deformities caused by what is now believed to be Proteus syndrome.`,
  },
  {
    'Вишеградская группа': `объединение четырёх центральноевропейских государств: Польши, Чехии, Словакии и Венгрии`,
  },
  {
    'Pacific Pumas ': `political and economic grouping of countries along Latin America’s Pacific coast that includes Chile, Colombia, Mexico and Peru. The term references the four larger Pacific Latin American emerging markets that share common trends of positive growth, stable macroeconomic foundations, improved governance and an openness to global integration.`,
  },
  {
    'Росинья ': `самая известная из фавел Рио-де-Жанейро. Расположена на крутых склонах в южной части города между районами Сан-Конраду и Гавеа. Её население официально составляет 69161 человек. Это крупнейшая фавела страны. Реальная численность её населения может превышать 200 тысяч человек`,
  },
  {
    'Зено́бия ': `(240 — после 274) — царица Пальмиры. Объявила о независимости от Рима, однако вскоре её войска были разбиты, а сама она пленена.`,
  },
  {
    Tomyris: `is known only from the Greek historian Herodotus. According to him, she reigned over the Massagetae, an Iranian Saka people of Central Asia. She led her armies to defend against an attack by Cyrus the Great of the Achaemenid Empire, and defeated and killed him in 530 BC. She had his severed head placed in a bag or bowl filled with blood, saying to it "There: drink your fill of blood!"`,
  },
  {
    Малинче: `переводчица, осведомительница и наложница Эрнана Кортеса, сыгравшая важную роль в завоевании Мексики испанцами.`,
  },

  {
    INSHALLAH: `Meaning “if God wills”, what Arabic word is used in Islam when discussing future events, reflecting the belief that nothing will happen unless Allah permits it to happen? `,
  },
  { 'El Al Israel Airlines': `Which airline is the flag carrier of Israel? ` },
  {
    Breslau: `Silesia, now a part of Poland, was once part of Germany. The capital of Silesia, called Wroclaw in Polish, is perhaps still best known outside of Poland by which German name? `,
  },
  {
    Pressburg: `Bratislava, the capital of Slovakia, has many former names (we'll get to more later). What is the former German name of Bratislava? Today you most commonly see this name used to refer to the 1805 treaty that abolished the Holy Roman Empire. `,
  },
  {
    Sakartvelo: `In Georgian, what do they call the former Soviet Republic of Georgia?`,
  },
  {
    Bodensee: `The large lake between Germany, Austria, and Switzerland known in English as "Lake Constance" is known by which name in German? `,
  },
  {
    'Struve Geodetic Arc': `Estonia has two Unesco World Heritage sites. The historic old town of Tallinn is well known for its wonderfully preserved medieval architecture; more obscure is this one, which Estonia shares with Belarus, Finland, Latvia, Lithuania, Norway, Moldova, Russia, Sweden and Ukraine. It is a chain of survey triangulations stretching from Hammerfest in Norway to the Black Sea, which yielded the first accurate measurement of a meridian. What is its name?              `,
  },
  {
    Riverdance: `Occasionally the interval acts at Eurovision overshadow the contestants. This was certainly the case for what act, which originated as the interval act for Eurovision 1994 in Dublin? The original star and choreographer was Michael Flatley. `,
  },
  {
    'Katinka Hosszu': `Last week this woman won her 19th medal in an individual event in the European championships, setting a new record as László Cseh won 18 individual medals. Who is this legend, and I can tell you she's also Hungarian? `,
  },
  {
    'Bernard Bolzano': `Although likely more famous for his work in another field, what 19th-century logician from Prague anticipated some of Quine’s arguments about logical analyticity and truth in his magnum opus Wissenschaftslehre (Theory of Science)? He also wrote Paradoxes of the Infinite. `,
  },
  {
    'Фолькванг ': `The paradise afterlife in Greek mythology, and the location ruled over by Freyja which half of those who die in battle go to after death. `,
  },
  {
    'Fingal`s Cave': `This is a sea cave on the uninhabited island of Staffa, in the Inner Hebrides of Scotland, known for its natural acoustics. The National Trust for Scotland owns the cave as part of a national nature reserve. It became known as like this after the eponymous hero of an epic poem by 18th-century Scots poet-historian James Macpherson. What is the name of this cave?              `,
  },
  {
    'Нураги ': `Scattered throughout Sardinia are thousands of round forts dating back to 1500 B.C., although this is probably a quarter of the number ever built. The structures were renovated in Roman times, but little else is known about them. The largest of these forts is undoubtedly the one at Barumini, which is three stories high. But what is the collective name for these forts?              `,
  },
  {
    'Botany Bay': `James Cook originally gave what body of water the name Stingray Harbor, but changed its name after observing the number of plants found in it? `,
  },
  {
    'Bad Blood': `What bestselling 2018 book by John Carreyrou chronicles the rise and fall of the startup Theranos and its founder, Elizabeth Holmes? `,
  },
  {
    'Гелады ': `With a name deriving from Amharic, what large baboonlike primate, found only in the Ethiopian Highlands, is often considered the world's only grass-eating monkey? `,
  },
  {
    'Франц Зюсмайер ': `Which Austrian composer (1766-1803) and student of Mozart completed the unfinished Requiem in D minor after Mozart's death, at the request of Mozart's widow Constanze? `,
  },
  {
    Hackl: `Known affectionately as the "Speeding Weißwurst", because he looks like a white sausage when speeding down the track in his white bodysuit, which German former luger became (in 2002) the first Winter Olympian to win a medal in five consecutive Winter Olympics? A lesser known fact: he is also a nine-time wok racing world champion. Yes indeed, speeding down a track in a bowl-shaped cooking pan.              `,
  },
  {
    'Lake Kivu': `Referred to as an "exploding lake" and considered one of the most dangerous in the world, which lake on the border between DR Congo and Rwanda contains about 300 cubic kilometres of CO2 and 60 cubic kilometres of methane? A disruption to the lake could cause a gas burst, with potentially deadly consequences for the roughly 2 million people who live along its shores.              `,
  },
  {
    Isogloss: `What Greek-derived eight-letter term denotes the geographic boundary of a certain linguistic feature, such as the pronunciation of a vowel or the meaning of a word? In layman's terms, it is a line on a map marking a boundary between areas where language features are different. Again, an eight-letter answer please. `,
  },
  {
    'Соловьиные полы ': `floors that make a chirping sound when walked upon. These floors were used in the hallways of some temples and palaces, the most famous example being Nijō Castle, in Kyoto, Japan.`,
  },
  {
    'Jean Genet': `"The Maids", which premiered in 1947, was written by which French playwright, who spent much of the 1930s and 1940s in and out of prison, from where he wrote some of his most famous works? `,
  },
  { 'LOT Polish Airlines': `Which airline is the flag carrier of Poland? ` },
  {
    Bolivia: `Holding a significant percentage of the world’s lithium, Salar de Uyuni, the largest salt flats on the planet, is located in which South American country? `,
  },
  {
    'The Suburbs': `One of Billboard’s biggest music moments of the 2010s, which 2010 album by Arcade Fire was the first from an indie act to win the Grammy for Best Album? Before this, the band hadn’t even notched a hit on the Billboard Hot 100. `,
  },
  {
    'Radio LUXEMBOURG': `The game shows Take Your Pick and Double Your Money were both originally broadcast on which commercial radio station, an important forerunner of pirate radio, named after the European country in which it was based? `,
  },
  {
    'Год бедствий ': `By what Dutch word is the year 1672 known in the Netherlands? It saw the outbreak of the Franco-Dutch War, the Third Anglo-Dutch War and the murder of the Grand Pensionary Johan de Witt [yo-han de vitt]? `,
  },
  {
    INDONESIA: `The Berkeley [BERK-lee] Mafia was a group of economists who had studied in California and were influential in which southeast Asian country during the Sukarno regime? They began their studies in the United States after Dutch academics left this country in the 1950s. `,
  },
  {
    'BERNARD of Clairvaux': `Peter Abelard’s excommunication was the result of his bitter rivalry with which abbot of Clairvaux [clare-vo], now regarded as a saint and Doctor of the Church? This man is known for his sermon in favour of the Second Crusade as well as founding the Cistercian Order and the Knights Templar. `,
  },
  {
    'Reed HASTINGS': `Which American businessman is the executive chairman of Netflix? He founded the company in 1997 along with Marc Randolph. `,
  },
  {
    'SCP Foundation': `What 15-year-old online collaborative writing project is based on a fictional organisation that catalogues and contains mysterious "anomalies"? Its first entry concerned a statue that killed people if no one was looking at it.`,
  },
  {
    'LENCA ': `Lempira, a national hero of Honduras and namesake of its currency, was a warrior of what Central American Indigenous group whose name means "people of the jaguar"? `,
  },
  {
    AQUAFABA: `A common vegan substitute for eggs, what ingredient is the starchy liquid in which legumes, often chickpeas, have been cooked? It was popularised in the mid-2010s. `,
  },
  {
    'Julie DUCOURNAU': `Which French film-maker won the 2021 Palme d’Or at Cannes for her body-horror film Titane [tee-tan], concerning a serial killer, Alexia, with a metal plate in her head after a childhood accident? `,
  },
  {
    'The SECRET DIARY OF A CALL GIRL  ': `Based on the memoirs of Brooke Magnanti, also known as Belle de Jour, Lucy Prebble created which television series in 2007, starring Billie Piper as Hannah Baxter, who moonlights as a high-end escort?`,
  },
  {
    SENCHA: `With a name meaning “infused tea”, what name is given to Japanese green tea where the whole leaves are infused in hot water, unlike matcha, which is powdered? Gyokuro is a variety of this tea that is grown in the shade rather than full sun. `,
  },
  {
    'Justine TRIET ': `Only the third woman to win a Palme D’Or after Jane Campion and Julie Ducournau [doo-coor-no], which director won this award in 2023 for the courtroom thriller Anatomy of a Fall? Her film Sibyl was also nominated for the 2019 Palme D’Or.`,
  },
  {
    TENNIS: `If you were lucky enough to witness Billie Jean King beat Bobby Briggs at the "Battle of the Sexes," what sport would you have been watching? `,
  },
  {
    'UPTOWN FUNK': `Which single by Mark Ronson and Bruno Mars is the most recently-released song to achieve one million paid-for sales in the UK? In the song, which first charted in November 2014, Mars brags “I'm too hot (hot damn), call the police and the fireman” and repeats “Don’t believe me just watch”. `,
  },
  {
    'The College Dropout': `What debut studio album by Kanye West is known for diverging from the “gangster persona” in rap and instead popularised the ‘chipmunk soul’ musical style? Major songs on the album include “All Falls Down” and “Slow Jamz”. `,
  },
  {
    'Elvis Stojko': `This Canadian figure skater was the first to land both a quad-double combination, and a quad-triple combination. The quad-double was landed at the 1991 World Championships and the quad-triple at the 1997 Grand Prix Final. He is a two time Olympic Silver Medalist, (Lillehammer and Nagano.) But who are we looking for? `,
  },
  {
    'Джек-прыгун ': `This bizarre alleged criminal from London was first sighted in 1837. This ambiguously human figure got his name from his alleged ability to jump really high. `,
  },
  {
    'Paul Rusesabagina': `In 1994, nearly 1 million Rwandans lost their lives in the Rwandan genocide. Many people in the West did not notice at the time, a story which is dutifully documented in the film Hotel Rwanda. This story follows a man as he navigates a difficult task sheltering a great number of Tutsis during the massacre. While it is a sombre story, the heroic character Paul shines through as he aims to keep his family and many others alive during the crisis. Who is this man, that came in the news recently?              `,
  },
  {
    'Mt. Augustus': `This spectacular solitary peak, known to the local Aboriginal people as Burringurrah, rises above a dry plain of shrubs. Around the rock are hiking trails and dirt roads leading to Aboriginal drawings. Which rock with a name that is equal to one of the months year, very similar to Uluru but with an 8km ridge twice as big, are we looking for?                          `,
  },
  {
    'John Knox': `This Scottish leader of the Reformation returned from Geneva in 1560 and supervised the drafting of the Scots Confession. This man came into conflict with Mary Queen of Scots and called for her execution, actions dramatized in the 2018 movie Mary, Queen of Scots where he was played by David Tennant. `,
  },
  {
    'Selkie (Шелки) ': `These creatures can transform between human and seal forms by shedding their skin. In one tale, one of these creatures marries a human man who takes her skin, but she eventually finds it and returns to the sea, leaving her family. `,
  },
  {
    Deirdre: `The Ulster Cycle also tells of this beautiful heroine, who is often given the epithet "an Bhróin," meaning "of the Sorrows." This lover of Naoise was forced to marry king Conchobar and killed herself by jumping from a chariot. `,
  },
  {
    'Лосось мудрости ': `That Irish hero burned his thumb while cooking one of these fish that contained all the knowledge of the world. That one of these fish got that knowledge from eating nine hazelnuts from the Well of Wisdom. `,
  },
  {
    Mabinogion: `The story of Culhwch and [Answer to #11] is collected in this series of stories from Welsh narrative tradition. Lady Charlotte Guest published the first full modern full edition of this collection, bilingually in English and Welsh. `,
  },
  {
    'The Fisher King': `This figure, ruler of the castle Corbenic, typically has his injury healed by the knight Sir Percival in most tellings. This figure is the last in a long bloodline charged with keeping the Holy Grail. `,
  },
  {
    Taliesin: `A figure who is mentioned often in Welsh legend is this bard of post-Roman Britain. A manuscript collecting this bard's poems includes praise poems to Urien Rheged such as "The Battle of Gwen Ystrad" and prophetic poems such as "Armes Prydein Vawr." `,
  },
  {
    'Гибельное сидение ': `This seat on the round table was reserved with magic by Merlin for whoever successfully completed the grail quest. This seat is typically acquired by Galahad, but some tellings may have it go to Percival. `,
  },
  {
    'Krung Thep': `Thais commonly refer to their capital of Bangkok by which 2-word short name? `,
  },
  {
    Urga: `Ulaaanbaatar, the capital of Mongolia, literally means "Red Hero" and the name was adopted by Mongolia's communist government in 1924. Prior to this, by what name was this city generally known? `,
  },
  {
    Bharat: `The country known as India in English is known as what in Hindi?`,
  },
  {
    Chennai: `The capital of the state of Tamil Nadu in India was long known as Madras in English. What Tamil name is it most commonly known by today? `,
  },
  {
    Aztlan: `Which name, originally applied to the mythical homeland of the Aztecs, is sometimes used by Mexican-Americans to refer to the parts of the United States that were annexed from Mexico in 1848? `,
  },
  {
    Azawad: `What name is given to the northern part of Mali by members of the Tuareg ethnic group who wish to seceed from Mali and form their own independent nation?`,
  },
  {
    Zambia: `In 1964, the British colony of Northern Rhodesia became independent as what African nation? `,
  },
  {
    Mukden: `The Chinese city of Shenyang was once widely known in the west by which Manchu name? This Manchu name is perhaps most closely associated with a 1931 false-flag incident used as a pretext for the Japanese invasion of Manchuria. `,
  },
  {
    'Puncak Jaya': `In this question we're looking for what is the highest mountain in Indonesia, on the island of New Guinea, with an elevation of 4,884 m (16,024 ft). It is the highest peak of an island on Earth, and the highest peak in Oceania. What is the name of this mountain? `,
  },
  {
    'Michel Hidalgo (Клич Долорес)': `We're looking for a man who was a creole priest, who led the rebellion against Spanish rule. Heis famous for his "grito" (declaration of war on Spain), an event that included him yelling "Viva Mexico!" (long live Mexico) while showing a flag completely different to the Spanish one, in a church. This tradition is still honored today, as every September 15, the President of Mexico steps out of the balcony in the Zocalo and rings a bell yelling "Viva Mexico!", just as he did. Who was this?              `,
  },
  {
    'Tan Dun': `This man is a Chinese contemporary classical composer, pianist, viola d'amore player and , most widely known for his scores for the movies Crouching Tiger, Hidden Dragon and Hero, as well as composing music for the medal ceremonies at the 2008 Beijing Olympics. Who is this man, who is noted for his experimentation with multimedia and nonstandard instruments such as water and rocks in his compositions?              `,
  },
  {
    Harpastum: `This was a form of ball game played in the Roman Empire. The Romans also referred to it as the small ball game. The ball used was small (not as large as a follis, paganica, or football-sized ball) and hard, probably about the size and solidity of a softball. The word is the latinisation of the Greek word that was the neuter of the Greek word for "carried away",[2] from the verb "to seize, to snatch". What ball game was this?              `,
  },
  {
    Ragusa: `Speaking of former Italian names in Croatia, what is the former Italian name for the Croatian port city of Dubrovnik? `,
  },
  {
    'CN Tower ': `a 553.3 m concrete communications and observation tower in Toronto, Ontario, Canada. Completed in 1976, it is located in downtown Toronto, built on the former Railway Lands.`,
  },
  {
    'The Arch of Constantine ': `a triumphal arch in Rome dedicated to the emperor Constantine the Great. The arch was commissioned by the Roman Senate to commemorate Constantine's victory over Maxentius at the Battle of Milvian Bridge in AD 312.`,
  },
  {
    'HABITAT 67': `a housing complex at Cité du Havre, on the Saint Lawrence River, Montreal, Quebec, Canada, designed by Israeli-Canadian architect Moshe Safdie.`,
  },
  {
    'Emma Goldman': `a Lithuanian-born anarchist revolutionary, political activist, and writer. She played a pivotal role in the development of anarchist political philosophy in North America and Europe in the first half of the 20th century.

  `,
  },
  {
    'Winslow Homer ': `This 19th century American painter from New England did many famous seascapes. This painting titled "The Gulf Stream" is probably his most famous, and he also painted "Breezing Up", "Midnight, Wood Island Light", "Crab Fishing", and "Shark Fishing".`,
  },
  {
    'Треугольная торговля ': `This geometric term is used to describe the pattern of trade between the Americas, Europe, and Africa during colonial times. This trade saw sugar and tobacco going to Europe, rifles and textiles going to Africa, and slaves going to the Americas. `,
  },
  {
    'Somewhere Beyond the Sea / La Mer': `Originally recorded in French by French jazz singer Charles Trenet in 1946, this song was most famously recorded in English by Bobby Darin in 1959. In the English lyrics, the speakers notes that "never again, I'll go sailing" once he is reunited with his love, who is in the titular location. `,
  },
  {
    'Kuznets (Simon)': `With his namesake curve, what economist's hypothesis that mid-20th Century that economic inequality would decrease as an economy develops has not stood the test of time? `,
  },
  {
    Kaizen: `What Japanese term for "change for the better" is used in business lingo for continuous improvement? Investopedia defines it as "a Japanese business philosophy that focuses on gradually improving productivity by involving all employees and by making the work environment more efficient`,
  },
  {
    'Kurzweil (Ray)': `What is the surname of the American inventor, author of "The Age of Spiritual Machines," and futurist who was named by Inc. Magazine as "Edison's rightful heir"? `,
  },
  {
    Kazaam: `56A wrecking ball that knocks a magic lamp onto a boombox sets in motion the plot of what 1996 movie that has earned a 5% on Rotten Tomatoes? `,
  },
  {
    'Strait of Hormuz': `The US Navy's Fifth Fleet, based in Bahrain and consisting of 22 ships, 103 aircraft, and 20,000 sailors and marines, basically exists to make sure that the oil continues to flow through this critically important strait. `,
  },
  {
    'Cape Cod': `Now let's move to the New England region of the United States. Name this peninsula that juts out from the state of Massachussetts. `,
  },
  {
    'Martha`s Vineyard': `Name this island, a popular summer vacation spot for wealthy Americans.`,
  },
  {
    'Chesapeake Bay': `Name this bay, a drowned estuary of the Susquehenna River that was partially created by a prehistoric meteor strike. `,
  },
  {
    Yamato: `This Japanese battleship from World War II was the largest ever built. It was finally sunk by the Americans in April of 1945. `,
  },
  {
    'Operation Sea Lion': `This was the codename for the planned but never attempted Nazi invasion of Great Britain during World War II. `,
  },
  {
    'Isoroku Yamamoto': `This Japanese admiral was the commander in chief of the Japanese navy during World War II and planned the attack on Pearl Harbor. He was killed when the Americans shot down a small plane that was transporting him. `,
  },
  {
    'Heihachiro Togo': `This other Japanese admiral won his fame by repeatedly defeating Russian fleets during the Russo-Japanese War. `,
  },
  {
    'Marit Bjørgen': `What Norwegian cross country skier (b. 1980) won her seventh and eighth career Olympic gold medals at the 2018 Pyeongchang Winter Games? `,
  },
  {
    Shavuot: `What Jewish holiday begins fifty days after the first day of Passover? The name of this holiday translates directly from the Hebrew for "weeks". `,
  },
  {
    'AMMANN, SIMON ': `only the second ski jumper to have won four Olympic titles. Uniquely, he won both individual events (normal hill, large hill) at both the 2002 and 2010 Olympic Winter Games.`,
  },
  {
    'BIONDI, MATTHEW ': `won 11 swimming medals at the 1984, 1988, and 1992 Olympics, matching the record then held by Mark Spitz.`,
  },
  {
    'kathoey (Катой)': `For 10 points, name this “third gender” identity common in Thailand`,
  },
  {
    'BALDWIN, James ': `(1924–87) African American writer, born in Harlem. He was helped by Richard *Wright. His first novel, Go Tell It on the Mountain (1953), set in Harlem, was followed by several on a more international scale, dealing with both homosexuality and the situation of African Americans; they include Giovanni’s Room (1956), Another Country (1962), and Just above my Head (1979).`,
  },
  {
    'Beggar’s Opera': `ballad opera by *John Gay, produced with enormous success in 1728. The play arose out of Jonathan *Swift’s suggestion for ‘a Newgate pastoral, among the whores and thieves there’. The plot is founded in part on the career of the thief-taker Jonathan Wild (bap. 1683, d. 1725), represented by the businessman Peachum, whose daughter Polly marries a gallant but promiscuous highwayman, Macheath; Peachum has him imprisoned in Newgate in order to claim reward money.`,
  },
  {
    'Tornado Alley ': `loosely defined location of the central United States and Canada where tornadoes are most frequent. The term was first used in 1952 as the title of a research project to study severe weather in areas of Texas, Louisiana, Oklahoma, Kansas, South Dakota, Iowa and Nebraska.`,
  },
  {
    'Леонид Шварцман ': `советский мультипликатор, создатель визуального образа `,
  },
  { Вольпертингер: `заяц с рогами лося из немецкой мифологии.` },
  {
    'Батаклан ': `театр в париже. Изначально здание было построено как кафе в китайском стиле. Потом неоднократно перестраивалось, ремонтировалось, частично демонтировалось. Сейчас функционирует как популярная концертная площадка. В 2015 году во время концерта группы Eagles of Death Metal Три террориста проникли в здание и расстреливали зрителей. В ходе спецоперации террористы были либо убиты, либо привели в действие пояса смертников. При нападении погибло 89 зрителей концерта, ранения получили более 200 человек`,
  },
  {
    'Гретна-грин ': `деревня в Шотландии, известная "кузнечными свадьбами". В 18-19 веках в Англии и Уэльсе действовал закон, согласно которому до 21 года вступать в брак можно было только с согласия родителя или опекуна. Чтобы обойти закон несовершеннолетние влюблённые ехали в Шотландию, в которой закон не действовал. `,
  },
  {
    'Шкала Шмидта ': `шкала силы ужалений насекомых, показывающая уровень воздействия на человека и испытываемых людьми болевых ощущений. `,
  },
  {
    'Урс Фишер ': `швейцарский художник. Автор "Большой глины №4" (гигантской кучи говна перед ГЭС-2)`,
  },
  {
    'Великое делание (magnum opus) ': `в алхимии процесс получения философского камня (иначе именуемого эликсир философов). Делился на четыре фазы: нигредо (чёрную), альбедо (белую), цитринитас (жёлтую), рубедо (красную) `,
  },
  {
    'Ампельман ': `символическое изображение человека на светофорах на пешеходных переходах на территории бывшей ГДР.`,
  },
  {
    'Колокол Ллойда': `колокол, поднятый с затонувшего корабля "Лутина" (Шалунья). Колокол с судна был поднят и установлен в корпорации "" 17 июля 1858 года, в то время располагавшейся в здании Королевской биржи в Лондоне. `,
  },
  {
    'Лобковая война ': `соперничество между порнографическими журналами Playboy и Penthouse в 1960-х и 1970-х годах. Каждый журнал стремился показать чуть больше, чем другой, не становясь слишком грубым.`,
  },
  {
    'Скрипка Энгра ': `фразеологизм, означающий увлечение, слабость какого-либо известного человека, непрофессиональное занятие, второе призвание.`,
  },
  {
    'Третья волна ': `психологический эксперимент, проведённый учителем истории Роном Джонсом над учащимися 10-го класса американской средней школы. В начале апреля 1967 года Джонс потратил неделю занятий одного из классов школы Пало-Альто на попытку осмыслить поведение немецкого народа при репрессивном национал-социализме. Установив жёсткие правила для школьников и став создателем молодёжной группировки, он, к своему удивлению, не встретил сопротивления ни учащихся, ни взрослых. На пятый день Джонс прекратил эксперимент, объяснив учащимся, как легко они поддаются манипуляциям и что их послушное поведение в эти дни кардинально не отличается от поступков рядовых граждан нацистской Германии.`,
  },
  {
    'AREZZO ': `City in Tuscany, 40 mi SE of Florence. One of the 12 ancient cities of Etruria, it became an ally of Rome in the third century b.c. In a.d. 1289 it was defeated by Florence at Campaldino and was subsequently annexed in 1384. It was damaged during World War II and taken by the British on July 16, 1944. The city, which retains much of its medieval character, has extensive archaeological remains and was a noted artistic center, the birthplace of Maecenas, Petrarch, Giorgio Vasari, Guido d’Arezzo, and Pietro Aretino.`,
  },
  {
    'draugr ': `undead creature from the Scandinavian saga literature and folktales.`,
  },
  {
    'Ragnar Lodbrok ': `a Viking hero and a Swedish and Danish king. He is known from Old Norse poetry of the Viking Age, Icelandic sagas, and near-contemporary chronicles. According to traditional literature, he distinguished himself by conducting many raids against the British Isles and the Holy Roman Empire during the 9th century.`,
  },
  {
    'Pruitt-Igoe': `Which St Louis public housing project did Yamasaki describe as his “sorriest mistake” in architecture? The estate was demolished within thirty years of its construction. `,
  },
  {
    'Пилион ': `Situated at the southern part of Thessaly and forming a hook -like peninsula between the Pagasetic Gulf and the Aegean Sea, which mountain in Greek myth is the home of the Centaurs? Wood from its trees was supposed to have been used to built the ship Argo that took Jason to Colchis in his quest for the Golden Fleece.`,
  },
  {
    'Нидхегг ': `In Norse mythology, which creature (whose name means 'Malice Striker') is a dragon that gnaws at the roots of Yggdrasil the World Tree? In the Poetic Edda, it presides over the realm of Nastrond, where it chews on the corpses of those guilty of murder, adultery and oath-breaking.`,
  },
  {
    'Виракоча ': `Which creator deity of the Pre-Inca and Incan mythology supposedly rose out of Lake Titicaca during the time of darkness in order to bring forth light? Also known as Kon-Tiki (as in Thor Heyerdahl's raft), he is usually represented as an old man in a white robe holding a staff, weeping at the plight of the creatures he helped created.`,
  },
  {
    'У-вэй ': `Which central concept of Taoism, an alliterative two-word term, literally means 'non-action' or 'non-doing'? In the 'Tao Te Ching', Lao Tzu explained this concept in terms of planets revolving around the Sun in a natural and uncontrived manner.`,
  },
  {
    'Симон Киринеянин ': `Featured in films such as 'The Greatest Story Ever Told' and The Passion of the Christ', which figure in the Stations of the Cross was the man compelled by the Romans to carry Jesus's cross as the latter was led to his crucifixion?`,
  },
  {
    'Мелеагр ': `In Greek myth, who is the Aetolian hero who killed the Calydonian Boar but awarded its hide to the huntress Atalanta (whom he loved)? He is also one of the Argonauts who accompanied Jason on the latter's quest for the Golden Fleece.`,
  },
  {
    'Махди ': `In Islamic eschatology, what name is given to the messianic figure who is the prophesized redeemer of Islam, who will rule for a certain period of time before the Day of Judgment? The term derives from the Arabic root commonly meaning 'divine guidance'.`,
  },
  {
    'Густав Вигеланд ': `This permanent installation in Frogner Park in Oslo is named after which sculptor born in 1869? He was also the designer of the Nobel Peace Prize medal.`,
  },
  {
    'Йозеф Альберс ': `Begun in 1950 and continued until his death in 1976, ‘Homage to the Square’ - a series of paintings of coloured squares superimposed onto each other such that each square optically alters the sizes, hues, and spatial relationships of the others - was the work of which German-born US artist who left Germany when the Nazis closed down Bauhaus?`,
  },
  {
    'George Segal': `Born 1924 in New York, which American artist associated with the Pop Art movement is noted for his sculptures that consist of monochromatic cast plaster figures often situated in mundane environments? Notable works include The Truck (1966), The Laundromat (1966–67), and Hot Dog Stand (1978).`,
  },
  {
    'Пуук ': `From the Maya for ‘hill’, which four-letter term can refer either to a range of hills in the Mexican state of Yucatán, or to the architectural style associated with this region? Characteristics include facings of thin squares of limestone veneer over a cement-and-rubble core as well as lavish use of stone mosaics in upper facades.`,
  },
  {
    'Карел Аппел ': `Now in the Tate Modern, the 1949 fresco ‘Questioning Children’ caused controversy and was covered up for ten years when it was exhibited in Amsterdam City Hall. It was the work of which painter/ sculptor, a founding member of the avant-garde COBRA movement?`,
  },
  {
    'Собор Святой Софии ': `Attributed with writing the apocryphal 15th book of Euclid’s ‘Elements’, the architect and mathematician Isidore of Miletus is best known for designing which major architectural wonder, together with Anthemius of Tralles?`,
  },
  {
    'Чак-мооль ': `From the Maya for ‘thundering paw’, what term refers to a particular form of pre-Columbian Mesoamerican sculpture depicting a reclining figure with its head facing 90 degrees from the front, supporting itself on its elbows and supporting a bowl or a disk upon its stomach? It is supposed to symbolize a slain warrior carrying offerings to the gods.`,
  },
  {
    'DOOBIE BROTHERS': `Which American band, active on and off since the 1970s, has been led by Tom Johnston and Michael McDonald in that time, took its name from a slang term for a marijuana joint? `,
  },
  {
    'Numa Pompilius': `Succeeding King Romulus after a 1 year interregnum, who was the second King of Rome from 715 to 673 BC? He is responsible for the institution of the Roman Calendar and the appointments of the Vestal Virgins, as well as the cults of Mars and Jupiter. `,
  },
  {
    Sikkim: `Bordering Tibet in the North and Northeast, Bhutan to the East and Nepal to the west, which Northeast Indian state has Gangtok, a popular Buddhist pilgrimage site, as its State Capital? `,
  },
  {
    'Battle of Camlann': `for 10 points, name this battle at which both Mordred and Arthur were mortally wounded. `,
  },
  {
    'Wu Zetian': `This monarch’s reign, which started with an usurpation after the death of Gaozong, formed the entirety of the 15-year long Zhou Dynasty, which interrupted the Tang Dynasty. for 10 points, name this only female emperor in Chinese history. `,
  },
  {
    'The Great Stink of 1858': `for 10 points, name this 1858 event in which a very hot summer caused a foul miasma to descend over London. `,
  },
  {
    'Lissajous ': `Named after a French physicist (1822-1880), what name is given to a figure made by releasing sand from a Blackburn pendulum? They can describe any of an infinite variety of curves that can formed by combining two mutually perpendicular simple harmonic motions. `,
  },
  {
    'Marcus Garvey': `Which Jamaican activist founded the Universal Negro Improvement Association and African Communities League? `,
  },
  {
    'Pablo de Sarasate': `Which Spanish composer and violinist (b. 1844) known for the Spanish Dances appears in works by Arthur Conan Doyle and Edith Wharton, and was painted by Whistler? `,
  },
  {
    Kaddish: `What is the subtitle of Leonard Bernstein's Symphony No. 3? Dedicated to the memory of John F. Kennedy, who died less than a month before its first performance in 1963, it alludes to the Jewish prayer recited to commemorate the dead. `,
  },
  {
    Urtext: `What German-language term, meaning 'original text', is used to refer to a published edition of a work that has been prepared with special attention to the composer's intentions, often restoring details from the composer's manuscript that have been omitted in previous editions? `,
  },
  {
    'Different Trains': `Which work by Steve Reich, first performed by the Kronos Quartet in 1988, consists of three movements for string quartet accompanied by a tape derived from interviews with several people, including Holocaust survivors, who speak about their memories of railway journeys around the time of the Second World War? `,
  },
  {
    'Omar Al Bashir': `Sudan’s former president is the first head of state to be indicted by the International Criminal Court for war crimes. He gave the fighting force known as Janjaweed free reign to fight against civilians in Darfur, which led to looting of food supplies, incidents of rape, and the burning of villages and mosques. Who is this man? `,
  },
  {
    Ramciel: `Although Juba is the capital of South Sudan, which location did revolutionary leader John Garang intend to be the site of a purpose-built capital?`,
  },
  {
    Zoroastrianism: `What dualistic religion's central liturgical texts, Yasna, are composed in Avestan language? `,
  },
  {
    'Battle of Crécy': `Edward III's triumph over the French at what 1346 battle was England's first major victory of the Hundred Years War? 1,500 of the over 4,000 French casualties at this battle were noblemen. `,
  },
  {
    'AAMODT, KJETIL ANDRÉ ': `His record of eight Olympic medals (four gold, two silver, two bronze) in Alpine skiing is unmatched at the Winter Olympics, and his four gold medals are matched only by Janica Kostelic.`,
  },
  {
    'Winnie Harlow': `Canadian fashion model and public spokesperson on the skin condition vitiligo. She gained prominence in 2014 as a contestant on the 21st cycle of the U.S. television series America's Next Top Model. `,
  },
  {
    'Аукцион Викри ': `это алгоритм проведения однораундного закрытого аукциона (участники которого не знают ставок друг друга), при котором право на покупку получает участник, предложивший максимальную ставку, но покупка осуществляется по второй максимальной ставке. `,
  },
  {
    'Пик Балмера ': `гипотететическое количество алкоголя в организме, при котором способности программиста достигают своего предела. `,
  },
  {
    'Один и три стула': `инсталляция Джозефа Кошута. Работа выглядит как стул, фотография этого стула и копия словарной статьи «стул». Ключевым для понимания работы является тот факт, что на фотографии изображён именно выставленный стул. По замыслу автора, стул и его фотография должны меняться с каждой новой экспозицией. Неизменными сохраняются два элемента: копия словарной статьи «стул» и схема с инструкциями установки работы. Оба элемента являются частью концепта и подписаны художником.`,
  },
  {
    'Евгений Мигунов ': `советский мультипликатор и художник. Автор иллюстраций ко многим книгам, а так же Олимпийского мишки - символа олимпиады 1980.`,
  },
  {
    'Блэкаут 1977 года ': `в результате нескольких ударов молнии в ночь с 13 на 14 июля 1977 года в Нью-Йорке произошло массовое отключение электроэнергии. Это спровоцировало массовые грабежи, погромы и пожары. В результате грабежей многие малообеспеченные чернокожие получили доступ к дорогому диджейскому оборудованию, что, как считается, стимулировало развитие хип-хопа.`,
  },
  {
    'Джон Ди ': `британский натурфилософ, математик, астроном, алхимик и астролог, а заодно и обладатель одной из самых больших библиотек своего времени, которая привлекала многих учёных того времени и превратилась в крупнейший научный центр за пределами университетских стен.`,
  },
  {
    'Карман Генри ': `складка кожи на ушах домашних кошек и некоторых других животных. Достоверное неизвестно, для чего он нужен, но есть версия, что он позволяетобнаруживать высокие звуки путём ослабления низких частот.`,
  },
  {
    'Рогатый Моисей ': `в библии Моисей, спускающийся с горы Синай, описан словом, которое обозначает "лучащийся светом", но так же его можно перевести как "обладающий рогами"`,
  },
  {
    'Дерево ночи слёз ': `дерево, под которым в 1521 году Корте́с плакал после того, как его армия была разбита и изгнана из Теночтитла́на. `,
  },
  {
    'Отниел  Марш ': `американский палеонтолог. Описал более 400 видов ископаемых животных, в том числе 86 динозавров, включая бронтозавра, трицератопса, торозаврa, диплодока, стегозавра, аллозавра, нодозавра и др. На поприще поисков окаменелостей, прославился также своей непримиримой враждой и соперничеством с Эдвардом Копом («костяные войны»), начавшейся с того, что он указал на ошибку Копа (при реконструкции найденного им плезиозавра принявшего хвост животного за шею).`,
  },
  {
    'Дора (орудие) ': `уникальное сверхтяжёлое железнодорожное артиллерийское орудие германской армии. Разработано фирмой «Крупп» (Германия) в конце 1930-х годов. Предназначалось для разрушения укреплений линии Мажино и фортификаций на границе Германии и Бельгии. Орудие было применено при штурме Севастополя в 1942 году.`,
  },
  {
    'Война бюстов ': `аллегоричное соперничество итальянских актрис Софи Лорен и Джины Лоллобриджиды. Известно, что Софи Лорен первой застраховала свою грудь на $120 000. `,
  },
  {
    'Léon Ernest Gaumont ': `French inventor, engineer, and industrialist who was a pioneer of the motion picture industry. He founded the world's first and oldest film studio`,
  },
  {
    'Мартин Шонгауэр ': `Completed the 1488, ‘The Torment of St. Anthony’ is widely considered the earliest known painting by Michelangelo. It is a close copy of a famous engraving (c. 1470-75) by which painter and printmaker nicknamed ‘Beautiful Martin’ and regarded as the finest German engraver before Albrecht Durer?`,
  },
  {
    'Корреджо ': `Born Antonio Allegri in 1489, which Renaissance artist is better known today by the name of the small town in the Po valley where he grew up? The foremost exponent of the Parma school, he was responsible for some of the most vigorous and sensuous works of the 16th century - including ‘The Martyrdom of the Four Saints’, ‘The Mystic Marriage of St. Catherine’ and a series of paintings based on Ovid’s ‘Metamorphoses’.`,
  },
  {
    'Карл Андре ': `Which US contemporary minimalist artist, born in Massachusetts in 1935, is known for his grid-format style involving objects such as bricks, blocks and metal plates arranged directly on the floor? His works include ‘144 Lead Square’, ‘Twenty-fifth Steel Cardinal’ and ‘Stone Field Sculpture’.`,
  },
  {
    'Richard Dadd (Мастерский замах сказочного дровосека)': `Referenced in works by Octavio Paz, Alan Moore, Terry Pratchett and Queen, the painting ‘The Fairy Feller’s Master Stroke’ (1855-64) now in Tate Britain was the work of which English artist, who spent more than 20 years of his later life in Bethlem and Broadmoor hospitals for mental illness (likely paranoid schizophrenia)?`,
  },
  {
    'Liu Bolin ': `Born in Shandong in 1973, which Chinese artist has received international recognition for his ‘Hiding in the City’ series? Inspired to create it after the demolition of the Suo Jia Cun artist village in 2005, he uses the city around him as a backdrop, painting himself to blend in with a landscape that is in constant flux.`,
  },
  {
    'Роберт Раушенберг ': `Completed in 1963, the artwork ‘Tracer’ is an example of a combine painting by which US graphic artist? Works in this genre typically incorporate objects (such as photographs, newspaper clippings or clothing) into a painted surface, thus a painting-sculpture hybrid.`,
  },
  {
    'Юэ Минцзюнь ': `Born 1962 in Heilongjiang, which contemporary Chinese artist, part of the ‘Cynical Realist’ movement that began since 1989, is known for depicting himself in various settings and frozen in laughter?`,
  },
  {
    'Йоахим Бейкелар ': `Completed between 1569-70, ‘The Four Elements’ is a series of four paintings by which Flemish painter who specialized in market and kitchen scenes that usually incorporates biblical themes or episodes within them? He was a major influence in the development of still-life art in Northern Europe and Italy.`,
  },
  {
    'Макс Эрнст ': `From the French for ‘to rub’, the technique known as frottage whereby an impression of the surface texture of a material, such as wood, is obtained by placing a piece of paper over it and rubbing it with a soft pencil or crayon, was developed in 1925 by which surrealist artist?`,
  },
  {
    'Impasto (Как звездная ночь)': `Which term, from the Italian meaning ‘dough’, refers to the artistic technique in which paint is laid thickly on a surface, so much so that the brush or painting-knife strokes are still visible?`,
  },
  {
    'Роберт Берени ': `Widely thought to be missing until it was spotted as a prop on the movie ‘Stuart Little’ by an art historian, ‘Sleeping Lady with Black Vase’ is a painting by which avant-garde Hungarian artist credited with introducing cubism and expressionism to Hungarian art before WWI?`,
  },
  {
    'Георг Грос ': `Apparently once used by the artist to pay for a car repair bill, ‘Eclipse of the Sun’ (valued at $19,000,000 in 2006) is a work by which prominent member of the Berlin Dada and New Objectivity group during the Weimar Republic also noted for ‘The Funeral (Dedicated to Oskar Panizza)’?`,
  },
  {
    'Родченко ': `The 2005 studio album ‘You Could Have It So Much Better’ by the Scottish indie rock band Franz Ferdinand modelled its cover design on a 1924 portrait of the socialite Lilya Brik by which Russian artist? A dedicated leader of the Constructivist movement, he is noted for his 1918 series of black-on-black geometric paintings in response to the famous ‘White on White’ painting of his Suprematist rival, Kazimir Malevich.`,
  },
  {
    'Фредерик Черч ': `First exhibited in 1859 when it caused a sensation, the large (3m by 1.7m) oil painting ‘The Heart of the Andes’ is by which American artist? A student of Thomas Cole (who founded the Hudson River School), he undertook two trips to South America in the 1850s, from which he was inspired to produce this as well as works such as ‘Cayambe’ and ‘Cotopaxi’.`,
  },
  {
    'Ци Байши ': `Selling for around $65.5 million in 2011, ‘Eagle Standing on Pine Tree’ is the most expensive painting sold at auction by a Chinese painter, and is the work of which painter born during the Qing Dynasty and noted for his whimsical works in watercolor?`,
  },
  {
    'Нюрнберг ': `Except for a few years when he travelled to Italy and the Netherlands, the German Renaissance artist Albrecht Durer spent most of his life in WHICH CITY, where he was born in May 1471?`,
  },
  {
    'Вортицизм ': `Announced in 1914 in the first issue of the magazine BLAST and given its name by the poet Ezra Pound, which artistic movement began with the Rebel Art Centre which Wyndham Lewis and others established after disagreeing with Omega Workshops founder Roger Fry?`,
  },
  {
    'Статуя Христа-искупителя ': `Featuring key Reformation figures such as John Calvin and John Knox, this monument in Geneva is the work of the French sculptor Paul Landowski, who is probably best known for which other of his project (a collaboration with Heitor da Silva Costa and Gheorghe Leonida)?`,
  },
  {
    'Тонтина ': `What ‘investment vehicle’, possibly invented in 17th century France, is a scheme by which the subscribers to a common fund each receive an annuity during their lifetime, which increases as their number is diminished by death, till the last survivor enjoys the whole income? `,
  },
  {
    PHILIPPINES: `The Moro Islamic Liberation Front (MILF) is a group seeking an autonomous region of the Moro people in which country? `,
  },
  {
    'Lina WERTMULLER': `In 1977 who became the first woman to be nominated for the Academy Award for Best Director, for the Italian language film Seven Beauties (Паскуалино Семь красоток )? `,
  },
  {
    'Carter (Ruben)': `"The 16th Round: From Number 1 Contender to Number 45472." was a book written by which boxer, known as "The Hurricane" for his fast punches, but wrongfully convicted of a triple murder with his friend in 1967? He was finally freed in 1985 `,
  },
  {
    Anaximander: `Although he was wrong in believing that the stars were closer to the earth than the sun, which philosopher of Miletus (610-546 BC) and pupil and successor of Thales, concluded that the Earth must float freely and unsupported in space? `,
  },
  {
    'Kodaly (Zoltan)': `The ______method is an approach to musical education that has been given UNESCO Intangible Cultural Heritage status? It is named for which Hungarian composer of the 1926 folk opera Háry János, about a spinner of tall tales? `,
  },
  {
    Dashiki: `Frequently worn with a brimless Kufi cap and pants, which colourful garment is worn throughout West Africa and has been popularized in the West's African diaspora? `,
  },
  {
    Kintsugi: `Literally meaning 'golden joinery', what name is given to the Japanese art of repairing broken pottery which uses lacquer dusted or mixed with powdered gold, silver, or platinum in order to highlight the repairs, making them a valued part of the object's history rather than things to be hidden? `,
  },
  {
    ' Ingalls-Wilder (Laura)': `Which American writer (1867-1957) wrote the series of books The Little House on the Prairie, based on her own experiences of childhood?`,
  },
  {
    'Jezebel ': `wife of Ahab, King of Israel, according to the Book of Kings of the Hebrew Bible. According to the biblical narrative, she, along with her husband, instituted the worship of Baal and Asherah on a national scale. In addition, she violently purged the prophets of Yahweh from Israel, damaging the reputation of the Omride dynasty. For these offences, the Omride dynasty was annihilated, with her suffering death by defenestration.`,
  },
  {
    'Fay Wray ': `(September 15, 1907 – August 8, 2004) was a Canadian-American actress best known for starring as Ann Darrow in the 1933 film King Kong. Through an acting career that spanned nearly six decades, she attained international recognition as an actress in horror films. She has been dubbed one of the early "scream queens".`,
  },
  {
    'Deryck Whibley ': `Canadian musician, singer, songwriter and record producer, best known for his work as the lead vocalist, rhythm guitarist, keyboardist, main songwriter, producer, founder and only constant member of the rock band Sum 41.`,
  },
  {
    'Освальд Бёльке ': `немецкий военный лётчик и тактик времён Первой мировой войны, автор основных правил воздушного боя Dicta Boelcke, один из первых асов в истории мировой авиации.`,
  },
  {
    'Чёрный бивень ': `дорогой сорт кофе. Производится в Таиланде из зёрен, высранных слоном. Чтобы получить 1 кг, необходимо скормить слону 33 кг кофейных зёрен. Компания занимается благотворительностью, часть денег жертвуют в фонды, спасающие и лечащие слонов`,
  },
  {
    'Проклятие памяти (Damnatio memoriae) ': `особая форма посмертного наказания, применявшаяся в Древнем Риме к государственным преступникам — узурпаторам власти, участникам заговоров, к запятнавшим себя императорам. Любые материальные свидетельства о существовании преступника — статуи, настенные и надгробные надписи, упоминания в законах и летописях — подлежали уничтожению, чтобы стереть память об умершем. `,
  },
  {
    'Цветы лучше пуль ': `фраза, произнесенная американской студенткой Эллисон Краузе и ставшая антивоенным лозунгом. Краузе погибла 4 мая 1970 года во время расстрела в Кентском университете при разгоне студенческих демонстраций против ввода американских войс в Камбодже. Считается, что эту фразу Эллисон произнесла, когда увидела у дуле винтовки солдата цветок сирени. `,
  },
  {
    'Луи-Доминик Бургиньон (Картуш) ': `известный французский разбойник, по праву считающийся самым знаменитым грабителем XVIII столетия. Он ещё при жизни стал легендой и таковым остался после смерти. Его популярности способствовали не только удачливость и дерзость, но и некое чувство юмора, с которым он совершал свои преступные деяния.`,
  },
  {
    'Мальброк в поход собрался ': `одна из самых популярных французских народных песен. Песню о Мальбруке сочинили французские солдаты в 1709 году накануне знаменитого сражения при Мальплаке. В стане французов пронёсся ложный слух о том, что убит виновник их предыдущих неудач в войне за испанское наследство герцог Мальборо, руководивший английскими войсками, которого французы называли на свой лад «Мальбруком». Так появилась песня о Мальбруке, начинавшаяся словами:`,
  },
  {
    'словарь Фасмера ': `самый объёмный на данный момент этимологический словарь русского языка. Был составлен в 1938—1950 годах российским и немецким учёным "" на немецком языке. Переведён на русский язык и дополнен в 1959—1961 годах О. Н. Трубачёвым.`,
  },
  {
    'Свеча сапёра ': `французская юмористическая газета, выходящая раз в 4 года 29 февраля. Название отсылает к персонажу комиксов сапёре Камамберу, в биографии которого сказано, что он родился 29 февраля. Помимо прочего, в газете публикуется кроссворд, ответы на который можно узнать только через 4 года`,
  },
  {
    'Квадрат Полибия ': `способ шифрования, предложенный "" в 3 веке до нашей эры. Сводится к записи алфавита в квадрат или прямоугольник. После этого само шифрование может проводиться разными методами. Самый простой - замена буквы`,
  },
  {
    'Клуазонизм ': `Flourishing in the late 19th century, which post-impressionist style (after the French for ‘partition’) is characterized by a two-dimensional pattern, featuring large patches of bright colour enclosed within thick black outlines? The painting shown here is widely considered a quintessential work of this style.`,
  },
  {
    'Милле ': `Extremely controversial when first exhibited due to its realistic depiction of the subject, ‘Christ In The House of His Parents’ is an 1849-50 work by which English artist? It shows a young Jesus assisting Joseph in his carpentry workshop and accidentally cutting his hand on an exposed nail.`,
  },
  {
    'Хуго ван дер Гус ': `Now in the Uffizi Gallery, the Pontinari Altarpiece is a triptych by which Flemish painter, born in Ghent around 1430?`,
  },
  {
    'Гро ': `Born 1771 in Paris, which neoclassicist painter trained under Jacques-Louis David at the age of 14, and subsequently became Napoleon's inspecteur aux revues? He is known for a series of historical paintings depicting the military career of Napoleon, such as the 1796 'Bonaparte at the pont d'Arcole'?`,
  },
  {
    'Dresden ': `Sometimes compared to the Fauves, the expressionist art group known as Die Brucke (The Bridge) was founded in which German city in 1905? Founding members included Fritz Bleyl, Erich Heckel and Ernst Ludwig Kirchner.`,
  },
  {
    'Стакизм или анти-анти-искусство ': `Founded in 1999 by Billy Childish and Charles Thomson, which art movement derives its name from a frustrated expression by Tracey Ermin (Childish's former girlfriend)? Its manifesto stresses the use of painting as a medium, its use for communication and the expression of emotion & experience, epitomized by the statement, 'Artists who don't paint aren't artists'.`,
  },
  {
    'Джорджоне ': `Lord Byron called it his favorite painting because of the ambiguity of its subject matter and symbolism. In Neil Gaiman's comic The Sandman : The Wake', it hangs in the hall of the Dream King. Which Renaissance artist painted the piece entitled The Tempest', between 1506 to 1508?`,
  },
  {
    ' Палладио ': `Which 16th-century Venetian architect, author of 'The Four Books of Architecture', gives his name to an architectural style that strongly emphasizes the symmetry, values and perspectives of classical Roman & Greek temples? Examples of its influence include Thomas Jefferson's Monticello in Virginia.`,
  },
  {
    Baroque: `Which term, deriving from the Spanish/ Portuguese for 'an imperfect pearl', is generally used to refer to the period in Western European art from around 1600 to 1750?`,
  },
  {
    'Клауд гейт ': `Featured in the movies 'Transformers: Age of Extinction' and The Break-Up', what is the name of this public sculpture by the Indian-born British artist Anish Kapoor? Located in the Millennium Park of downtown Chicago, it has been given the nickname The Bean' because of its shape.`,
  },
  {
    'CHUBBY CHECKER': `Who used Fats Domino as the inspiration for his stage name and helped popularise the Twist throughout the world? `,
  },
  {
    'Reinhold Niebuhr': `The Nature and Destiny of Man is a book by, for 10 points, what Protestant theologian, who asked for the ability “to accept things I cannot change,” the “courage to change the things I can,” and the “wisdom to know the difference” in his “Serenity Prayer”? `,
  },
  {
    Hashemites: `Members of what reigning royal family of Jordan formerly ruled the kingdoms of Hejaz and Iraq? `,
  },
  {
    pericardium: `The term for what double-walled membrane that encloses the heart is derived ultimately from a Greek word that means "around the heart"? This word also names a Division 1 side in the Quiz League of London. `,
  },
  {
    sawm: `The Fourth Pillar of Islam is what act of fasting from dawn until dusk during Ramadan? This four-letter Arabic word literally means "fasting". `,
  },
  {
    'Panton chair': `Depicted here is what world's first moulded plastic chair? This 1960's chair is named for its Danish designer.`,
  },
  {
    'Federated States of Micronesia': `Palikir is the capital of which group of Western Pacific islands? `,
  },
  {
    'India and China ': `The McMahon Line, named after Sir Henry McMahon, marks the border between which two countries? `,
  },
  {
    'Pakistan and Afghanistan': `The Durand Line, named after Sir Mortimer Durand, marks the border between which two countries? `,
  },
  {
    'Barr body ': `A structure consisting of a condensed X chromosome (see sex chromosome) that is found in nondividing nuclei of female mammals. The presence of a BLANK is used to conÜrm the sex of athletes in sex determination tests.`,
  },
  {
    'Anderson, Carl ': `(1905–91) US physicist who became a professor at the California Institute of Technology, where he worked mainly in particle physics. In 1937 he discovered the * positron in * cosmic radiation, and four years later was awarded the Nobel Prize. In 1939 he discovered the mu-meson (muon)`,
  },
  {
    'Нью-лук ': `стиль одежды, созданный Кристианом Диором в 1947 году и призванный вернуть женщинам послевоенного периода элегантность и женственность. Отличался болшим количеством ткани, использующемся при пошиве одежды. Многими считался чрезмерно расточительным`,
  },
  {
    'Семь сестёр': `ассоциация семи старейших и наиболее престижных женских колледжей на восточном побережье США. Все колледжи основаны между 1837 и 1889 годами. `,
  },
  {
    'Застенчивость кроны ': `феномен, который наблюдается у некоторых видов деревьев, когда кроны полностью развитых деревьев не соприкасаются, формируя полог леса с каналами-пробелами. Другие названия — «разомкнутость полога», «застенчивость полога», или «межкроновое пространство». Наблюдается у деревьев одного вида, однако зафиксированы случаи между деревьями разных видов.`,
  },
  {
    'Тезисы о Фейербахе ': `рукописная работа Маркса из 11 тезисов о "", где высказана мысль о ведущем значении в жизни общества революционной практики.`,
  },
  {
    'Умберто Нобиле ': `итальянский дирижаблестроитель, исследователь Арктики на дирижабле "Италия", генерал.`,
  },
  {
    Маккьяйоли: `Giovanni Fattori, Telemaco Signorini and Silvestro Lega were among a group of Florence-based painters in the second half of the 19th century, who stood opposed to the academic art of the time, doing much of their work outdoors to capture natural colours and shades. What Italian name is used for this group? `,
  },
  {
    'second law of thermodynamics': `First rigorously defined in the 1850s by Rudolf Clausius, which physical law states that the entropy of a closed system always increases? `,
  },
  {
    'Greer, Germaine ': `(1939– ). Australian writer, born in Melbourne. Educated at Melbourne, Sydney and Cambridge universities, she taught English at Warwick University 1968–73. Her The Female Eunuch (1970) was a trenchant attack on the subjugation of women in a male-dominated society. Originally a strong advocate of the sexual revolution, she modified her view in Sex and Destiny (1984). She also wrote The Change (1991), about menopause.`,
  },
  {
    'Grock ': `(1880–1959). Swiss musical clown. A master of miming, he captivated audiences of all nationalities without uttering a word. The most famous of his acts displayed him in his clown’s makeup in a state of complete bewilderment when confronted with an array of musical instruments whose eccentricities he appeared unable to master, until with a sudden change of mood he revealed himself as a virtuoso performer.`,
  },
  {
    'Gruen, Victor ': `Austrian-Jewish-American architect, born in Vienna. He designed shopping malls/supermarkets. The ‘BLANK effect’ describes the impact of a welcoming, open, well-lit, air-conditioned environment, with abundant products and food in reach, which becomes a home away from home, and weakens sales resistance and encourages compulsive spending.`,
  },
  {
    'Flanagan, Richard ': ` (1961– ). Australian novelist, born in Longford, Tasmania. He won a Rhodes Scholarship to Oxford, wrote non-fiction and novels, including Gould’s Book of Fish (2002), The Unknown Terrorist (2006) and The Narrow Road to the Deep North (2013), which won the Man Booker Prize in 2014.`,
  },
  {
    'Fresnel, Augustin Jean ': `(1788–1827). French physicist. An engineer by profession, he became interested in physical optics and was the first to produce the optical effects now known as interference fringes. His discovery that these effects resulted from interference between two beams of light gave great support to the wave theory of light. He also gave a clear explanation of polarisation and diffraction and invented the compound lighthouse lens.`,
  },
  {
    'Кассий Дион ': ` (c.155–235). Greek historian, born in Nicaea, now Iznik. After a long period of distinguished public service under the emperor *Commodus and his successors, he retired to write a comprehensive history of Rome in 80 books, of which Books 36–50 survive. His careful use of the best available sources give value to his record.`,
  },
  {
    'Gesner, Konrad ': `(1516–1565). Swiss naturalist. He produced encyclopaedic surveys of several subjects, from botany to comparative philology. The best known is his Historia animalium (5 volumes, 1551–58), which surveyed all known forms of animals, and provided the foundation for much later work. He also produced bibliographies of all known Greek, Latin and Hebrew writers.`,
  },
  {
    Gonzaga: `Italian noble family. In 1328 Luigi "" was elected Captain General of Mantua, and from that date until 1707, when the Emperor deposed Ferdinando Carlo, members of the family ruled in the tiny state as marquis (from 1403) and as duke (from 1530).`,
  },
  {
    'Dukakis, Michael ': `American Democratic politician. Of Greek descent, he was educated at Harvard, became a lawyer and lectured at Harvard 1979–82. He was Governor of Massachusetts 1975–79, 1983–91, and defeated Jesse *Jackson to win the Democratic nomination for president in 1988. He was beaten by George H. W. *Bush.`,
  },
  {
    'Eddy, Mary Baker ': `(1821–1910). American founder of the Christian Science movement, born in Bow, New Hampshire.`,
  },
  { 'Epimenides ': `All Cretans are liars` },
  {
    'Fabre, Jean Henri (Де Крюи - Охотники за микробами, Фриш - танец пчел)': `(1823–1915). French entomologist. He was a teacher for many years in Ajaccio, Corsica and (from 1852) at Avignon. In 1870 he retired to Serignan, near Orange, and devoted almost all his time to studying insects, which he observed with the utmost patience and precision. His writings about them were published in many volumes as Souvenirs entomologiques, parts of which had been issued separately as, e.g., The Life and Love of the Insect (1911) and Social Life in the Insect World (1913).`,
  },
  {
    Farnese: `Italian ducal family, rulers of Parma from 1545 when Pope *Paul III invested his illegitimate son Pier Luigi (1503–1547)—the duchy—until 1731.`,
  },
  {
    'Farouk ': `(1920–1965). King of Egypt 1936–1952. Son and successor of *Fuad I, he was educated in England. He followed a vacillating policy during World War II and, in the years that followed, proved himself unable to compete with political turmoil and administrative corruption. At the same time he incurred censure by the extravagance of the court and by much publicised episodes in his ‘private’ life. His exile followed an army revolt under General *Neguib and Colonel *Nasser and he was finally deposed in 1953 when a republic was proclaimed.`,
  },
  {
    'Close, ‘Chuck’ ': `(1940– ). American painter and photographer, born in Washington State. Working in a variety of forms, including collage, woodcuts, lithographs, etchings, finger paintings, tapestry and mosaics, he was known for his massive portraits (e.g. Philip *Glass, Barack *Obama) and there were many international exhibitions.`,
  },
  {
    'Constantine XI Palaeologus ': `(1404–1453). Byzantine Emperor 1448–53. Last Emperor of the East, he was killed by the Turks after the capture of Constantinople, and was buried without a trace.`,
  },
  {
    'Coriolanus, Gaius Marcius ': `(fl. 490 BCE). Roman hero. After being exiled from Rome he became Commander of the Volscian army, heading it against Rome. He stopped his forces outside the city in response to the pleas of his wife and mother, and was killed by the Volsces (Вольски) as a result. *Shakespeare wrote a tragic play on this theme.`,
  },
  {
    'Costa, Lúcio ': `(1902–1998). French-Brazilian architect, born in Toulouse. A follower of *Le Corbusier, appointed as Director of the School of Fine Arts in 1931, he was one of a team responsible for the Ministry of Education and Health building in Rio de Janeiro 1937–43 which is regarded as pioneering modern architecture in Brazil. He designed the plan for the city of Brasilia in 1956.`,
  },
  {
    'Эмиль Куэ': `(1857–1926). French psychotherapist. He believed that auto-suggestion has a powerful effect on sickness (even organic disease) and his slogan ‘Every day, in every way, l am getting better and better’ became extraordinarily popular in the 1920s.`,
  },
  {
    'Crane, Hart ': `(1899–1932). American poet. After working as a reporter in New York, he drifted unhappily through a succession of odd jobs. Most of his poetry, which shows the influence of *Rimbaud and *Whitman, was published in two volumes, White Buildings (1926) and The Bridge (1930), which has been called ‘a mystical interpretation of the past, present and future of America’. He jumped over the side of a ship in despair at his homosexuality and alcoholism.`,
  },
  {
    'Crane, Stephen ': `(1871–1900). American writer and war correspondent. He wrote two novels, the stark and powerful Maggie, A Girl of the Streets (1892), ignored at the time of publication, and The Red Badge of Courage (1895), a sensitive account of heroism under fire in the American Civil War. Its success led to his appointment as war correspondent in the Greco-Turkish and Spanish-American Wars. He also wrote poetry and realistic short stories. From 1898 he lived in England and came to know Joseph *Conrad, Henry *James and other writers. He died of tuberculosis in Germany.`,
  },
  {
    'Cruikshank, George ': `(1792–1878). English caricaturist. Both his father and his elder brother were caricaturists. His cartoons, especially those ridiculing participants in Queen *Caroline’s trial, created his reputation but he is now best known for his book illustrations, especially those for *Grimm’s fairy tales, *Dickens’ Oliver Twist and some of Harrison *Ainsworth’s novels.`,
  },
  {
    'Decatur, Stephen ': `(1779–1820). American naval commander. During the war against Tripoli pirates in the Mediterranean (1801–05), and under fire from 141 guns, he entered the harbour and boarded and burned the captured ship Philadelphia, a feat that Nelson described as the ‘most daring of the age’. He captured the Macedonian in the ‘war of 1812’ against Britain but was forced to surrender in 1814. In 1815 he resumed the contest with the pirate regimes of Algeria, Tunis and Tripoli, defeated them and obtained indemnities. Violence pursued him to the last: he was killed in a duel. To him, Americans owe the toast ‘May she be always in the right: but my country, right or wrong.’`,
  },
  {
    'De Forest, Lee ': `(1873–1961). American physicist and engineer. He introduced the ‘grid’ into the thermionic valve and so made possible the large-scale amplification of radio signals. In 1916 he was responsible for the transmission of the first radio program, and in 1923 he invented a technique for recording sound on film. He later also devised a process for transmitting photographs by radio (E. H. *Armstrong).`,
  },
  {
    'Nok culture ': `The people occupying northern Nigeria from c.500 BC to 200 AD; this culture was important for two reasons. As the earliest known centre of iron-working south of the Sahara, it played a major part in passing on metallurgy and its distinctive terracotta figurines are considered ancestral to the later statuary of the city of IFE.`,
  },
  {
    'Simon Stevin': `His book "De Thiende" ('The Tenth'), published in 1585, laid out a systematic approach to decimal fractions and their use in calculations, which was a major advancement for the time. This work greatly influenced the adoption of decimal notation in Europe.
  `,
  },
  {
    'Jan Swammerdam': `(February 12, 1637 – February 17, 1680) was a Dutch biologist and microscopist. His work on insects demonstrated that the various phases during the life of an insect—egg, larva, pupa, and adult—are different forms of the same animal. As part of his anatomical research, he carried out experiments on muscle contraction. In 1658, he was the first to observe and describe red blood cells. He was one of the first people to use the microscope in dissections, and his techniques remained useful for hundreds of years.`,
  },
  {
    'Houdon, Jean-Antoine ': `(1741–1828). French sculptor. Probably the greatest sculptor since *Bernini, he made powerful sculptures of contemporaries, including *Voltaire, *Rousseau, *Diderot, *Franklin, *Washington and *Jefferson.`,
  },
  {
    'Jolson, Al ': `(1886–1950). American singer and entertainer, born in Russia. He emigrated to the US c.1895, began his career in the New York variety theatre in 1899 and became successful by bringing a powerful voice and melodramatic style to sentimental songs, including Mammy. His film The Jazz Singer (1927) was the first to use sound so that the plot could progress through dialogue.`,
  },
  {
    'Jugurtha ': `King of Numidia 118–105 BCE. Having won control of Numidia (roughly modern Algeria) by murdering two co-rulers, he provoked the intervention of Rome by a massacre of Roman merchants. By going himself to Rome, he gained a respite, but war was soon resumed. Despite early success he was forced to adopt guerrilla tactics by the systematic occupation of his bases by Metellus and *Marius. Finally he was betrayed by his ally, Bocchus of Mauritania, and died in prison at Rome.`,
  },
  {
    'Kamerlingh Onnes, Heike ': `(1853–1926). Dutch physicist. Professor of physics at the University of Leyden 1882–1926, and a pioneer of low-temperature research, he was the first to achieve temperatures within 1° of absolute zero and to liquefy hydrogen (1906) and helium (1908). During his studies of the properties of materials at low temperatures, he discovered the phenomenon of super conductivity, the disappearance of electrical resistance of some metals (e.g. lead) at temperatures near absolute zero. He won the Nobel Prize for Physics (1913).`,
  },
  {
    'График Килинга': `a graph of the accumulation of carbon dioxide in the Earth's atmosphere based on continuous measurements taken at the Mauna Loa Observatory on the island of Hawaii from 1958 to the present day.`,
  },
  {
    'Khama, Seretse ': `(1921–1980). African chief and politician. Grandson of Khama III, king of the Bamangwato people in the Bechuanaland protectorate, he was educated at Balliol College, Oxford. His marriage (1950) to an Englishwoman, Ruth Williams, led to a period of exile but he returned to Bechuanaland in 1956, but renounced his tribal kingship. He founded his own political party and became the first Prime Minister of Bechuanaland 1965–66 and first President of Botswana 1966–80.`,
  },
  {
    'Khashoggi, Jamal ': `(1958–2018). Saudi Arabian journalist, born in Medina. Educated in the United States, he was an editor in Saudi Arabia and a foreign correspondent for CNN, the BBC and other western outlets. Increasingly critical of Muslim fundamentalism and the Saudi royal family, he was murdered and dismembered at the Saudi consulate in Istanbul in October 2018. The CIA identified Crown Prince *Muhammad bin Salman as having ordered the murder. After originally totally denying the killing, the Saudi regime prosecuted and convicted eight unnamed men in a secret trial, characterising them as ‘rogue’ operatives.`,
  },
  {
    'Köchel, Ludwig ': `(1800–1877). Austrian bibliographer. An amateur botanist and mineralogist, in 1862 he published a chronological-thematic catalogue of *Mozart’s compositions.`,
  },
  {
    'Kozintsev, Grigori ': `(1905–1973). Russian-Jewish film director, born in Kiev. Some of his films have been lost and his reputation depends on powerful versions of Don Quixote (1957), Hamlet (1964) and King Lear (1971).`,
  },
  {
    'La Bruyère, Jean de ': `(1645–1696). French essayist and moralist. He studied law but disliked it and eventually (1684) became tutor to Louis de Bourbon, grandson of the Prince de *Condé. In 1688 appeared the work for which he is renowned: Les Caractères ou les Mœurs de ce Siècle, containing disguised and satirical pen-portraits of contemporaries, accompanied by moral maxims. (Характеры)
  `,
  },
  {
    'Land, Edwin ': `(1909–1991). American inventor. He dropped out of Harvard to work on inventions including the Polaroid—a plastic sheet incorporating many tiny crystals that polarised light. This was used in Polaroid sunglasses and the Polaroid "" camera, which provided immediate prints.`,
  },
  {
    'Landowska, Wanda ': `Polish pianist, harpsichordist and musicologist, born in Warsaw. She lived in France 1900–40 and in the US from 1940 onwards, becoming famous for her energetic interpretations of *Händel, *Bach, *Scarlatti and other 17th- and 18th-century composers. She was responsible for the modern revival of the harpsichord, and concertos were written for her by *Falla and *Poulenc.`,
  },
  {
    'Lean, Sir David ': `(1908–1991). English film director. A skilled writer and editor, his 16 films won 28 Academy Awards and include Brief Encounter (1945), Great Expectations (1946), The Bridge on the River Kwai (1957), Lawrence of Arabia (1962), Dr. Zhivago (1965) and A Passage to India `,
  },
  {
    'Lebrun, Charles ': `(1619–1690). French artist. He first studied in Rome and was much influenced by *Poussin. With the support of *Colbert he became something akin to an artistic dictator in the reign of *Louis XIV. He was a leading light in the newly founded Académie Royale and was appointed director of the tapestry factory of Les Gobelins. With these positions he was able to direct and combine the works of artists in different fields into a single decorative scheme. He can be regarded as the virtual creator of the Louis XIV style and it is against this setting that his vast and rather overpowering pictures must be judged. Much of his work is in the Palace of Versailles, where he decorated the state apartments (1679–84).`,
  },
  {
    'Ле Дык Тхо ': `(1911–1990). Vietnamese soldier and politician. Imprisoned 1930–36, 1939–44, he served on the Vietnamese Communist Party’s Politburo from 1955 and negotiated the Paris Peace Accords (January 1973), which ended years of war. Awarded the 1973 Nobel Peace Prize with Henry *Kissinger, he declined his share of the prize money.`,
  },
  {
    'Ninon de Lenclos': `(1620–1705). French courtesan. She was a woman of intelligence and great beauty and amongst her many lovers (and friends) were distinguished men such as *La Rochefoucauld. Her salon in Paris was a meeting place for literary figures. In her last years she took a special interest in her lawyer Arouet’s son, who afterwards took the name *Voltaire.`,
  },
  {
    'Le Nôtre, André ': `(1613–1700). French landscape architect. He succeeded his father as Chief of the Royal Gardens. Later (1657) he became ‘controller’ of the royal buildings as a result of the impression he created by the park and grounds (1656–61) laid out at Vaux-le-Vicomte for Nicolas *Fouquet. Among his other parks were those of St Germain-en-Laye, St Cloud and Chantilly. His greatest achievement was the gardens of Versailles (1662–90).`,
  },
  {
    'Lewis, Matthew ': `English novelist. His sobriquet ‘Monk’ "" derived from his famous ‘Gothic’ romance, Ambrosia, or the Monk (1795), a tale of horror that won him the friendship of Sir Walter *Scott, *Byron and the Prince Regent. Other novels and poems followed in the same vein. He died from yellow fever, caught during a visit to the West Indies to improve the lot of the slaves on estates he had inherited.`,
  },
  {
    'Libeskind, Daniel ': `(1946– ). American architect, artist and set designer, born in Łódź. His buildings include the Imperial War Museum, Manchester; the Jewish Museum, Berlin; and the One World Trade Centre, New York (2003–14).`,
  },
  {
    'Lind, James ': `(1716–1794). Scottish physician. Originally a naval surgeon, he was a pioneer of clinical trials (1747) and recommended adding citrus fruits and salad to sailors’ diets to reduce the incidence of scurvy. His ideas were applied by James *Cook. He also proposed using solar energy to distil salt water and applied hygienic measures to reduce the incidence of typhus.`,
  },
  {
    'Lipchitz, Jacques ': `(1891–1973). French sculptor, born in Latvia. Of Polish-Jewish parentage, he worked in Paris from 1909 and was the first to produce Cubist sculpture. Later works were based on Biblical or mythological themes.`,
  },
  {
    'Loos, Adolf ': `(1870–1933). Austrian architect, born at Brno. He studied in Germany and the US and became an admirer of the American architect Louis *Sullivan, returning to Europe to head the attack on ‘Art Nouveau’ and excessive decoration, designing buildings of uncompromising severity. His ideas were published in his Ornament and Crime (1908). He pioneered the use of reinforced concrete in building municipal housing in Vienna. In 1923 he settled in Paris.`,
  },
  {
    'Lovelock, James ': `(1919–2022). English environmentalist. Originally a medical scientist, he became an effective campaigner to reduce the impact of climate change and proposed the ‘Gaia hypothesis’: that the earth is essentially self-regulating in the long term. He became FRS and CH.`,
  },
  {
    'Lowry, (Clarence) Malcolm ': `(1909–1957). British novelist. Educated at Cambridge, he became an alcoholic whose life was marked by a long series of personal disasters and constant movement (Mexico, Canada, Haiti, the US). His masterpiece is Under the Volcano (1947), a richly textured account of cultural and personal tensions in Mexico in the 1930s. All his other works were published posthumously.`,
  },
  {
    'Lula da Silva, Luiz ': `(1945– ). Brazilian politician, born in Pernambuco. He had very little formal schooling, learning to read at the age of 10, growing up in São Paolo where his father had two households, becoming a street vendor, then an assembly line worker in a motor parts factory. A co-founder of the Workers’ Party (PT—Partido dos Trabalhadores) in 1980, he ran unsuccessfully for the presidency in 1989, 1994 and 1998. He won in 2002 and 2006, serving as President 2003–11.`,
  },
  {
    'Jiang Zemin ': `He was President of the People’s Republic of China 1993–2003. His position was strengthened at the 1997 Party Congress and he made a successful visit to the US.`,
  },
  {
    'Joachim, Joseph ': `(1831–1907). Hungarian-Jewish violinist, composer and teacher. A child prodigy, at the age of 12 he became the protégé of *Mendelssohn who conducted his London début (1844) in *Beethoven’s violin concerto. He made many return visits to England.`,
  },
  {
    'Imhotep ': `(fl. 2650 BCE). Egyptian sage. Traditionally versed in alchemy and astrology as well as medicine, some accounts say that he designed the step pyramid of Sakkara for King *Zoser, whose chief minister he was. In Ptolemaic times he was identified with Asclepios (Aesculapius), the Greek god of healing.`,
  },
  {
    'Ives, Charles ': `His works included The Unanswered Question (1906) and Three places in New England (1908–14), for orchestra, four symphonies, much chamber and piano music and over 100 songs. He is now generally regarded as the greatest American composer.`,
  },
  {
    'Scottsboro case ': `(1931) A US legal case in which nine black youths were falsely accused by two white girls of multiple rape on a train near Scottsboro, Alabama. They were found guilty and sentenced to death or long-term imprisonment. The sensational case highlighted race relations in Alabama and across the USA. The intervention of the Supreme Court and a series of retrials returned a verdict of not proven and all the "" boys were released in the years 1937–`,
  },
  {
    'Sons of Liberty ': `American Revolutionary groups that sprang up in Massachusetts and New York in 1765 to organize colonial opposition to the STAMP ACT. In both colonies, serious riots, propaganda, and boycotts effectively nullified the measure. The organization then spread to other colonies and reactions to English “tyranny” were synchronized by committees of correspondence. They were later responsible for the BOSTON Tea Party (1773), the radicalization of the CONTINENTAL CONGRESS (1774), and the tarring and feathering of pro-British loyalists.`,
  },
  {
    'Lysander ': `(d.395 BCE). Spartan leader. He won a crushing victory over the Athenian fleet at Aegospotami (405), and in 404 took Athens, thus ending the Peloponnesian War. By imposing oligarchic regimes in the Greek city states, he secured Spartan domination throughout Greece. He died fighting in Boeotia, which had become restive under the assertion of Spartan power.`,
  },
  {
    'McClintock, Barbara ': `(1902–1992). American geneticist. Educated at Cornell University, she devoted herself to plant breeding, working at the Cold Spring Harbor Laboratory of the Carnegie Institute from 1942. Her decades of work on maize led to the identification of ‘jumping genes’, mobile elements in chromosomes which helped to explain mutability in hereditary traits in some plants. The importance of her research was not recognised until after the revolution in molecular biology promoted by F. H. C.`,
  },
  {
    'McVeigh, Timothy ': `(1968–2001). American terrorist. A Gulf War veteran, he was convicted of murder for the Oklahoma City bombing of April 1995, in which 168 people died, and was executed by lethal injection.`,
  },
  {
    'Maillol, Aristide ': ` (1861–1944). French sculptor, painter and print-maker. He turned from painting to tapestry designing and then, owing to failing sight, to monumental sculpture (c.1900). Nearly all his works are nudes, realistic in conception but idealised to some extent in execution. He made a special study of the proper use of his materials, clay, bronze and marble.`,
  },
  {
    'Markova, Dame Alicia ': `(1910–2004). English ballerina. She joined the *Diaghilev company in 1924, her work with them being the strongest influence on her future career. She danced with the Sadler’s Wells Ballet (1933–35), toured with her own Markova-Dolin Ballet (1935–38), joined the Ballets Russes de Monte Carlo (1938) and danced with the New York Metropolitan Opera Ballet during World War II.`,
  },
  {
    'Mehmed Aga ': `(d.1618). Turkish architect. A pupil of *Sinan, he designed the magnificent Blue Mosque (Sultan Ahmed Cami) in Istanbul (1609–16).`,
  },
  {
    'Moi, Daniel arap ': ` (1924–2020). Kenyan politician. He became a teacher, entered the Legislative Assembly in 1957 and the House of Representatives in 1961, serving as Minister for Education 1961–62, Local Government 1962–64 and Home Affairs 1964–67. Vice President of Kenya 1967–78, he succeeded Jomo *Kenyatta as President 1978–2002, winning re-election in a reasonably free election in 1992, despite accusations of corruption. A further re-election (1997) was bitterly contested.`,
  },
  {
    'Montez, Lola ': `(1821–1861). Irish-American dancer and adventuress, born in Limerick. Claiming Spanish ancestry on her mother’s side, after a disastrous early marriage she became a dancer, making her London debut in 1843. She toured Europe and her lovers included *Dumas père and *Liszt. In 1846 she reached Munich where the eccentric Bavarian king *Ludwig I became enthralled and created her Countess of Lansfeld. His obsession and her role in government contributed to his forced abdication in the revolution of 1848. She moved to New York in 1851 and toured Australia 1855–`,
  },
  {
    'Murrow, Edward R(oscoe) ': `(1908–1965). American journalist and broadcaster. He worked as a CBS war correspondent, then ran wide-ranging and compassionate interview programs on television, including Person to Person and Small World. George Clooney’s film Good Night, and Good Luck (2005) celebrated his achievement.`,
  },
  {
    'Pachacuti ': `(d.1471). Sapa Inca of Peru 1438–71. He brought the Inca Empire (Tawantinsuyu or ‘Land of the Four Quarters’) to its height, extending from northern Ecuador to central Chile, and built Machu Picchu.`,
  },
  {
    'Pausanias ': `(fl. 143–176 CE). Greek geographer, born in Lydia. He travelled through Greece, Italy and parts of Asia Minor and Africa, and may be regarded as the first writer of guide books, since his Itinerary of Greece gives the history of and legends connected with all the places he visited as well as details of all the works of art he saw there. It has thus inestimable value for the historian, geographer, archaeologist and mythologist.`,
  },
  {
    'Peale, Charles Willson ': `(1741–1827). American painter and gallery director. He opened his own museum in Philadelphia and painted over 1,000 portraits in neo-classical style, including *Franklin, *Washington, *Adams and *Jefferson. His sons Raphaelle, Rembrandt and Titian were also painters.`,
  },
  {
    'Petipa, Marius ': `(1822–1910). French dancer and choreographer. He performed at the Comédie Française and soon became well known throughout France and in Spain. He went to Russia (1847) where he was immediately acclaimed, and he is regarded as one of the founders of the Russian ballet. His best remembered works were produced in association with *Tchaikovsky, e.g. The Sleeping Beauty (1890) and Swan Lake (1895).`,
  },
  {
    'Polycrates ': `(d.522 BCE). ‘Tyrant’ of Samos c.535–522 BCE. Having built a large fleet, he dominated the Aegean as a kind of pirate king. Enriched with spoils, he beautified Samos and made it temporarily the cultural centre of the Greek world, Anacreon being one of the many poets and artists attracted to his court. At last the Persian Governor of Lydia, whose ships and ports had suffered most heavily, lured him to Magnesia where he had him assassinated. The famous legend of the ring and the fish relates to "": told to throw away something precious, lest his prosperity provoke the envy of the gods, he hurled a valuable ring into the sea. When the ring came back to him the next day in the belly of a fish, it was taken as a portent of his doom.`,
  },
  {
    'Reed, Sir Carol ': `English film director. Son of Sir Herbert Beerbohm *Tree, he became an actor and directed 33 films including Odd Man Out (1947), Outcast of the Islands (1952), Oliver! (1968), and three based on Graham *Greene stories The Fallen Idol (1948), The Third Man (1949) and Our Man in Havana (1959).`,
  },
  {
    'Reich, Wilhelm ': ` (1897–1957). Austrian-American psychoanalyst, born in Vienna. One of the most controversial figures in the history of psychoanalysis, he lived in the US from 1939, and developed a theory of sexuality based on the ‘orgone’ (a compound word derived from organism and orgasm). He built ‘orgone accumulators’ to treat patients, but was charged with fraud and when he violated an injunction was sent to jail where he died of heart failure and his publications were burnt by court order.`,
  },
  {
    'Sachs, Hans ': `(1494–1576). German poet and Meistersinger. A shoemaker by trade, he became a ‘master singer’ in the Nuremberg guild (1517), wrote more than 4,000 ‘master songs’ and led the guild from 1554. An enthusiastic Lutheran, he is the central figure in *Wagner’s opera, Die Meistersinger von Nürnberg (1868).`,
  },
  {
    'Vauban, Sebastien ': `(1633–1707). French military engineer. Orphaned and destitute, he joined the army and served under *Condé, having gained (1655) an engineer’s commission in the army of the King. He was primarily engaged in the taking and making of fortresses.`,
  },
  {
    'Wallis, John ': `(1616–1703). English mathematician, born in Ashford, Kent. Educated at Cambridge, he studied medicine but was ordained as a clergyman. Savilian Professor of Geometry at Oxford 1649–1703, his most important work is the Arithmetica infinitorum (1655) which paved the way for the introduction of calculus and the binomial theorem. He introduced negative indices and our present symbol for infinity ∞ (the lemniscate).`,
  },
  {
    'Wessel, Horst ': `German Nazi agitator. Severely injured in a street brawl, he died after refusing attention from Jewish doctors. His senseless death was commemorated in the Nazi anthem "" Song.`,
  },
  {
    'Ангелы Монса ': `городская легенда об одном из эпизодов битвы при Монсе, случившейся 23 августа 1914 года в ходе Первой мировой войны. Согласно общему описанию легенды, британским солдатам стали являться разные прозрачные фигуры людей, которые то появлялись, то исчезали. По одной версии, это были ангелы, по другой — призрачные фигуры английских лучников, участвовавших в битве при Азенкуре, которые посылали фантомные стрелы во врагов. Британцы под влиянием увиденного воспряли духом и в ходе нескольких атак нанесли немцам урон, сдержавший ненадолго их наступление.`,
  },
  {
    'Фе́и из Ко́ттингли (англ. The Cottingley Fairies) ': `серия фотографий, сделанная в 1917 и 1921 гг. двумя девочками-подростками, шестнадцатилетней Элси Райт (англ. Elsie Wright) и её двоюродной сестрой, десятилетней Френсис Гриффитс (англ. Frances Griffiths). Фотографии должны были служить доказательством реальности существования «маленького народа» — но оказались одной из самых талантливых мистификаций XX века`,
  },
  {
    'Альрауны ': `в средневековом фольклоре европейских народов духи низшего порядка, крохотные существа, обитающие в корнях мандрагоры, очертания которых напоминают собой человеческие фигурки. Они дружелюбны к людям, однако не прочь подшутить над ними, порой весьма жестоко. Это оборотни, способные превращаться в кошек, червей и маленьких детей. Они приходятся дальними родственниками кобольдам.`,
  },
  {
    'Танато́з ': `мнимая смерть, защитная реакция у некоторых животных, таких как опоссумы, жуки-пилюльщики, сенокосцы, ужи[1] и пр. Животное замирает, часто принимая неестественную для себя позу, чтобы остаться незамеченным либо отпугнуть активного хищника, избегающего падали. Этим "" отличается от катаплексии, при которой животное просто на время замирает.`,
  },
  {
    'Микроморт ': `единица измерения риска, равная риску, при котором вероятность смерти равна одной миллионной. Используются для измерения риска ежедневных действий человека. `,
  },
  {
    'deadpool ': `game of prediction which involves guessing when someone will die. Sometimes it is a bet where money is involved`,
  },
  {
    'Ars Moriendi («Искусство умирать») ': `название двух латинских текстов (публикуемых примерно с 1415 и 1450), повествующих о процедурах, предшествующих праведной смерти, и объясняющих, как «умереть хорошо» в соответствии с христианскими заповедями позднего средневековья. Эти тексты сначала использовались священниками для обряда отпевания, затем они получили распространение в форме иллюстрированных книг.`,
  },
  {
    'Павший астронавт': `алюминиевая скульптура, изображающая космонавта в скафандре, лежащего навзничь. Фигурка находится в районе Хэдли — Апеннины на Луне, в месте посадки экипажа космического корабля «Аполлон-15» на юго-восточной окраине Моря Дождей. Автор скульптуры — бельгийский художник и гравёр Пол ван Хейдонк. «Павший астронавт» является единственной художественной инсталляцией на Луне.`,
  },
  {
    'Больцмановский мозг ': `гипотетический объект, возникающий в результате флуктуаций в какой-либо системе и способный осознавать своё существование. Возможность возникновения таких объектов рассматривается в некоторых мысленных экспериментах. `,
  },
  {
    'Мозг в колбе ': `разновидность мысленных экспериментов, иллюстрирующих зависимость человека в понимании действительности от его субъективных ощущений. Происходит от гипотезы Злого демона (англ.) Рене Декарта и часто используется для иллюстрации скептицизма`,
  },
  {
    'Цикл анекдотов о слонах ': `популярный цикл анекдотов, распространенный в США с конца 60-х до конца 70-х годов. Анекдоты, составляющие цикл, относятся к так называемому «детскому юмору», обычно имеют форму загадок с абсурдным ответом.`,
  },
  {
    'Cicada 3301 ': `a nickname given to three sets of puzzles posted under the name "3301" online between 2012 and 2014. The first puzzle started on January 4, 2012, on 4chan and ran for nearly a month. A second round began one year later on January 4, 2013, and then a third round following the confirmation of a fresh clue posted on Twitter on January 4, 2014. The third puzzle has yet to be solved. `,
  },
  {
    'Кто положил Беллу в ведьмин вяз? (англ. Who put Bella down the Wych Elm?) ': `граффити, впервые появившееся в 1944 году после обнаружения в 1943 году скелетированных останков женщины в вязе в Хагли Вуд, Хагли (расположенном в поместье Хагли Холл), в Вустершире, Англия. Жертва, чьё убийство предположительно произошло в 1941 году, остаётся неопознанной, и текущее местонахождение её скелета и отчёта о вскрытии неизвестно`,
  },
  {
    'Криптос ': `скульптура с зашифрованным текстом работы американского художника Джим Санборна, расположенная перед центральным офисом ЦРУ в Лэнгли (Виргиния). Начиная с момента открытия скульптуры, 3 ноября 1990 года, удалось расшифровать только первые три секции. Оставшаяся четвёртая часть стала одной из самых известных в мире неразгаданных проблем`,
  },
  {
    'Кадме́йская побе́да ': `победа, доставшаяся слишком дорогой ценой; победа, равносильная поражению.`,
  },
  {
    'Учёные сте́пени Ми́кки-Ма́уса ': `дисфемизм, используемый для обозначения недействительного и низкопробного университетского образования или полученной квалификации`,
  },
  {
    'The Knickerbocker Club ': `a gentlemen's club in New York City that was founded in 1871. It is considered to be the most exclusive club in the United States and one of the most aristocratic gentlemen's clubs in the world.`,
  },
  {
    'Преппи ': `стиль в одежде, произошедший от формы учащихся «college preparatory schools» — престижных частных школ, готовящих к поступлению в элитные высшие учебные заведения. `,
  },
  {
    'Правило одной капли крови ': `принцип социальной и правовой классификации населения, принятый в ряде штатов США в первой половине XX века. Согласно этому принципу человек с хотя бы одним чернокожим предком по отцовской или материнской линии («одна капля чёрной крови») должен был считаться чернокожим сам, независимо от его фактического цвета кожи — иначе говоря, он причислялся к группе, обозначаемой как «негры» `,
  },
  {
    'Драпетомания ': `гипотетический психиатрический диагноз, существование которого выдвинул в 1851 году американский врач Сэмюэл Картрайт из Луизианской медицинской ассоциации для объяснения имевшейся у чёрных рабов тенденции к побегам из рабства. Он объяснял побеги рабов навязчивым стремлением к свободе. `,
  },
  {
    'Виггер ': `сленговый термин для обозначения белого человека, который в повседневной жизни и быту имитирует манеры, сленг и одежду, стереотипно ассоциирующуюся с афроамериканской культурой, особенно связанной с хип-хопом и идентичностью с чёрным криминалитетом.`,
  },
  {
    'Мондо ': `составная часть названия ряда документальных фильмов, как правило, касающихся сенсационных тем и явлений. Часто напоминают собой псевдо-документальные фильмы. Также это стиль документального кино, задаваемый образчиками жанра.`,
  },
  {
    'Черкесские красавицы ': `выражение, применяемое для обозначения идеализированного образа женщины черкесского народа на Северном Кавказе. `,
  },
  {
    'Принцип Смурфетты ': `практика в художественных произведениях, в первую очередь в фильмах и телесериалах, включать в полностью мужской состав персонажей только одну женщину.`,
  },
  {
    'Пузырько́вая ка́мера ': `устройство или прибор для регистрации следов (или треков) быстрых заряженных ионизирующих частиц, действие которого основано на вскипании перегретой жидкости вдоль траектории частицы.
  Была изобретена Дональдом Глазером (США) в 1952 году. За своё изобретение Глазер получил Нобелевскую премию по физике в 1960 году.
  `,
  },
  {
    'зэ́ппинг ': `практика быстрого переключения каналов телевизора на дистанционном пульте, без определенной цели, либо для сохранения истории. `,
  },
  {
    'Ван Симэн ': `(родился около 1096 года — умер около 1119 года) — китайский художник.
  «Горы и воды на тысячу ли». Свиток размером около 12 метров в длину и более полуметра в ширину представляет собой одну из самых больших картин, созданных за всю историю китайской живописи. Художник изобразил грандиозную панораму гор и вод в соответствии со старинным стилем так называемого сине-зелёного пейзажа, выработанным во времена династии Тан аристократами из царствовавшего семейства Ли. `,
  },
  {
    Гаокао: `всекитайские государственные вступительные экзамены в вузы. Because it is one of the most influential examinations in China and students can only take the test once a year, both teachers and students undergo tremendous pressure in preparing for and taking the exam. `,
  },
  {
    'Кайданку ': `китайские детские штаны с открытым пахом, которые носят малыши по всему материковому Китаю. Часто из плотной ткани, эти штаны имеют не прошитый шов на ягодицах или отверстие по центру ягодиц. Эта конструктивная особенность даёт детям мочиться и испражняться, не спуская штанов. `,
  },
  {
    'Бе́би-хатч ': `специально оборудованное место для анонимного отказа от ребёнка и передачи его на попечительство государственным службам и органам. Может располагаться при медицинских учреждениях (государственных и частных), при религиозных организациях.`,
  },
  {
    'Бильбоке́ ': `игрушка; представляет собой шарик, прикреплённый к палочке. В процессе игры шарик подбрасывается и ловится на острие палочки или в чашечку. Побеждает тот, кто сможет поймать шарик наибольшее количество раз подряд. `,
  },
  {
    'Гипока́уст ': `наиболее распространённый тип классической античной, в особенности древнеримской, отопительной системы, предназначенной для обогрева одноэтажных зданий. Представлял из себя открытое пространство под полом, которое обеспечивало доступ горячего воздуха в комнаты над ним из печи или камина`,
  },
  {
    'Имплювий ': `бассейн в средиземноморском доме. Внутренний водоём возник впервые в древнеиталийском и древнеримском жилище: домусе, затем стал широко использоваться в древнеримской архитектуре, когда в условиях засушливого климата в целях экономии воды древний очаг на дне атриума был убран, и на его месте появился четырёхугольный неглубокий бассейн`,
  },
  {
    'Пери́птер ': `прямоугольное в плане сооружение, со всех четырёх сторон окружённое колоннадой. Наиболее распространённый тип древнегреческого храма времён архаики и классики`,
  },
  {
    'Коутоу ': `обряд тройного коленопреклонения и девятикратного челобитья, который по китайскому дипломатическому этикету было принято совершать при приближении к особе императора.`,
  },
  {
    'Салют Беллами ': `ритуал произнесения клятвы верности флагу США: во время произнесения слов «Клянусь в верности моему флагу», стоять «смирно», правая рука поднимается к груди, потом резко вскидывается вверх и направляется прямо на флаг. Этот ритуал впервые выполнил Френсис "" на Дне Колумба 12 октября 1892 года. `,
  },
  {
    'Акамбэ ': `распространённый японский жест, наиболее известный своими проявлениями в манге и аниме, характерный для цундэрэ-персонажей, как правило, юного возраста. Он заключается в том, что человек указательным пальцем оттягивает вниз нижнее веко, обнажая внутреннюю его часть. Часто это сопровождается высунутым кончиком языка и звуком «Behhh-dah!». Считается, что подобным образом один человек дразнит другого или выказывает неуважение.`,
  },
  {
    'Движение Чипко': `общественное социально-экологическое движение, использующее методы сатьяграхи (тактики ненасильственной борьбы, разработанной Махатмой Ганди), в первую очередь прикрепление себя к деревьям, которые собираются срубить.`,
  },
  {
    'Сеу́тская стена́ ': `система пограничных сооружений, отделяющих испанский полуэксклав "" от королевства Марокко. Построена в 1993 году на средства ЕС с целью защиты Европы от неконтролируемого наплыва нелегальных мигрантов из Африки. `,
  },
  {
    'Линия Ке́рзона': `демаркационная линия между Польшей и РСФСР, предложенная министром иностранных дел Великобритании в 1920 году. `,
  },
  {
    'Putrajaya ': `planned capital city which functions as the administrative capital and the judicial capital of Malaysia.`,
  },
  {
    'Hitchens`s razor ': `what can be asserted without evidence can also be dismissed without evidence`,
  },
  {
    'Семь отроков Эфесских ': `христианские мученики, заживо замурованные в пещере и проспавшие там несколько веков. Почитаются также в исламе `,
  },
  {
    'Позолоченный век ': `эпоха быстрого роста экономики и населения США после гражданской войны и реконструкции Юга. Название происходит из книги Марка Твена и Чарльза Уорнера.`,
  },
  {
    'Чудо на реке Ханган ': `распространённое название экономического чуда Южной Кореи, за полвека превратившейся из аграрной страны, разрушенной Корейской войной, в процветающую высокотехнологичную экономику. `,
  },
  {
    Хаскала́: `движение, возникшее в среде евреев Европы во второй половине XVIII века, которое выступало за принятие ценностей Просвещения, большую интеграцию в европейское общество и рост образования в области светских наук, иврита и истории еврейского народа. `,
  },
  {
    'Поколение сампхо ': `термин для обозначения поколения южнокорейской молодёжи, которое отказывается от свиданий, брака и рождения детей. Многие отказываются от этих трёх вещей из-за социальных и экономических проблем, таких как рост стоимости жизни, плата за обучение, дефицит доступного жилья и так далее`,
  },
  {
    'Поколение сатори ': `термин для описания поколения молодых японцев, которые как будто достигли "", состояния, свободного от материальных желаний, но которые на самом деле отказались от амбиций, поиска работы и надежд на построение карьеры из-за макроэкономических тенденций в Японии`,
  },
  {
    'Молчаливое поколение ': `поколение людей, родившихся примерно с 1928 по 1945 год, следующее за Великим поколением и предшествующее беби-бумерам. `,
  },
  {
    'Клубничное поколение ': `китайский неологизм, которым называют тайваньцев, родившихся после 1981 и до 1990 года, которые «легко мнутся» подобно "", то есть не выдерживают социального давления или тяжёлого труда, в отличие от поколения их родителей. Похоже на поколение сатори в Японии и на поколение сампхо/поколение N-по в Южной Корее.`,
  },
  {
    'Дой Мой ': `комплексная программа реформ в экономической, политической, социальной и культурных сферах, инициированная Коммунистической партией Вьетнама. Официально принята на 6-м съезде Коммунистической партии Вьетнама в декабре 1986 года`,
  },
  {
    'Балти́йские тигры ': `условное наименование государств Прибалтики (Эстония, Латвия, Литва) в период их экономического бума (с 2000 по 2006 год) `,
  },
  {
    'Хичкоковская блондинка': `В разные годы роли героинь, соответствовавших данному образу, играли Грейс Келли, Ким Новак, Эва Мари Сейнт, Типпи Хедрен, Ингрид Бергман`,
  },
  {
    'Девять достойных ': `персонификация идеалов рыцарства и вооружённой добродетели в средневековой христианской (католической) традиции. Девять человек, избранных в качестве образа для подражания всем европейским дворянам, которые обязались с оружием в руках стоять за веру.`,
  },
  {
    'У́ладский цикл (англ. Ulster cycle)': `принятое в науке обозначение произведений средневековой ирландской литературы, героями которых являются король Конхобар, сын Несс, Кухулин, Коналл Кернах, Лэаре Буадах и другие герои, связанные с ирландской провинцией ""`,
  },
  {
    'Давид Сасунский': `средневековый армянский эпос, повествующий о борьбе богатырей из Сасуна (область в исторической Армении, ныне в Турции) против арабских захватчиков. Сложился в VIII—X (не позднее XIII) веках.`,
  },
  {
    'Се́меро про́тив Фив': `легендарное противостояние фиванских престолонаследников, братьев Этеокла и Полиника, чьим отцом был сам многострадальный Эдип. За исключением Адраста из Аргоса, все они погибли, однако за них отомстили их наследники — эпигоны.`,
  },
  {
    'Пирами́ды Го́лода ': `сооружения, разработанные российским инженером "". Относятся к так называемым «энергетическим пирамидам», которые в оккультизме считаются преобразователями или накопителями некой неизвестной науке «биоэнергии».`,
  },
  {
    'лей-ли́нии ': `понятие, на сегодняшний день считающееся псевдонаучным, называющее линии, по которым расположены многие места, представляющие географический и исторический интерес, такие как древние памятники, мегалиты, курганы, священные места, природные хребты, вершины, водные переправы и другие заметные ориентиры. `,
  },
  {
    'Тёмная триада ': `представляет собой группу, включающую три личностные черты: нарциссизм, макиавеллизм и психопатию`,
  },
  {
    'Яра́нга ': `традиционное переносное или стационарное жилище чукчей. Имеет купольную форму и высоту от 3,5 до 4,7 метра и диаметр от 5,7 до 7—8 метров`,
  },
  {
    'Вапоре́тто ': `речной трамвай, маршрутный теплоход, главный вид общественного транспорта в островной части Венеции`,
  },
  {
    'Эффект Матильды': ` это систематическое отрицание вклада женщин в науку, умаление значимости их работы и приписывание трудов женщин коллегам мужского пола. Этот эффект был впервые описан суфражисткой и аболиционисткой "" Гейдж. Примеры: Нетти Стивенс, Марии Склодовской-Кюри, Лизы Мейтнер, Мариетты Блау, Розалинд Франклин и Джоселин Белл Бернелл  `,
  },
  {
    'Эффект Зейгарник ': `психологический эффект, заключающийся в том, что человек лучше запоминает прерванные действия, чем завершённые. `,
  },
  {
    'Система Лейтнера ': `широко используемый метод для эффективного запоминания и повторения с помощью флэш-карточек, предложенный немецким ученым и журналистом "" в 70-е годы XX века.
  Эта система — простое применение принципа интервальных повторений, где карточки повторяются через увеличивающиеся интервалы.
  `,
  },
  {
    'Jan Ingenhousz ': `(8 December 1730 – 7 September 1799) was a Dutch-born British physiologist, biologist and chemist.
  He is best known for discovering photosynthesis by showing that light is essential to the process by which green plants absorb carbon dioxide and release oxygen. He also discovered that plants, like animals, have cellular respiration. In his lifetime he was known for successfully inoculating the members of the Habsburg family in Vienna against smallpox in 1768 and subsequently being the private counsellor and personal physician to the Austrian Empress Maria Theresa.
  `,
  },
  {
    'David Vetter ': `an American who was a prominent sufferer of severe combined immunodeficiency (SCID), a hereditary disease which dramatically weakens the immune system. Individuals born with SCID are abnormally susceptible to infections, and exposure to typically innocuous pathogens can be fatal. Vetter was referred to as "David, the bubble boy" by the media, as a reference to the complex containment system used as part of the management of his SCID. `,
  },
  {
    'Шахматы острова Льюис ': `набор из 78 шахматных фигур, изготовленных в Средние века. Материалом для большинства из них послужил моржовый клык, а остальные выполнены из китового зуба. Фигуры вместе с 14 шашками для игры типа нард и пряжкой для ремня были обнаружены в 1831 году на шотландском острове "" (Внешние Гебриды). `,
  },
  {
    'Стаунтон ': `дизайн комплекта шахматных фигур, созданный в середине XIX века и в настоящее время считающийся стандартным (классическим). Автором дизайна комплекта считается Натаниэль Кук. Комплекты являются рекомендованными для соревнований, проводимых ФИДЕ`,
  },
  {
    'Цилиндр Кира ': `глиняный цилиндр, на котором "" повелел выбить клинописью список своих побед и милостивых поступков, а также перечисление предков. Артефакт был обнаружен при раскопках Вавилона в 1879 году и поступил в Британский музей.
  Цилиндр получил широкую известность после того, как последний шах Ирана в 1960-е годы провозгласил нанесённый на него текст первой в истории декларацией прав человека: "" высказывается за отмену рабства и за свободу вероисповедания. Шах пообещал строить свою политику в соответствии с заветами основателя персидской государственности.
  `,
  },
  {
    'Шлем из Саттон-Ху ': `это украшенный шлем, найденный в 1939 году при раскопках погребальной ладьи. Предполагают, что шлем, погребённый приблизительно в 625 году, принадлежал королю Редвальду, причём богатый орнамент, возможно, указывает на то, что сам шлем по своим функциям был аналогом короны. Шлем стал самым культовым предметом, найденным в результате одного из самых грандиозных археологических открытий и представляет собой один из наиболее значительных артефактов англосаксонской эпохи. `,
  },
  {
    'Портлендская ваза ': `выдающееся произведение античного искусства августовского, или римского, классицизма: «золотого века» правления императора Октавиана Августа (27 г. до н. э. — 14 г. н. э.). Шедевр римского стеклоделия.`,
  },
  {
    'Кулнинг ': `пастуший зов, вокальная техника по принципу ёйги, йойка или йодля, использующаяся традиционно в Швеции (провинция Даларна), Норвегии, а также в Финляндии, чтобы созывать пасущихся животных или отпугивать хищников (волков и медведей). Со времён Средневековья пастухами обычно становились женщины, поэтому кулнинг исполняется женщинами.`,
  },
  {
    'Закон Янте ': `устойчивое выражение для объяснения скандинавского склада ума. Имеется в виду сформулированный датско-норвежским писателем Акселем Сандемусе в романе «Беглец пересекает свой след» (издан в 1933 году) свод правил, согласно которому общество не признаёт права своих членов на индивидуальность.`,
  },
  {
    'Лагом ': `один из стереотипов, описывающих шведский национальный характер. Переводится на русский язык как «в меру»; `,
  },
  {
    Трикве́тр: `религиозный символ. В наши дни слово используется исключительно для обозначения сложной фигуры, образованной пересечением трёх vesica piscis, иногда с добавлением окружности внутри или снаружи фигуры.`,
  },
  {
    'Фараваха́р ': `главный символ зороастризма, изображающий Фраваши, подобие ангела-хранителя в авраамических религиях. Изначально представлял собой «окрылённое солнце» (символ власти и божественного происхождения), к которому позже был добавлен человеческий образ. В современном зороастризме осмысливается как проводник человеческой души на её жизненном пути к единению с Ахура-Маздой. Этот религиозно-культурный символ при династии Пехлеви трактовался как символ иранской идентичности.`,
  },
  {
    'Фика ': `шведская традиция делать перерыв в работе, чтобы выпить кофе. Перерыв такой шведы устраивают каждые два часа, и длится он не более 15 минут.`,
  },
  {
    'Семь видов печенья ': `шведская и датская гастрономическая традиция, обязывающая предложить к кофе строго семь видов этого кондитерского изделия.`,
  },
  {
    'Синдром Бюллербю ': `идеализация Швеции в немецкоговорящих странах. Он включает в себя стереотипное восприятие Швеции исключительно с положительными ассоциациями. Примерами таких наивно-романтических представлений могут быть: деревянные дома, чистые озёра, зелёные леса, лоси, светлые волосы, счастливые люди, праздник Мидсоммар.`,
  },
  {
    'Манэки-нэко ': `распространённая японская фигурка, часто сделанная из фарфора или керамики, которая, как полагают, приносит её владельцу удачу. Скульптура изображает кошку с поднятой вертикально лапой, и обычно выставляется в витринах магазинов, в ресторанах, комнатах патинко, на складах и в других местах. `,
  },
  {
    'Евльский козёл ': `огромная сделанная из соломы фигура сказочного козла, сопровождающего шведского рождественского персонажа Юлебукка. Устанавливают в центре города Евле. Стал знаменитым в том числе и благодаря тому, что почти каждый год хулиганами предпринимаются попытки его сжечь.`,
  },
  {
    'Ка́ди ': `мусульманский судья-чиновник, назначаемый правителем и вершащий правосудие на основе шариата`,
  },
  {
    'Разворот Кройфа': `футбольный финт, использующийся профессиональными футболистами по всему миру. Назван в честь "", применившего данное движение на чемпионате мира 1974 года`,
  },
  {
    'Тест Ку́пера ': `общее название ряда тестов на физическую подготовленность организма человека, созданных американским доктором в 1968 году для армии США. Наиболее известна разновидность, заключающаяся в 12-минутном беге: пройденное расстояние фиксируется, и на основе этих данных делаются выводы в спортивных или медицинских целях. `,
  },
  {
    'Peek-a-boo ': `boxing style which received its common name for the defensive hand position, which are normally placed in front of the face,[1][2] like in the baby's game of the same name. The technique is thought to offer extra protection to the face whilst making it easier to jab the opponent's face. `,
  },
  {
    'Файв-бай-файв ': `баскетбольный термин, означающий набор игроком в течение одного матча пяти и более пунктов по всем основным статистическим показателям. В качестве показателей выступают очки, подборы, результативные передачи, перехваты и блок-шоты`,
  },
  {
    'Pound-for-pound ': `термин, употребляемый в единоборствах, в основном в боксе, в отношении бойца, который признан лучшим вне зависимости от весовой категории. `,
  },
  {
    'Аутфа́йтер ': `стиль боксирования, при котором боксёр предпочитает ведение боя на дальней дистанции. Является противоположностью свормера.
  Яркий пример —  Мохаммед Али.
  Также примечательные аутфайтеры: Леннокс Льюис, Джин Танни, Вилли Пеп, Рой Джонс, Василий Ломаченко и Владимир Кличко.
  `,
  },
  {
    'Экидэн ': `спортивное соревнование в беге по шоссе, представляющее собой эстафету на марафонской дистанции.
  Дистанция на 42 195 метров пробегается в 6 этапов, которые распределены в следующем порядке: 5 км, 10 км, 5 км, 10 км, 5 км, 7,195 км. `,
  },
  {
    'Схевенингенская система ': `система проведения шахматных соревнований, при которой каждый член одной группы участников играет со всеми членами другой группы. `,
  },
  {
    'Бессмертная партия ': `шахматная партия, сыгранная 21 июня 1851 года в Лондоне между Адольфом Андерсеном (белые) и Лионелем Кизерицким (чёрные). Примечательна большим количеством серьёзнейших жертв, которые принесли белые для достижения победы. Одна из самых знаменитых партий за всю историю шахмат, была единодушно признана высшим образцом романтических шахмат — течения, господствовавшего в середине XIX века.`,
  },
  {
    'Неувядаемая партия (Вечнозелёная партия)': `партия в шахматы между Адольфом Андерсеном и его давним соперником Жаном Дюфренем. Эта партия была сыграна в Берлине в 1852 году. Она отличалась блестящим комбинационным стилем и множество раз публиковалась в печати.`,
  },
  {
    'Оперная партия Морфи ': `знаменитая шахматная партия, сыгранная в 1858 году между американским шахматистом Полом Морфи и двумя любителями — герцогом Карлом Брауншвейгским (низложенным в Брауншвейге в 1830 году и с тех пор жившим в Париже) и французским аристократом графом Изуаром, которые играли, советуясь друг с другом. Морфи выиграл партию в поучительной манере. Партия часто используется учителями шахмат для демонстрации важности быстрого развития собственных фигур, а также для других уроков.`,
  },
  {
    'Рейд Дулиттла ': `эпизод Второй мировой войны, в котором 16 средних бомбардировщиков наземного базирования B-25 «Митчелл» 18 апреля 1942 под командованием подполковника "", взлетев с американского авианосца «Хорнет», впервые в этой войне атаковали территорию Японии. Рейд был нанесён в ответ на нападение на Пёрл-Харбор (7 декабря 1941).`,
  },
  {
    'Поля́ сме́рти ': `собирательное название мест массовых захоронений жертв террористического режима Красных Кхмеров, находившихся у власти в Камбодже (Кампучии) в период с 1975 по 1979 год.`,
  },
  {
    'Сантебал ': `тайная политическая полиция левоэкстремистского режима «Красных кхмеров», находившихся у власти в Камбодже в 1975—1979 годах. `,
  },
  {
    'Tiger Parenting': `WHAT STYLE OF PARENTING, typically associated with Chinese-Americans, involves authoritarian parents pushing their kids towards academic and extra-curricular excellence? The term was coined in 2011 when Yale Law School professor Amy Chua published her memoir “Battle Hymn of the _____ Mother".`,
  },
  {
    'Matchbox (Prompt: Tinder); Matchbox sounded too similar to Match.com and was hence renamed Tinder.': `This company was originally named after an object to hint at the "fiery passion" it was meant to ignite in its users. Ultimately, the founders chose another name that conveyed a similar theme. IDENTIFY THE ORIGINAL NAME of the company, also the name of a toy brand introduced by Lesney Products in 1953. The toy brand got its name from its distinctive packaging.`,
  },
  {
    'Cherenkov Radiation': `In a 2009 NPR interview, Watchmen co-creator Dave Gibbons confirmed that the blue look of the character Doctor Manhattan was based on the blue glow emitted by nuclear reactor piles underwater. WHAT PHENOMENON, named after a Soviet physicist, is this?`,
  },
  {
    'Золото́й молото́к (молоток Маслоу)': `антипаттерн проектирования, заключающийся в использовании одного и того же решения везде, в том числе путём искусственной подгонки условий, требований, ограничений задачи под данное решение.`,
  },
  {
    'Saint Lucia; One of the only two countries named after a woman, alongside Ireland.': `WHICH CARIBBEAN ISLAND NATION'S tourism tagline is "Let her inspire you"? With Sir Arthur Lewis (Economics, 1979), and Derek Walcott (Literature, 1992), this country has the highest Nobel laureates per capita of any country in the world.`,
  },
  {
    Grammarly: `WHAT CLOUD-BASED TOOL was launched by Ukrainians Alex Shevchenko, Max Lytvyn, and Dmytro Lider in 2009 as a program for universities to teach their students English? It later transformed into a writing assistant for users to proofread and edit their documents.`,
  },
  {
    'Battle of Solferino': `Henri Dunant was inspired to form the International Committee of the Red Cross after he witnessed the suffering of wounded soldiers following which 1859 battle that was fought between the Franco-Sardinian Alliance and the Austrian Army? The decisive engagement played a crucial part in the process of Italian Unification.`,
  },
  {
    'Battenberg cake ': `Which light sponge cake was baked to celebrate the wedding of Princess Victoria to Prince Louis in 1884? It gets its name from the German town that was the seat of the prince's family.`,
  },
  {
    Ouzo: `What dry anise-flavoured liqueur is consumed widely as an apéritif in Greece? It lends its name to the scientific phenomenon where a milky oil-in-water emulsion is formed when water is added to this or any related transparent liqueurs or spirits.`,
  },
  {
    'Oksana Chusovitina': `Identify this gymnast who won gold as a part of the Unified Team at the 1992 Barcelona Olympics, Asian Games and World Championship medals representing Uzbekistan, and a silver in vault representing Germany in Beijing 2008. She holds the distinction of being the oldest gymnast to have competed at the Olympics.`,
  },
  {
    'Мо́рис Се́ндак ': `американский детский писатель и художник-иллюстратор, мировую известность которому принесла книжка с картинками «Там, где живут чудовища» (1963).`,
  },
  {
    'Arak ': `Served commonly with mezze, what anise-flavoured spirit is consumed widely in the Levantine countries Syria, Lebanon, Iraq and Israel? It is not to be confused with a distilled alcoholic drink popular in South Asia and made from the fermented sap of coconut flowers or sugarcane.`,
  },
  {
    'Pandas ': `Although it is used for organizing and manipulating all types of data, which python library, gets its name from data collected from panel studies, which are designed to collect data from a subset of respondents at specified intervals over a long period of time, and have no connection whatsoever to animals conversant with martial arts.`,
  },
  {
    'Rakı ': `What alcoholic drink made of twice-distilled grapes and anise is widely consumed in Turkey? It is traditionally consumed with chilled water on the side or partly mixed in it.`,
  },
  {
    Меру: `Going by the ancient texts on architecture and sculpture, if the Indian temple complex is designed to mirror the cosmos, which mythical location do the towering gopurams (temple towers) symbolise? It is even more accurately imagined in the five towers of the largest temple complex in the world at Angkor Wat.`,
  },
  {
    'Всемирное семенохранилище на Шпицбергене ': `туннель-хранилище, в который помещаются для безопасного хранения образцы семян основных сельскохозяйственных культур. Находится на глубине 130 метров.`,
  },
  {
    'Answer: Battle of Salamis; the 2014 movie is 300: Rise of an Empire': `Yet Zeus, the all-seeing, grants to Athene’s prayer that the wooden wall only shall not fall. This line in a prophecy led Themistocles to propose a strategy in a narrow strait, thereby neutralising an invading force's superior numbers and using his more maneuverable triremes to resounding success in which naval battle from 480 BC? A 2014 movie sequel is also partly based on events from this battle.`,
  },
  {
    qilin: `legendary hooved chimerical creature that appears in Chinese mythology, and is said to appear with the imminent arrival or passing of a sage or illustrious ruler. They are a specific type of the lin mythological family of one-horned beasts. They also appears in the mythologies of other Chinese-influenced cultures.`,
  },
  {
    'Nicaragua Canal': `Before embarking on his landmark Arctic expeditions in the 1900s, Robert Peary was an engineer on the surveys for a project in Central America. Which project that remains unrealised till date?`,
  },
  {
    'The Battle of Jutland ': `a naval battle fought between Britain's Royal Navy Grand Fleet, under Admiral Sir John Jellicoe, and the Imperial German Navy's High Seas Fleet, under Vice-Admiral Reinhard Scheer, during the First World War. The battle unfolded from 31 May to 1 June 1916. It was the largest naval battle and the only full-scale clash of battleships of the war.`,
  },
  {
    'Панче́тта ': `разновидность бекона, грудинки, типичный мясной продукт итальянской кухни. Представляет собой кусок бекона с прослойками сала и мяса из брюшной части свиньи беконной породы, вяленый в соли, специях и травах. В зависимости от региона, в качестве приправ используется розмарин и шалфей. Наиболее жирные куски используются в различных блюдах, например, для приготовления Pasta alla carbonara.`,
  },
  {
    'BROKEBACK MOUNTAIN': `The 1999 publication Close Range: Wyoming Stories, written by Annie Proulx, begins with "The Half-Skinned Steer" and ends with what more renowned short story?`,
  },
  {
    'BRITTNEY GRINER': `Along with being an eight-time WNBA All-Star for the Phoenix Mercury, she's also played for UMMC Ekaterinburg. Name this champion basketball player, in the news in 2022 unrelated to sports.`,
  },
  {
    'Дорогой Эван Хансен ': `американский мюзикл. Главный герой — старшеклассник, страдающий от социального тревожного расстройства, которое мешает ему контактировать с людьми и заводить друзей. Название является отсылкой к началу писем, которые главный герой писал сам себе по совету терапевта.`,
  },
  {
    'GEORGE WASHINGTON CARVER': `Born into slavery in Missouri, what scientist received bachelor's and master's degrees from Iowa State Agricultural College before moving to Alabama to direct the newly organized department of agriculture at the Tuskegee Normal and Industrial Institute?`,
  },
  {
    'HACK-A-SHAQ (плохо бил штрафные)	': `Professor Lou Matz has argued that this typically late-game strategy is inherently unethical, as it violates the essence of the game. Don Nelson pioneered it against Dennis Rodman, but a later victim gave the strategy its name.`,
  },
  {
    'Сон Ганхо': `What Korean leading man burst onto the world scene with starring roles in Joint Security Area, Sympathy for Mr. Vengeance, and Memories of Murder, later gaining greater fame in the West as the patriarch of the con artist family in Parasite?`,
  },
  {
    'ALGERIAN WAR': `Agnès Varda's Cléo from 5 to 7, Jean-Luc Godard's Le petit soldat, and Jacques Demy's The Umbrellas of Cherbourg broke a taboo by featuring characters drafted to serve France in what military conflict? Later films by Mohammed Lakhdar-Hamina and Rachid Bouchareb examined this conflict from the opposing side's perspective, while Italian filmmaker Gillo Pontecorvo created perhaps its most definitive cinematic depiction.`,
  },
  {
    Тедди: `специальная награда Берлинского кинофестиваля, вручаемая лучшим фильмам, затрагивающим проблемы гомосексуальных людей, показанным в рамках смотра.`,
  },
  {
    'KANNADA; TELUGU': `The two highest-grossing Indian films of 2022 to date, Prashanth Neel's K.G.F.: Chapter 2 and S.S. Rajamouli's RRR, are Dravidian language productions. Name either language, the former with roughly 45 million primary speakers and centered in a regional industry known as Sandalwood, and the latter with roughly 80 million primary speakers and centered in a regional industry known as Tollywood.`,
  },
  {
    'CHANTAL AKERMAN': `Best known for her 1975 avant-garde depiction of a single mother's daily routine, Jeanne Dielman, 23 quai du Commerce, 1080 Bruxelles, what Belgian filmmaker explores her relationship with her own mother in the documentaries News from Home and No Home Movie?`,
  },
  {
    'MAX OPHÜLS': `What itinerant director, known for fluid tracking shots and sumptuous romances, directed classics in Germany, Italy, France, and the U.S. from the 1930s through the 1950s? American film critic Andrew Sarris decreed this director's last film, Lola Montes, to be the greatest film ever made, and his son Marcel returned to his father's erstwhile home countries to make the documentaries The Sorrow and the Pity and Hotel Terminus about the Third Reich.`,
  },
  {
    'Маргерит Дюрас': `What French writer explored the relationship between East and West in her screenplay for Hiroshima mon amour (1959), her film India Song (1975), and her semi-autobiographical 1982 book L'amant, which was adapted into a 1992 film starring Jane March and "Big" Tony Leung Ka-fei as the Chinese-Vietnamese man with whom the protagonist has a youthful affair?`,
  },
  {
    'Месть кинематографи́ческого опера́тора; MAN WITH A MOVIE CAMERA; CAMERAPERSON': `Name any one of the following three films, the titles of which reference a crew member who handles a certain type of film equipment: Ladislas Starevich's 1912 short film about a love triangle depicted using stop-motion animated insects; Dziga Vertov's 1929 city symphony about Moscow, Kyiv, and Odessa; or Kirsten Johnson's intimate 2016 film memoir about her globetrotting career.`,
  },
  {
    'RYUICHI SAKAMOTO': `Which influential Japanese electronic musician, composer, and occasional actor wrote music for The Last Emperor (with David Byrne and Cong Su, together winning an Academy Award), High Heels, The Adventures of Milo and Otis, and Merry Christmas, Mr. Lawrence?`,
  },
  {
    'ACHMED (THE ADVENTURES OF PRINCE ACHMED)': `German artist Lotte Reiniger devised her own camera system and cut out myriad paper silhouettes for her 1926 Arabian Nights-inspired magnum opus. The earliest surviving animated feature film, it depicts the adventures of what prince?`,
  },
  {
    'THE PHANTOM CARRIAGE (Возница); WILD STRAWBERRIES': `Name either film in which Victor Sjöström (Виктор Шёстрём) plays a man whose fantasy encounters with his past prompt him to reflect on his mortality and misspent life. One was directed by Sjöström himself and released in 1921, while the other was directed by Ingmar Bergman and released in 1957.`,
  },

  {
    'Giuseppe Volpi': `When the film festival in Venice was created in 1932, this man who had been Benito Mussolini’s minister of finance—was appointed as the president of the festival, Luciano de Feo was the head of the executive committee, and Antonio Maraini was the festival’s secretary-general. But who was that minister of finance? `,
  },
  {
    'Dewey Decimal System': `This is a library classification system created in 1876. The system allows for books to be added to a library based on their subject matter rather than the order in which they were purchased. The classification number that is assigned to the book makes it possible to find any book and return it to its rightful place on the shelf. What is the name of this system?              `,
  },
  {
    'Harold Holt': `On the 17th December 1967, this Australian Prime Minister vanished after going for a swim at Cheviot Beach Victoria and was presumed dead two days later. Who are we looking for? `,
  },
  {
    Hafu: `In Japan this word comes from the English word half and began to be used in the 1970s. It refers to a biracial child with one parent being Japanese. In 2013 a documentary film named after it was released about the experiences of such people and the related identity issues faced. What term is this? `,
  },
  {
    'Kegel (Arnold)': `Which American gynaecologist gives his name to a regimen of exercises aimed at tightening the pelvic floor muscles, which have a role in maintaining urinary continence, reducing premature ejaculation and regaining tone in the vaginal muscles following childbirth? His name is also given to internally worn weights which can be used to train these muscles. `,
  },
  {
    EpiPen: `Manchin's daughter, Heather Bresch, is the CEO of medical company Mylan. Bresch drew criticism for raising the price on what brand-name emergency medical item from $100 to almost $600 apiece? `,
  },
  {
    'Sitting Bull': `Crazy Horse and his forces had been inspired at the Battle of the Little Bighorn by the visions of which Lakota leader? He dreamt of many soldiers apparently dying in the Lakota camp, a vision which seemed to be borne out by the Native Americans’ victory. `,
  },
  {
    'tempo rubato': `What Italian music term, literally meaning “in stolen time”, instructs the performer or conductor to use their discretion as regards speeding up or slowing down? It is associated with music that requires the performer to play very expressively. `,
  },
  {
    Fluxus: `Joseph Beuys and Yoko Ono are associated with which interdisciplinary group of artists, composers, designers and poets, founded in the early 1960s, whose work emphasised the artistic process over the finished product, often via the staging of performance “events”? `,
  },
  {
    'Hendrick Avercamp': `Which painter of the Dutch Golden Age, believed to be both deaf and mute, is bestknown for his wintry scenes such as Winterlandschap met ijsvermaak (Winter Landscape with Painters) which exhibited a style similar to Jan Breugel the Elder? `,
  },
  {
    'Notes on “Camp”': `In which 1964 essay does Susan Sontag analyse the title concept, seeing it as concerning things that are “good because they are awful” and involving a love of artifice and exaggeration? She gives Aubrey Beardsley drawings, the novels of Ronald Firbank and Ivy Compton Burnett, and Swan Lake as items which are part of the canon of this concept. `,
  },
  {
    Roxana: `Around 329 BC, Bactria put up a vigorous resistance to the Macedonians, and Alexander, realizing that he would have to deal with a continued insurgency, worked out a truce, the terms of which involved marrying which native Sogdianan princess? `,
  },
  {
    'Adolf Wölfli': `spontaneously taken up drawing, and this activity seemed to calm him. His most outstanding work was an illustrated epic of 45 volumes in which he narrated his own imaginary life story. With 25,000 pages, 1,600 illustrations, and 1,500 collages, it is a monumental work.`,
  },
  {
    'MILON OF KROTON ': `the greatest wrestler of ancient Greece and the Ancient Olympic Games. He was champion six times at the Olympic Games (540 B.C. in boys’ wrestling and 532–516 B.C. in wrestling), seven times at the Pythian Games, ten times at the Isthmian Games, and nine times at the Nemean Games.`,
  },
  {
    'KORZENIOWSKI, ROBERT ': `most successful race walker at the Olympics, with four titles. In 1996, 2000, and 2004, he won the 50 kilometers event, making him the only person to have won a race walking event more than twice.`,
  },
  {
    'HEIDEN, ERIC ': `usually considered the greatest speed skater of all time. He completely dominated the 1980 Olympic Winter Games speed skating, winning the gold medal at all five distances. `,
  },
  {
    'Leonidas of Rhodes ': `the greatest runner and sprinter of the Ancient Olympic Games. He won 12 Olympic titles, the most by any athlete, ancient or modern. In 164, 160, 156, and 152 B.C., he was proclaimed triastes or Olympic champion in three events,`,
  },
  {
    'Karch Kiraly ': `regarded by many as the greatest volleyballer ever. In 1986, the Fédération Internationale de Volleyball (FIVB) declared him the top player in the world, the first time that distinction had been given. He won gold medals at the 1984 and 1988 Olympics, 1985 World Cup, 1986 World Championships, 1987 Pan-American Games, and in beach volleyball at the 1996 Olympics.`,
  },
  {
    'ISTHMIAN GAMES': `ancient sporting festivals that were held biennially. With the Olympic Games, Nemean Games, and Pythian Games, they were one of the four great sporting festivals of ancient Greece.`,
  },
  {
    'Ludovico Einaudi': `Who is the Italian pianist, born in 1955, who has composed scores for This is England, I'm Still Here, and Nomadland? `,
  },
  {
    'Blue Mountain': `What is the highest mountain in Jamaica at 2,256 metres, probably best known for its coffee? `,
  },
  { Enyo: `Who is the Greek equivalent of Bellona, the Roman Goddess of War?` },
  {
    'One Night in Miami': `Regina King is the recipient of many awards including the 2018 Academy Award for Best Supporting Actress for If Beale Street Could Talk. What is the name of her directorial debut based on the stage play by Kemp Powers? `,
  },
  {
    Leonberger: `What is the dog breed whose name derives from a city in Baden-Württemberg? It was bred as a symbolic dog that would mimic the animal in the coat of arms. `,
  },
  {
    Oaxaca: `In which Southern state of Mexico would would find the pre-Columbian Monte Alban archaeological site, the long-time Zapotec economic and political centre of Mesoamerica, and the coastal resort of Huatulco? `,
  },
  {
    'Carrie Nation': `Born in 1846 who was this American activist who was a radical member of the temperance movement? She was noted for attacking taverns with a hatchet. `,
  },
  {
    'Newcomen (Thomas)': `Which native of Dartmouth (1664-1729), an ironmonger and lay preacher, designed an atmospheric engine for the purpose of pumping water out of flooded tin mines? His design, influenced by the work of Thomas Savery and Denis Papin, would in turn go on to influence John Smeaton and James Watt `,
  },
  {
    'Tugela Falls': `Generally considered to be the second tallest waterfall in the world with a height of 948 meters, what is the name of the seasonal waterfall located in the KwaZulu-Natal province of South Africa? `,
  },
  {
    Dodoma: `Since 1996, the capital of Tanzania has been which central city, having moved there from Dar es Salaam following a nationwide party referendum in 1974? `,
  },
  {
    'New Caledonia': `Including overseas territories, France has the most time zones of any country with 12. At UTC +11, what is the name of the French overseas special collectivity in the Pacific Ocean with its capital at Noumea (Нумеа)? `,
  },
  {
    Malacca: `One of the most important shipping lanes in the world, which Strait separates Malaysia from the Indonesian island of Sumatra? `,
  },
  {
    'Derry or Londonderry': `The second largest city in Northern Ireland is known for its name dispute: give either the name used by Protestants, or the name used by Catholics (who make up a majority of its population). The American city of Manchester, New Hampshire has two suburbs named for this Northern Irish city: one suburb bears the Catholic name and one suburb bears the Protestant name. Appropriately, they are right next to each other.              `,
  },
  {
    Rajasthan: `The largest city being Jaipur, which is the largest state by area in India?`,
  },
  {
    'Uttar Pradesh': `The largest city in this state being Kanpur, which is the largest state by population in India? `,
  },
  {
    'Frenchman Simon Pagenaud (2019), Dutchman Arie Luyendyk (1990, 1997), and Englishman Dan Wheldon (2005, 2011) are some of the Europeans who have won the famous sporting event named for this city and participated in the tradition of drinking a bottle of milk immediately after their victory. ': `Indianapolis`,
  },
  {
    Rochelle: `When prefaced with "New", this word forms the name of a suburb of New York City located immediately north of the Bronx. When prefaced with "La", this word forms the name of a port city on the Atlantic coast of France, perhaps most notable for being the location of a lengthy siege in 1628 when Cardinal Richelieu suppressed its Protestant Hugenots.              `,
  },
  {
    'Песнь дороги ': `In iconic scenes from this film, this film's boy protagonist and his sister chase a sweet seller around despite having no money to pay, & run through a wheat field to see a steam train. It's the first of three based on a novel by Bibhutibhushan Bandhopadhyay. `,
  },
  {
    'Кукунор ': `Located in a western province of the same name, this is the largest lake in China. Its name roughly translates as "Blue Sea" or "Blue/Green Sea". `,
  },
  {
    'Lake Nyos': `In August 1986, over 1,700 people were killed when an enormous cloud of Carbon Dioxide emerged from this lake in Cameroon. This kind of event is called a Limnic Erruption. `,
  },
  {
    'Okanagan Lake': `This lake in the Canadian province of British Columbia, located about 100 miles / 150 km east of Vancouver, is allegedly home to a sea serpent like monster known as Ogopogo. `,
  },
  {
    Finland: `This European country has approximately 187,888 lakes. Some of the largest include Saimaa, Paijanne, Oulujarvi, and Kallavesi. `,
  },
  {
    Кайруан: `But this Tunisian city is the 4th most important city in the Islamic world after Mecca, Medina, and Jerusalem. This city was established in 670 AD by Uqba Ibn Nafi. It hosts the holy mosque of Ugba which is also a UNESCO World Heritage Site, and is a center of Islamic religious activities such as scholarships and Islamic teachings. What city is this?              `,
  },
  {
    'Fumi-e': `This was a likeness of Jesus or Mary onto which the religious authorities of the Tokugawa shogunate of Japan required suspected Christians (Kirishitan) to step, in order to demonstrate that they were not members of that outlawed religion. What was the name of this? `,
  },
  {
    lion: `Which animal has a thorn removed from its paw by Androcles in an ancient tale, inhabits the den into which Daniel is thrown in the Biblical story, and is cowardly in The Wonderful Wizard of Oz? `,
  },
  {
    'Jeanne Hébuterne': `Although an accomplished painter in her own right, which artist is perhaps best-known as the common-law wife of Amedeo Modigliani, for whom she was a regular model? `,
  },
  {
    'Tammany Hall': `Aaron Burr, Boss Tweed, and Charles Francis Murphy are among the politicians who led which political organisation that dominated Democratic politics in New York during the 19th and early 20th centuries? `,
  },
  {
    Hanami: `What is the name of the Japanese custom or festival of viewing blossom of cherry and plum trees in the spring? `,
  },
  {
    'BioWare ': `specializes in role-playing video games, and achieved recognition for developing highly praised and successful licensed franchises: Baldur's Gate, Neverwinter Nights, and Star Wars: Knights of the Old Republic.`,
  },
  {
    'Cavalcanti, Guido ': `(c.1255–1300). Florentine poet. A friend of *Dante, his sonnets and other poems reveal a philosophic and introspective temperament. His active support of the Ghibelline (imperial) cause led to his exile in the last year of his life. English translations were made by *Rossetti and Ezra *Pound.`,
  },
  {
    'Cayley, Sir George': `(1773–1857). English engineer, inventor and aviation pioneer, born in Scarborough, Yorkshire. Privately educated, as early as 1799 he proposed an aircraft with a fuselage, fixed cambered (i.e. asymmetrical) wings, a rudder and separate power source. He experimented with model balloons, then built a series of large gliders, and in 1810 published a paper identifying the four aerodynamic forces in flight: weight, lift, drag and thrust, rejecting *Leonardo da Vinci’s concept of bird-like flight for humans. Now often described as ‘the Father of Aviation’, he was the first to explain the problems of flight mathematically.`,
  },
  {
    'Cavour, Camillo ': `(1810–1861). Italian politician, born in Turin. The main architect of Italian unity and independence, he was the son of a nobleman. He found army life alien to his liberal ideas and turned to scientific agriculture as a means of showing that, to prepare a country for freedom, practical improvements were more important than political agitation.`,
  },
  {
    'Celan, Paul ': `(1920–1970). Romanian-Jewish -French poet and translator, born Czernowitz (now in Ukraine). His parents died in the Holocaust, and Celan survived a labour camp in Romania. He translated *Shakespeare’s Sonnets into German and wrote ‘Todesfuge’ (‘Death Tango’) in 1944–45. He lived in Paris from 1948, and translated poetry by *Donne, *Dickinson, *Baudelaire, *Rimbaud, *Valery, *Frost and *Yevtushenko. He drowned himself in the Seine on *Hitler’s birthday. His poems are short and compressed (‘microliths’) and have been compared to the music of *Webern.`,
  },
  {
    'Cenci, Beatrice ': `(1577–1599). Italian noblewoman. To escape the cruelty and the incestuous attentions of her father, she arranged with her stepmother and brother to have him assassinated. Put on trial with her accomplices, she confessed under torture and was beheaded. Her story was the basis of *Shelley’s verse tragedy`,
  },
  {
    'James Chadwick ': `generally credited with the discovery of the neutron, and was awarded the Nobel Prize for Physics in 1935.`,
  },
  {
    'Campin, Robert ': `(c.1378–1444). Flemish painter. Active in Tournai, he is now identified as the previously misdescribed ‘Master of Flémalle’, regarded as the founder of Flemish Realism and a major influence on Jan van *Eyck and Rogier van der *Weyden`,
  },
  {
    'Цао Сюэцинь ': `(c.1715– c.1763). Chinese novelist, poet and painter, born in Nanjing. His family served the *Qing (Manchu) court, then fell from wealth and power. His novel Dream of the Red Chamber (or The Story of the Stone), circulated in manuscript from the 1760s, and first printed in 1791, is regarded as the greatest novel in the classical Chinese tradition.`,
  },
  {
    'Capodistrias, Ioannes': `(1776–1831). Greek politician, born in Corfu. After service in the administration of the Ionian Islands, he went to Russia, where eventually he became Foreign Minister 1815–18. He returned to Greece in 1822 to devote himself to the national cause, and after independence from Turkey had been won was elected first president of Greece (1827),`,
  },
  {
    'Cardano, Geronimo ': `(1501–1576). Italian mathematician and physician. Although professor of medicine at Pavia 1543–59 and Bologna 1562–70, he is best known for his work in mathematics, particularly algebra. His Ars Magna (1545) was the first algebraic text to be printed. His academic career at Bologna ended with imprisonment for heresy (astrology was one of his interests). He spent his last years in Rome and is said to have starved himself to death to prove the accuracy of a prediction. He was a polymath who wrote prolifically in science, history and music.`,
  },
  {
    'Carey, Peter ': `Australian novelist, born in Bacchus Marsh. He dropped out of Monash University and worked in advertising. His novels included Bliss (1981), Illywhacker (1985), Oscar and Lucinda (1988, which won the Booker Prize over Salman *Rushdie’s Satanic Verses), The Tax Inspector (1991), Jack Maggs (1997), True History of the Kelly Gang (2000, which won him a second Booker Prize in 2001), My Life as a Fake (2003), Theft: A Love Story (2006) and Parrot and Olivier in America (2010).`,
  },
  {
    'clerihew ': `A humorous verse form invented by Edmund BLANK *Bentley, consisting of two rhymed but metrically clumsy couplets, with the first line referring to a well-known person, e.g. Sir James Jeans Always says what he means; He is really perfectly serious About the Universe being Mysterious.`,
  },
  { 'At Dublin, this river flows into the Irish Sea.': `Liffey` },
  {
    WACKEN: `Up until few years ago, the road signs of which German village had to be replaced with plastic replicas that spelled Heavy Metal Town during the first weekend of August so they wouldn't get stolen? `,
  },
  {
    'Курбан-байрам': `Commemorating the willingness of Ibrahim to sacrifice Ismael, which specific Islamic holiday occurs at the end of the annual Hajj, beginning on the 10th day of Dhu al-Hijjah? `,
  },
  {
    Ruby: `Which general-purpose programming language that supports procedural, object-oriented, and functional programming was developed by Yukihiro Matsumoto? It was influenced by Perl, BASIC and Lisp among others. `,
  },
  {
    'Fool`s Gold Loaf': `Made by the Colorado Mine Company restaurant in Denver, what sandwich is a hollowed out loaf of bread filled with peanut butter, grape jelly and bacon? Elvis Presley is said to have taken an impromptu flight to Denver in his private jet where a feast of the sandwich was laid on in an airport hangar. `,
  },
  {
    'Tabernas Desert': `This desert in Almeria, Spain was home to hundred of Western Films during the 60's and 70's. An entire town was built and movies like Once Upon a Time in the West and The Good, the bad and the Ugly were filmed here. What is the name of this desert? `,
  },
  {
    'Michael Blake': `Dances with the Wolves is a 1990 American epic Western film starring, directed, and produced by Kevin Costner in his feature directorial debut. For this question however we're looking for the American author, on whose book this film was based. Who is this man? `,
  },
  {
    'Tsangpo Canyon': `This canyon in Tibet often comes up in debates about which canyon is truly the world’s largest, longest, or deepest; with a top-to-bottom reach in some sections of up to 17,000 feet, it’s three times deeper than Arizona’s offering, and it goes on for 300 miles. It’s located in the northern Himalaya, in Tibet, and the River that runs through it is a landmark in itself. What is the name of this canyon?              `,
  },
  {
    'Haing S. Ngor': `This man who was a Cambodian American gynecologist, obstetrician, actor and author is the only actor of Asian descent to win the best supporting actor Oscar. Who is this man, who won this oscar for his performance in the film "The Killing Fields"? `,
  },
  {
    'Our American Cousin': `Mary Meredith, Lord Dundreary, and Asa Trenchard are among the principal roles in what 19th-century Tom Taylor play? The play had successful runs in both New York and London, but its best-known performance is almost certainly the one that took place in Washington DC on April 14, 1865. `,
  },
  {
    'Pius XII': `The Rolf Hochhuth play Der Stellvertreter (The Deputy), serves largely as a condemnation of which Pope for his refusal to speak out against the Holocaust? He was portrayed by Marcel Iureș in Amen., a 2002 film adaptation of the play directed by Costa-Gavras. `,
  },
  {
    'Ruth Wilson': `After an award-worthy (but sadly, not award-winning) performance on The Wire, Idris Elba went on to star in the crime drama Luther. His former Wire co-star Dominic West also found later success on the Rashomon-esque drama The Affair. What English actress co-starred with both Elba and West on these shows, respectively portraying characters named Alice and Alison? `,
  },
  {
    'Eddie Eagan': `Winning at Antwerp in 1920 and at Lake Placid in 1932, what American boxer and bobsledder is the only athlete to have won gold medals at both the Summer and Winter Olympics in different sports? `,
  },
  {
    Cuyahoga: `Which river that runs through the American city of Cleveland, Ohio was so polluted that it literally caught fire in 1969? `,
  },
  {
    Mersey: `In a hit 1964 song, the band Gerry and the Pacemakers ask a ferry to cross which river, which flows through the city of Liverpool in England? `,
  },
  {
    'Sumida River': `Which river, a branch of the larger Arakawa river, flows through Central Tokyo and is mentioned in the poetry of Basho? The Ryogoku, Sakura, and Chuo bridges all cross this river. Here it is depicted by Hokusai. `,
  },
  {
    Padma: `With a name meaning "Lotus Flower" in Sanskrit, this major river of Bangladesh empties into the Bay of Bengal.`,
  },
  {
    'Estonia (Поющая революция) ': `They even used the power of song to demand their independence by gathering in a mass of 300,000 to sing patriotic songs. It would become known as the Singing Revolution, and was active for five years, until they gained their independence (again) in 1991. What country is this?              `,
  },
  {
    'Alain Ducasse': `He was the first chef to have restaurants with 3 Michelin stars in three different cities. His more than twenty restaurants have a total of nineteen Michelin stars. The three-star establishments are Louis XV at the Hotel de Paris in Monte Carlo (since 1990); the restaurant bearing his name at the Plaza Athénée hotel on the Avenue Montaigne in Paris (since 1996) and his restaurant at the Essex Hotel in New York City (from 2005 to 2007) which closed after a management change. When the restaurant bearing his name at The Dorchester Hotel in London also received three stars in 2010, the trio of three-star restaurants was again complete.              `,
  },
  {
    Wallenda: `This is a circus act and group of daredevil stunt performers who perform highwire acts without a safety net. They are a family of acrobates who have been tempting fate for generations, but fate hasn't always been kind. In 1962, they were attempting the seven-person pyramid in Detroit, Michigan, when the pyramid collapsed and two of the members were killed. Nik is probably the most famous member of this family, as he holds 13 Guinness World Records. What is the name of this family? `,
  },
  {
    'Зеркало и свет ': `What is the title of Hilary Mantel's final book of her historical novel trilogy, following Wolf Hall and Bring Up the Bodies? `,
  },
  {
    'Hugh Lofting ': `an English American writer trained as a civil engineer, who created the classic children's literature character Doctor Dolittle.`,
  },
  {
    'Mickiewicz ': `He is known chiefly for the poetic drama Dziady (Forefathers' Eve) and the national epic poem Pan Tadeusz.`,
  },
  {
    'Anna May Wong': `In 2022, this first Chinese-American movie star became the first Asian American featured on U.S. currency's new quarter`,
  },
  {
    'William Oughtred': `A number of mathematical symbols that are still used were first introduced by him. Among these were the sign “×” for multiplication and the “sin” and “cos” notation for trigonometrical functions. He also invented the earliest form of the slide rule in 1622 but only published this discovery in 1632.`,
  },
  {
    'William Lyon Mackenzie King': `a Canadian statesman and politician who served as the tenth prime minister of Canada for three non-consecutive terms from 1921 to 1926, 1926 to 1930, and 1935 to 1948. A Liberal, he was the dominant politician in Canada from the early 1920s to the late 1940s. He is best known for his leadership of Canada throughout the Great Depression and the Second World War. `,
  },
  {
    'Gray, Elisha ': `American engineer, born in Ohio. He was the first to transmit musical tones across a telegraph wire and made significant improvements to telegraphy generally. His patent application for a telephone was lodged on 14 February 1876, just hours after Alexander Graham *Bell and his claim for priority is still controversial. His consulting firm became part of Western General Manufacturing.`,
  },
  {
    'East Timor ': `Widely considered the founding father of his nation, independence hero Xanana Gusmao (Шанана Гужман) resigned as prime minister of which country last week? `,
  },
  {
    'Art of Noise ': `(band etymology) After the 1913 manifesto called The Art of Noises by Italian Futurist Luigi Russolo`,
  },
  {
    'ABBA ': `(band etymology) a palindromic acronym from the initials of the first names of the band members: Agnetha Fältskog, Björn Ulvaeus, Benny Andersson and Anni-Frid Lyngstad.`,
  },
  {
    'AKB48 ': `(band etymology) After Tokyo's area Akihabara (colloquially shortened to Akiba), a mecca for electronics shopping and geeks. The group was formed as theater-based, to perform at its own theater at Akihabara on a daily basis, so that fans could always go and see them live.`,
  },
  {
    'Cansei de Ser Sexy ': `(band etymology) Portuguese for "tired of being sexy", an alleged quote of Beyoncé Knowles, one of the largest musical influences upon this Brazilian band.`,
  },
  {
    'Vanderlei de Lima': `This man is a Brazilian retired long-distance runner. While leading the marathon after 35 km at the 2004 Summer Olympics, he was attacked on the course by Irish former priest Cornelius "Neil" Horan. Following the incident, he fell from first to third place, eventually winning the bronze medal. He was later awarded the Pierre de Coubertin medal for sportsmanship for that race. Who are we looking for?              `,
  },
  {
    'Corona Project': `From 1960 to 1972 in a reconnaissance project the United States routinely photographed the Soviet Union from space. What was the name of this project, which you hear a lot in another context today? `,
  },
  {
    'Matthew Flinders': `Australia was called “New Holland” by the 17th century Dutch navigators who first landed there. The name “Australia” was first suggested in 1803 by an English explorer, and derives from the Latin australis meaning southern. But who was this Englishman? `,
  },
  {
    'Allman Brothers': `This band really did have the worst luck. After Duane died in a motorcycle accident in 1971, things didn’t seem like they could get worse. That is, until a year later, when the band’s bassist, Berry Oakley, was killed in eerily similar circumstances. Oakley also died in a motorcycle accident in Macon—in fact, the accident was only a few blocks away from the site of Duane’s death. What was the name of this band?`,
  },
  {
    Tejo: `Using small targets containing gunpowder that explode on impact, what is the national sport of Colombia? `,
  },
  {
    'Pentecost Island': `Bungee jumping originated in a ritual called gol, or land diving, which sees practitioners jump off wooden towers 20 to 30 metres high, with two tree vines wrapped around the ankles. Which island in Vanuatu is home to this tradition? `,
  },
  {
    'Bortle Scale': `What name, after the amateur American astronomer who created it in 2001, is given to the scale that measures the night sky's brightness of a particular location by the observability of celestial objects? The scale runs from 1, an excellent dark-sky site in which the zodiacal light is visible and colourful, to 9, an inner city sky, in which, aside from the Pleiades, no Messier object is visible to the naked eye. `,
  },
  {
    'Guillermo Vilas': `A recent investigation by Argentine journalist Eduardo Puppo and Romanian mathematician Marian Ciulpan concluded that this man should have been ranked the world No. 1 player for seven weeks between 1975 and 1976, and the ATP Tour's refusal to recognise this has led to legal challenges. Never officially ranked higher than number 2, which South American player won a record 46 consecutive matches in 1977?              `,
  },
  {
    Yakult: `Which Japanese probiotic milk-based drink, with a name derived from the Esperanto for ‘yoghurt’, was developed by Minoru Shirota in 1935? `,
  },
  {
    'Mark Cavendish': `Which cyclist, nicknamed the Manx Missile, is considered one of the greatest road sprinters of all time, having won 30 Tour de France stages in a career that begun in 2005? `,
  },
  {
    Caodaism: `This is a relatively new religious movement founded in Vietnam. It mixes ideas from other religions, and is a syncretic, monotheistic religion officially established in the city of Tây Ninh, southern Vietnam in 1926. The religion combines Buddhism, Christianity, Taoism, Confucianism, and Islam. But what's the name of this religion? `,
  },
  {
    Bakken: `This is an amusement park in Lyngby-Taarbæk Kommune, Denmark, near Klampenborg (Gentofte municipality) about 10 km north of central Copenhagen. It opened in 1583 and is the world's oldest operating amusement park. What is its name, and no it's not Tivoli? `,
  },
  {
    'Operation Peter Pan': `For this question we're looking for the name of an operation in which 4,000 unaccompanied children were brought to the United States from Cuba during a covert program that helped school-age kids escape repression in Cuba. The program was designed to protect Cuban children whose parents were being targeted by Fidel Castro’s new regime—and to shield them from the Communist ideologies feared by the U.S. at the height of the Cold War. What was the name of this program?              `,
  },
  {
    'Battle of the Catalaunian Plains': `This was one of the most decisive military engagements in history between the forces of the Roman Empire under Flavius Aetius (391-454 CE) and those of Attila the Hun (r. 434-453 CE). The conflict took place on June 20, 451 CE in Gaul (modern day France) in the Champagne region. What was the name of this battle?              `,
  },
  {
    Festivus: `This is a fictional holiday that was introduced through the American television sitcom "Seinfeld". In the show, the holiday was invented by Frank Costanza (Jerry Stiller), father of George Costanza (Jason Alexander). The real life concept of the holiday came from the father of one of "Seinfeld's" writers, who had gotten tired of the increased commercializing of Christmas. The holiday grew in popularity in the early 21st century as more people were looking to celebrate it. What is the name of this holiday?              `,
  },
  {
    Jerusalem: `Which Middle Eastern city provides the title of Alan Moore's 1,200-page novel, published in 2016, that is divided into three books, entitled The Boroughs, Mansoul, and Vernall's Inquest. `,
  },
  {
    'Bose-Einstein condensate': `Winning them the 2001 Nobel Prize in Physics, which state of matter was first created by Eric Cornell and Carl Wieman in 1995 by cooling a gas of rubidium atoms to 170 nanokelvin? `,
  },
  {
    Sutra: `What's the Sanskrit word for 'thread'? It's also used for a collection of aphorisms which are the metaphorical threads using which knowledge is woven. `,
  },
  {
    'Inspector Morse': `Notable for its 2 hour long episodes between 1987 and 2000 and its coded Barrington Pheloung theme tune, which ITV drama series starring the late, great John Thaw and Kevin Whateley as Oxford policemen, was based on a series of detective novels by Colin Dexter? `,
  },
  {
    'FU MINGXIA ': `top female diver of the 1990s. She has been at her best on the platform, winning the Olympic gold medal in that event in 1992 and 1996, and was World Champion in 1991 and 1994.`,
  },
  {
    'Aleksandr Dityatin': `By winning a medal in all eight gymnastics events at Moscow in 1980, he established a record that has been equaled only by Michael Phelps in both 2004 and 2008.`,
  },
  {
    'Золотой час': `в фотографии это период дня вскоре после восхода солнца или перед закатом, в течение которого дневной свет выглядит более красным и мягким, чем при более высоком положении солнца.`,
  },
  {
    'Колада ': `меч, который наравне с Тисоной являлся личным оружием Эль Сида Кампеадора — национального героя Испании XI века. По легендам сила оружия увеличивалась пропорционально отваге владевшего им воина.`,
  },
  {
    'Crazy Horse': `Which Lakota tribesman was one of the leaders of the Native American forces at the Battle of the Little Bighorn? This military leader, commemorated by a still-unfinished memorial carved out of a mountainside in South Dakota’s Black Hills, would die the year after the battle. `,
  },
  {
    'Ibn Khaldun': `Another major source of information on the Mali Empire is this North African historian and philosopher who died in 1406. This is which Arab scholar who, in his historiographical work Muqaddimah, proposed a cycle in which empires gradually lose Asabiyyah or social cohesion? `,
  },
  {
    'Kurukshetra war': `Much of the Mahābhārata concerns which conflict between the Kauravas and the Pandavas, two branches of a family descended from Śakuntalā through her son Bharata? This conflict is named for the city in Haryana where it took place. `,
  },
  {
    'Battle of the Little Bighorn': `The Battle of the Greasy Grass is an alternative name given to which 1876 battle of the Great Sioux War, fought in modern-day Montana? This battle saw Native American tribes including the Lakota Sioux defeat the 7th Cavalry Regiment of the US Army, whose leader performed his “Last Stand” at this battle. `,
  },
  {
    Kālidāsa: `The Sign of Shakuntala is a play by which Classical Sanskrit poet and dramatist of the 4th and 5th centuries CE? It adapts the story of Śakuntalā, the mother of the Emperor Bharata, from the epic poem the Mahābhārata. `,
  },
  {
    gurdwārā: `What name is given to a place of assembly and worship for Sikhs? This building contains a langar hall, where volunteers serve free vegetarian food`,
  },
  {
    'Эйе ': `What was the name of Tutankhamen’s powerful adviser who became pharaoh in his own right following Tutankhamen’s mysterious death? `,
  },
  {
    Dravidian: `The name of which language group in the Indian sub-continent comes from the Sanskrit word for the Tamil language? As well as Tamil, languages in this family include Telugu, Kannada, and Malayalam. `,
  },
  {
    'Leo Africanus': `This 16th century Berber diplomat and author is another major source of information on the Mali Empire through his book Descrittione dell’Africa (Description of Africa) which he dictated in Italian. This is which man who converted from Islam to Christianity after being captured by pirates and sold into slavery before being freed after he was presented to Pope Leo X? `,
  },
  {
    Smilodon: `La Brea [bray-a] is also famous for its fossils of an extinct genus of large, fearsome felids, often referred to as sabre-toothed tigers despite not being closely related to the tiger or to any other modern cat. What is the scientific genus name of these felids? `,
  },
  {
    'Бегство от свободы': `In which 1941 work did the Frankfurt School psychoanalyst Erich Fromm identify authoritarianism, destructiveness, and conformity as three mechanisms by which people might perform the titular, apparently paradoxical, action? `,
  },
  {
    'XYZ Affair': `First used by President John Adams to describe agents of Foreign Minister Charles Maurice de Talleyrand, what name is given to the diplomatic episode of 1797 that worsened relations between France and the United States and led to the undeclared Quasi-War of 1798? This incident saw French diplomats demand bribes and loans from the USA.`,
  },
  {
    'Kitagawa Utamaro': `One of the best-known designers of ukiyo-e [yoo-kee-oh ay] woodblock prints and paintings, which Japanese artist was imprisoned in 1804 for making illegal prints depicting Toyotomi Hideyoshi? This man is particularly remembered for his pictures of insects and of beautiful women. `,
  },
  {
    Tammuz: `This Mesopotamian deity was an agricultural god perhaps most famous for being the consort of Ishtar. He is cited as one of the archetypical exaples of the dying-and-rising god motiff found in Near Eastern mythologies because he is said to die, go to the underworld, and then be resurrected. (Kind of like how crops are harvested, but then eventually re-planted in the spring, get it?)              `,
  },
  {
    Sukkot: `During this Jewish holiday, which originated as a festival commemorating the end of the harvest, Jews traditionally build and live in a temporary structure. Agricultural products known as the "Four Species" (palm, myrtle, willow, and citron) would have been brought to the Temple during this festival. `,
  },
  {
    Holi: `Though most western harvest festivals occur in the fall/autumn because seasons, in warmer climates there are harvests all thorough the year. This popular Hindu holiday, known today as a celebration of colors, likely originated as a celebration of the spring harvest. `,
  },
  {
    'Itaipu Dam': `This Dam, located on the border between Brazil and Paraguay, is the second largest hydroelectric producer in the world. The dam is 7.7 kilometres long and 196 metres high. What is the name fo this dam? `,
  },
  {
    'Caroline Herschel': `This woman, the sister of the astronomer who discovered Uranus, was the first woman in England’s history employed by the government. In 1787, King George III offered her a salary to continue her work in astronomy, making her both the first female government employee and the first paid for their work in astronomy. What ist her name? `,
  },
  {
    Endurance: `Carrying a crew of 27 men and one cat, what was the name of the ship used by Sir Ernest Shackelton on his 1914-1917 Trans Antarctic Expedition? `,
  },
  {
    Zanzibar: `Occuring on the 27th August 1896, the war between Britain and which country is the shortest in history, lasting between 38 and 45 minutes? `,
  },
  {
    Pato: `What is the national sport of Argentina? Played on horseback and combining elements of Polo and Basketball, it is so called because players used to use a live duck in a basket instead of a ball. `,
  },
  {
    'Бочча ': `One of only two Paralympic sports not to have a counterpart in the Olympics, which sport involves participants throwing leather balls as close as they can to a white target ball, called a jack? `,
  },
  {
    'Thomas Cranmer': `Appointed Archbishop of Canterbury by Henry VIII in 1532, which man wrote and compiled the first two editions of the Book of Common Prayer? `,
  },
  {
    Ming: `Credited with the construction of the Forbidden City and the completion of the Great Wall of China, which dynasty ruled China between 1364 and 1644? `,
  },
  {
    'Onyx ': `What meltwater stream at the edge of the Ross Ice Shelf is, at 32 kilometers in length, the longest river in Antarctica? This stream share its name with a semi-precious gemstone. `,
  },
  {
    'Harriet Tubman': `One of the most famous "Conductors" on the Underground Railroad that helped slaves escape to the free northern states and Canada, this woman made 13 trips to the South, helping to free over 70 people from slavery. What was her name? `,
  },
  {
    Linus: `What was the name of the second Catholic Pope? Reigning from AD 67 to AD 76 he was preceded by Saint Peter and succeeded by Anacletus? `,
  },
  {
    'Emil Jannings': `What is the name of the German actor who won the first Academy Award for Best Actor for his role in The Last Command and The Way of all Flesh? `,
  },
  {
    Meteora: `One of the 182 pictures used as the default screensaver for the Amazon Firestick, what is the name of this rock formation in Greece that is host to six Eastern Orthodox monasteries? `,
  },
  {
    Spirograph: `Developed by Denys Fisher and first sold in 1965, what is the name of the drawing toy that enables its user to create beautiful patterns called hypotrochoids and epitrochoids? `,
  },
  {
    '800 metres': `In 1983, Jarmila Kratochvílová set what is now the longest-standing individual world record in athletics when she ran what distance in 1 minute 53.28 seconds? `,
  },
  {
    Фаншипан: `What Vietnamese mountain, the tallest on the Indochinese peninsula, is nicknamed "The Roof of Indochina"? `,
  },
  {
    Oromo: `With roughly four million more native speakers than Amharic, what is the most widely spoken language in Ethiopia? `,
  },
  {
    'Robert Doisneau': `Seen here is Le baiser de l'hôtel de ville or The Kiss by the City Hall by what photographer of Parisian city life (1912-1994)? `,
  },
  {
    'Deadmau5 ': `(band etymology) When his computer crashed and emitted a strange odor, Joel Thomas Zimmerman dismantled it and found a dead mouse inside. He later used the name as a username for various chatrooms.`,
  },
  {
    'Dire Straits ': `(band etymology) Comes from the band's financial situation at the time of forming. `,
  },
  {
    'The Fall ': `The band took their name from the 1956 Albert Camus novel of the same name.`,
  },
  {
    'Fall Out Boy ': `(band etymology) reference to the sidekick of comic book superhero Radioactive Man from The Simpsons. `,
  },
  {
    'Heaven 17 ': `(band etymology) From a line in Anthony Burgess' novel A Clockwork Orange, a fictional band mentioned by a young woman in the record store`,
  },
  {
    'Misery Index': `economic indicator created by Arthur Okun, defined as the sum of the unemployment rate and the annual inflation rate.`,
  },
  { 'Sum 41 ': `(band etymology) The band started 41 days into the summer` },
  {
    'Tears for Fears ': `(band etymology) from a line in the book Prisoners of Pain by American psychologist Arthur Janov. Much of the band's early material is influenced by Janov's writings.`,
  },
  {
    'Thompson Twins ': `(band etymology) From Thomson and Thompson, the bumbling detectives in Hergé's comic strip series The Adventures of Tintin.`,
  },
  {
    Algeria: `The 1982 game between West Germany and Austria came to be known as "The Disgrace of Gijon" after the two sides played out an appallingly dull 1-0 German win that saw them both qualify. Which African side was knocked out as a result of the scheming European's behaviour? `,
  },
  {
    MASINISSA: `The Third Punic War (139-146) began following an armed conflict between Carthage and which Numidian king? His wife was a Carthaginian noblewoman, Sophonisba, who poisoned herself so as not to be humiliated at the Roman triumph. `,
  },
  {
    'Robert King MERTON': `"Unintended consequences", "reference group", and "role strain" are some concepts developed by which American sociologist (1910-2003)? His book 'On the Shoulders of Giants: A Shandean Postscript' is a parody of scholarly essays that traces the origins of Newton's famous quotation. `,
  },
  {
    'THE ROCKY AND BULLWINKLE SHOW': `Originally voiced by Paul Frees, Boris Badenov is the antagonist of which animated TV series (1959-1964)? `,
  },
  {
    'Bonnie BLAIR': `Which American speed skater won gold medals in the 500 m at three consecutive Winter Olympics, in 1988, 1992, and 1994? She also won the 1000 m twice in a row in 1992 and 1994. `,
  },
  {
    OPIUM: `First marketed in 1977, which oriental-spicy perfume was created for fashion brand Yves Saint Laurent by perfumer Jean Amic and Jean-Louis Sieuzac of Roure? In the United States, a group of Chinese Americans demanded a change of the name and a public apology from Saint Laurent for "his insensitivity to Chinese history and Chinese American concerns". `,
  },
  {
    KURULTAI: `What term refers to the political and military council of the leaders and khans of the ancient Mongols and Turks? All Great Khans of the Mongol Empire were formally elected by its decisions. `,
  },
  {
    'Daniel BRUHL': `Which Spanish-German actor made his international breakthrough as Herman Zoller in the 2009 film Inglourious Basterds and as Niki Lauda in the 2013 film Rush? He starred as Dr Lazlo Kreizler in the Emmy-nominated 2018 TV period drama The Alienist. `,
  },
  {
    'STOKE MANDEVILLE': `Which English village is mentioned in the former title of multi-sport competition, known today as the International Wheelchair and Amputee Sports World Games? `,
  },
  {
    'Beryl COOK': `Which popular British artist, born in Surrey in 1926 but active in Plymouth from the 1960s, is famous for her comical paintings of overweight people enjoying themselves in everyday situations? `,
  },
  {
    'Flora DUFFY': `Which Bermudian triathlete became the country’s first Olympic gold medallist in 2020? To date she has won four World Championship titles. `,
  },
  {
    'Riddick BOWE': `Which American boxer did Lennox Lewis defeat in the 1988 Olympic final? Known for a trilogy of fights against Evander Holyfield, he was the undisputed world heavyweight champion before surrendering the WBC title when he refused to fight Lewis. `,
  },
  {
    'Гуджарат (Валлабхаи Патель)': `The Statue of Unity, the world’s largest statue, stands at 182 metres in which Indian state that lies along India’s west coast?`,
  },
  {
    'Anne ROBINSON': `Who was the original host of the British TV quiz show The Weakest Link? `,
  },
  {
    THIRTEEN: `How many players make up each side in a game of rugby league? The number is two fewer than a team is made of in rugby union. `,
  },
  {
    LIBERIA: `Currently serving a 50-year sentence in HMP Frankland in County Durham, Charles Taylor was the former dictator of which West African country? Although he was involved in this country’s two civil wars, he was convicted for crimes committed in neighbouring Sierra Leone. `,
  },
  {
    'Rita ORA': `In 2022 New Zealand born filmmaker Taika Waititi married which successful British pop star and occasional TV personality? This person had previously dated Calvin Harris.`,
  },
  {
    'Chris Tarrant': `Who was the original host of the British TV quiz show Who Wants to Be a Millionaire? `,
  },
  {
    'Max SCHRECK': `What is the name of the German actor who played Count Orlok in the 1922 silent horror film Nosferatu? `,
  },
  {
    PANIPAT: `Which city north of Delhi was the site of three major battles that took place in 1526, 1556 and 1721? The first of these led to the establishment of the Mughal Empire and the fall of the Delhi Sultanate. `,
  },
  {
    'Загадочное ночное убийство собаки ': `The common name of the star Alpha Canis Majoris, and a novel in which Christopher Boone investigates the death of Wellington. `,
  },
  {
    'Algonquin Round Table, Alduin': `A group of 20th century New York City writers who met at a namesake hotel, and the main antagonist of The Elder Scrolls V: Skyrim. `,
  },
  {
    'Thomas Hardy, G.H. Hardy (Апология математики)': `The author of a poem ending with the lines "That I could think there trembled through His happy good-night air/Some blessed Hope, whereof he knew And I was unaware", and the author of A Mathematician's Apology. `,
  },
  {
    'Дарьенский пробел ': `A stretch of jungle on the border between Panama and Colombia, and the second part of the Millennium Prize problem concerning the Yang-Mills existence.`,
  },
  {
    'Erich Kastner': `The children’s novel Emil and the Detectives was writtenin Weimar Germany in 1929. It followed the story of Emil Tischbein, a 10-year-old who is sent to Berlin to live with relatives by his poor, widowed mother. On the train, his money is stolen. Instead of going to the police, he chases the thief himself with the help of a number of schoolchildren. But who was the author of this book?              `,
  },
  {
    'Jean Dominique Bauby': `This French author and editor of Elle ‘dictated’ his book The Diving Bell and the Butterfly, about his life following a stroke, by blinking his left eyelid. Who was this man, on whose life a golden globe winning film by Julien Schnabel was based? `,
  },
  {
    'Paul Nipkow': `A technician and television pioneer, this man invented the electric telescope for the electric reproduction of illuminating objects; in fact, these were the basic apparatuses for television broadcast. He proposed the first practical television principle based on a scanning disc that transmitted live moving images with tone graduation or greyscale in 1884. He became famous for being the creator of television, and in 1935, the first public television station in the world was named after him. Who is this?              `,
  },
  {
    'Chanko (Тянконабе)': `In sumo, the heavier competitor has an advantage—there are no separate weight classes, and the small ring has gotten no larger to accommodate heftier competitors. Wrestlers, therefore, will eat and eat and eat in a highly regimented fashion to get as large as they can. At the heart of this process is a stew, that defines their lives so completely—most wrestlers eat it at almost every meal for years—that it has come to symbolize the sport and dominate their lives even after they retire. What is the name of this stew?              `,
  },
  {
    'Chrys Kyle': ` American Sniper is based on the life of a man, who was the deadliest sniper in US military history with 160 officially confirmed kills. The movie was a massive box-office success and was nominated for six Oscars. The film won one Academy Award for Best Sound Editing. But what was this man's name? `,
  },
  {
    Afghanistan: `The deep blue semi-precious stone Lapis lazuli has been mined for 6,000 years primarily in which Asian country? `,
  },
  {
    'Jungfrau (‘One’ is Eiger and ‘Two’ is ‘Monch’ – the form the three main summits of the Bernese Alps in Switzerland) ': `Picture C shows one of the most distinctive sights of a particular mountain range. You need to give me the name of the peak marked ‘Three’. `,
  },
  {
    'Марон, марониты -главная христианская секта в Ливане ': `Which 4th-century Syrian Christian monk, who lived a hermetic life in the Taurus mountain near Antioch, gives his name to a present-day Christian church grouping located in the Levant, mainly around Mt. Lebanon?`,
  },
  {
    'Видар ': `In Nordic myth, who is the god associated with revenge? The son of Odin and the female giant Griar, he is foretold to survive Ragnarok, and to avenge his father's death by killing the wolf Fenrir.`,
  },
  {
    'Гавейн ': `The son of King Arthur's sister Morgause and King Lot of Orkney and Lothian, which Knight of the Round Table is best known for his encounter with the Green Knight, who challenges any knight to strike him with his axe, provided he is willing to accept a return blow in a year and a day?`,
  },
  {
    'Кукулькан ': `Meaning 'plumed or feathered serpent', which Mayan snake deity had temples found throughout the northern Yucatan Peninsula, such as at Uxmal and Chichen Itza? It is closely associated with Quetzalcoatl, the serpent god of the Aztecs.`,
  },
  {
    'Хрисаор ': `His name meaning 'he who has a golden sword', which figure in Greek myth is the son of Medusa and the brother of the winged horse Pegasus? Born when Perseus cut off Medusa's head, he is said to have become a king of Iberia.`,
  },
  {
    'Апсары ': `In Indian mythology, what name is given to the beautiful, supernatural female beings that are the spirits of clouds and waters? They are superb in the art of dancing, and are often the wives of the Gandharvas — the court musicians of Indra.`,
  },
  {
    'Галатея ': `In mythology, which name is shared by an ivory statue carved by Pygmalion which subsequently came to life, as well as a nereid (sea nymph) who was the love interest of Polyphemus the Cyclops?`,
  },
  {
    'Арий ': `Born 256 AD in Libya, which priest gives his name to the belief that Jesus Christ, the Son of God, is entirely distinct from and subordinate to the God the Father, and hence in opposition to mainstream Christian teachings on the nature of the Trinity and the nature of Christ? He was declared a heretic by the First Council of Nicaea and banished.`,
  },
  {
    'Авалон ': `First mentioned in Geoffrey of Monmouth’s ‘Historia regum Britanniae’ and described as ‘the island of apples called fortunate’, it is the island to which Britain’s legendary King Arthur sailed after his final battle. Name this island.`,
  },
  {
    'Скади ': `Ill-fated or star-crossed lovers is a common theme across cultures, and is present even in Nordic myth. Which goddess of winter married the sea god Njörd (Njörðr), but in the end had to split up because he couldn’t bear to be away from the seas, while she was happier in her mountain home in Thrymheim?`,
  },
  {
    'Дукха ': `Commonly translated as 'pain', 'suffering' or 'unsatisfactoriness', which concept in Buddhism (and Hinduism) inspires the Four Noble Truths and nirvana doctrines?`,
  },
  {
    'Сигурд ': `Which legendary hero of Norse mythology slew the dragon Fafnir with his sword Gram, and also married the shieldmaiden Brynhildr?`,
  },
  {
    'Ахилл ': `A legendary people of Greek history, the Myrmidons were brave warriors trained and commanded by which mythological hero?`,
  },
  {
    'Мокша ': `In Hinduism, which six-letter word derived from the Sanskrit for ‘release’ refers to the liberation or freedom from the cycle of death and rebirth? One of the four goals of life, it is the rough equivalent of the Buddhist concept of nirvana.`,
  },
  {
    'Морони ': `According to the sacred book of the Latter Day Saint movement, what is the name of the angel who visited Joseph Smith on several occasions beginning in September 1823, telling him about the golden plates buried near his home? In his mortal life, he was the last prophet of the Nephite tribe, who lived in the Americas around 4th and 5th centuries.`,
  },
  {
    'Игрейн ': `In legend, who is the mother of King Arthur? Originally the wife of Gorlois, Duke of Cornwall, she was apparently tricked when Uther Pendragon took the guise of Gorlois (with Merlin’s help), leading to Arthur’s conception.`,
  },
  {
    'Цикада ': `In Greek mythology, the Trojan prince Tithonus was a lover of Eos, the goddess of the dawn. Eos asked Zeus to make Tithonus immortal, but forgot to ask for eternal youth. As such, he grew old and infirm but was unable to die, eventually turning into which insect?`,
  },
  {
    'Потифар ': `In the Book of Genesis, what is the name of the captain of the palace guard whose wife accused Joseph of raping her, resulting in Joseph being thrown into prison?`,
  },
  {
    'Ладон ': `In Greek myth, what is the name of the 100-head dragon that twined around the tree in the Garden of the Hesperides and guarded the golden apples? Slain by Heracles, it was put into the heavens and became the constellation Draco.`,
  },
  {
    'Yo La Tengo ': `(band etymology) The name is a reference to a story about the 1962 US Major League Baseball expansion team, the New York Mets. When two players chase the same batted fly ball, customarily one yells "I've got it" and the other then retreats to avoid a collision. But infielder Elio Chacón did not understand the English term, so he and outfielder Richie Ashburn collided a few times while chasing fly balls. Another teammate suggested that Ashburn yell the words in Spanish instead–"yo la tengo"–so Chacón would understand. After that Ashburn and Chacón no longer ran into each other. But another teammate, Frank Thomas, did not understand the Spanish term. So one day while chasing a fly ball, despite hearing Ashburn call out "yo la tengo", Howard ran into Ashburn`,
  },
  {
    'UB40 ': `(band etymology) The UK government's form number for the Unemployment Benefit Attendance Card, as shown on the band's debut album Signing Off.`,
  },
  {
    'St Mary Mead': `What is the name of the fictional village that is thome to Miss Marple? It is the setting for Murder in the Vicarage? `,
  },
  {
    'Roger DEAKINS': `Which English cinematographer began working with director Denis Villeneuve, starting with Prisoners (2013)? They later collaborated on "Sicario" (2015) and "Blade Runner 2049" (2017), the latter of which brought him his first Oscar for Best Cinematography in his 14th nomination. `,
  },
  {
    Nook: `What is the name of the Barnes & Noble e-reader brand? Its four-letter name is a synonym for a cosy corner of a room. `,
  },
  {
    Тинджан: `Myanmar, what is the name of the festival that celebrates the Buddhist New Year? Celebrations of this festival heavily involve water.`,
  },
  {
    'Shudra ': `The lowest in the historical Indian Varna caste system (excluding Dalits), which caste included labourers and artisans? `,
  },
  {
    'THE FLINTSTONES': `Which animated sitcom (1960-1966) is set in the fictional city of Bedrock? `,
  },
  {
    Songhai: `Sonni Ali was the first king of which empire, prominent in West Africa in the 15th and 16th centuries?  `,
  },
  {
    'Santo Domingo': `With a metro population of over 3.6 million which is the most populous city situated on a Caribbean island? `,
  },
  {
    Warzone: `Developed by Raven Software and Infinity Ward and published by Activision as part of Call of Duty: Modern Warfare in 2019, what is the name of the free-to-play, cross-platform battle royale originally set in the fictional area of Verdansk? The game is named for a large-scale combat area.`,
  },
  {
    'TRISTAN DA CUNHA': `Edinburgh of the Seven Seas is the capital and only settlement of which very remote island group, a constituent part of a British Overseas Territory? `,
  },
  {
    'TOLTEC Empire': `From around 700 CE until its fall in around 1150 CE, the city of Tula was the capital of which Mesoamerican culture? `,
  },
  {
    BRAZIL: `The Boys from (BLANK) is a 1976 thriller novel written by Ira Levin, concerning the plans of Joseph Mengele, who has created clones of Adolf Hitler in which South American country? `,
  },
  {
    'READY TO DIE': `Released in 1994 to critical acclaim, what was the debut solo album of the Notorious B.I.G.? The title proved sadly prescient as he was murdered just three years later.`,
  },
  {
    'Virat KOHLI': `Which Indian batter, who stepped down as captain across all formats in 2021, has the record for most centuries in One Day International cricket, with 50? He remains second behind Sachin Tendulkar for centuries across all formats. `,
  },
  {
    REDDIT: `Before selling Wordle to The New York Times, Josh Wardle created the collaborative social experiments The Button and Place while employed by which website, which has marketed itself as ‘the front page of the internet’? `,
  },
  {
    'ZAPOTEC ': `The ancient city of Monte Albán was at the centre of which Mesoamerican civilization from around 700 BCE to 1500 CE? `,
  },
  {
    'CANIS MAJOR': `Sirius, the brightest star in the night sky, is located within which constellation that takes its name from the Latin for ‘greater dog’? `,
  },
  {
    Fencing: `At the London Olympics, the Italian Valentina Vezzali won her sixth career Olympic gold medal. In which sport did she compete?`,
  },
  {
    '1899': `Debuting in 2022, which multilingual German-made Netflix sci-fi series follows a group of immigrants from various countries on a steamship? `,
  },
  {
    'Shaggy ': `legal strategy in which the defendant continues to deny charges despite witnesses and evidence, professing "it wasn't me" [emphasise these quotation marks], shares a name with which Scooby-Doo character? `,
  },
  {
    'Количественное смягчение ': `QE is an expansionary monetary policy whereby a central bank buys predetermined amounts of government bonds or other financial assets in order to stimulate the economy and increase liquidity. What does QE stand for? `,
  },
  {
    CUNARD: `Many of the ships run by which cruise line company traditionally ended in the letters ‘ia’, such as ‘Lusitania’, ‘Mauretania’ and ‘Lucania’? `,
  },
  {
    'Jacques NECKER': `Which Swiss banker was finance minister for Louis XVI between 1777 and 1781, and again from 1788 to 1789? His dismissal, on 11 July 1789, was a factor in provoking the storming of the Bastille a few days later. `,
  },
  {
    LAOS: `Which landlocked country in Asia traces its history to the kingdom of Lan Xang (Лансанг) ('million elephants'), which was founded in the 14th century? `,
  },
  {
    'DIDIUS JULIANUS ': `After the assassination of Pertinax in 193 CE, who became Emperor of Rome when the title was put up to the highest bidder by the Praetorian Guard? He was the second emperor in the 'Year of the Five Emperors'. `,
  },
  {
    'George MACIUNAS': `Joseph Beuys and Yoko Ono were members of the international network of artists and composers known as Fluxus, that was founded in 1960 by which Lithuanian/American artist? `,
  },
  {
    'Storm (or Ororo Munroe)': `Halle Berry played which mutant superhero in the ‘X-Men’ film series? `,
  },
  {
    merlion: `This mythical animal is a modern-day symbol of Singapore. A statue of one of these animals spews water in Singapore's Financial District (picture taken by the author in 2019). `,
  },
  {
    Сиань: `Which city in the north-central part of China is the home to the Terracotta Army of Emperor Qing Shihuang, the starting point of the Silk Route and also gives its name to a famous incident of 1936 when Generalissimo Chiang Kai-shek was held hostage, that led to the nationalist & communist forces uniting to fight the invading Japanese?`,
  },
  {
    'Matthew effect': `Coined by the sociologist Robert K. Merton in 1968 taking its name from a book of the New Testament, what is the name given to the phenomenon whereby the rich get richer and the poor get poorer? The specific reference pertains to Jesus' parable of the talents within it, which states that, ‘For unto every one that hath shall be given, and he shall have abundance: but from him that hath not shall be taken even that which he hath’. `,
  },
  {
    Tuvalu: `Established as a British protectorate in 1892, the Gilbert and Ellice Islands in the Central Pacific were divided into two colonies in 1976. Shortly after that, they gained independence – the Gilbert Islands became the Republic of Kiribati, while the Ellice Islands became known as what? `,
  },
  {
    Orphism: `Coined by the French poet Guillaume Apollinaire in 1912, which term (deriving from the name of a figure in Greek myth) refers to the artistic movement that was an offshoot of Cubism which focused on pure abstraction and bright colours? Prominent proponents of this style include Frantisek Kupka and Robert Delaunay. `,
  },
  {
    'Golan Heights': `The Six Day War of 1967 saw the victorious Israelis take the Sinai Peninsula from Egypt, the West Bank and East Jerusalem from Jordan, and which hilly area from Syria? `,
  },
  {
    Galahad: `In Arthurian legend, which knight was the illegitimate son of Lancelot and Elaine, and the only one predestined to achieve the Holy Grail? `,
  },
  {
    'Baku, Azerbaijan': `Known as the ‘City of Winds’, it is the lowest-lying national capital in the world. Located on the southern shore of the Absheron Peninsula, UNESCO World Heritage Sites that can be found in it include the Maiden Tower and the Palace of the Shirvanshahs. Which city is this? `,
  },
  {
    'Паньгу ': `In Chinese mythology, which primitive hairy giant is regarded as the first living being and a creator figure? Born from a cosmic egg 18,000 years ago after the coalescence of chaos, he separated the sky and earth; when he died, his breath became the wind and clouds and his voice thunder, while the rest of his body transformed into the physical features of the world.`,
  },
  {
    'Cleveland Cavaliers': `‘The Decision’ is a 2010 televised special in which the NBA star LeBron James announced his decision to join the Miami Heat, after he had spent the preceding seven seasons with which other NBA team with whom he reached the Finals in 2007 before being defeated by the San Antonio Spurs? `,
  },
  {
    'Федра ': `The 1924 Eugene O’Neill play ‘Desire Under the Elms’ is largely based on the story of which figure from Greek mythology? The daughter of King Minos and sister of Ariadne, she was married to Theseus but fell in love with his son Hippolytus; rejected by the latter, she accused him of rape, leading to Theseus killing him.`,
  },
  {
    'Пелей ': `A son of the king of Aegina, which hero in Greek myth accompanied Heracles and Jason on their various quests and adventures? His marriage to the sea-nymph Thetis produced seven sons, all of whom died in infancy except one – Achilles.`,
  },
  {
    'Дигамбара ': `Which of the two major denomination of Jainism has a name that means ‘sky-clad’ in Sanskrit, referencing the practice of its male ascetics in shunning all property and wearing no clothes? The ascetics of the other branch (the Shvetambara, or ‘white-clad’) wear white robes.`,
  },
  {
    'Филоктет ': `The subject of four different ancient Greek plays (each by one of the three major tragedians although only Sophocles’ version has survived), which hero of the Trojan war was the son of King Poeas of Meliboea? A famed archer, he survived a venomous snake bite, was stranded on the island of Lemnos before firing the arrow that killed Paris.`,
  },
  {
    'Сурт ': `In Nordic myth, which jotunn (giant) ruled over the fiert realm of Muspelheim? As told in the ‘Prose Edda’, he will go to battle against Freyr during Ragnarok, and afterward the flames that he brings forth from his burning sword will engulf the Earth.`,
  },
  {
    'Архат ': `Its name deriving from Sanskrit for ‘one who is worthy’, what term in Buddhism refers to a perfect person who has achieved nirvana and has escaped the cycle of rebirth? Known as 罗汉 in Chinese and rakan in Japanese, they represent the 16-18 close disciples of the Buddha who were entrusted by him to remain in the world and not to enter nirvana until the coming of the next buddha.`,
  },
  {
    'Тор ': `In Norse myth, which god rides on a chariot drawn by the goats Tanngrisnir (Teeth-barer) and Tanngnjostr (Teeth-grinder)? He also wears the magical items megingjörð (a belt) and Jarngreipr (iron gloves).`,
  },
  {
    'Птах ': `In Egyptian myth, which deity (originally the demiurge of Memphis) is widely considered as the creator-god who conceived the world by the thought of his heart? The consort of Sekhmet the lion-goddess, he is usually depicted as a mummified man with green skin and holding a sceptre which combines the powerful ankh-djed-was symbols.`,
  },
  {
    'GERLACHovský štít': `Located in the High Tatras range in Slovakia, what is the tallest peak in the Carpathian mountains? Your answer may be the informal shortened name of this mountain.`,
  },
  {
    'Мордред ': `In legend, who mortally wounded King Arthur at the Battle of Camlann and was himself killed as well? His relationship to Arthur varies from illegitimate son to nephew, according to different sources.`,
  },
  {
    'ULAY ': `Which German performance artist collaborated with his wife Marina Abramović on many works, including Rest Energy, in which he pointed an arrow at Abramović's heart? `,
  },
  {
    'Nazca Plate ': `The Andes have largely been created by the subduction of which minor tectonic plate off the west coast of South America beneath the South American plate? `,
  },
  {
    'Ons Jabeur': `Which woman, the first Arab tennis player to reach a Grand Slam final, lost the 2023 and 2022 Wimbledon finals? `,
  },
  {
    'Casper Ruud ': `Which man, the top Norwegian tennis player (as his father was in the 1990s), lost the 2023 and 2022 French Open finals? `,
  },
  {
    'APULIA (Базиликата - подошва, Калабрия - мысок )': `Which region of Italy, bordering the Adriatic Sea to the east, the Strait of Otranto and the Ionian Sea to the southeast, and the Gulf of Taranto to the south, forms the ‘heel’ of the Italian boot? This region has its capital at Bari `,
  },
  {
    'The GRADUATE': `George Michael’s 1992 hit ‘Too Funky’ features the sampled line “Would you like me to seduce you? ” spoken by Anne Bancroft in which 1967 movie? `,
  },
  {
    'EUPHONIUM ': `Which brass instrument derives its name from the Greek for ‘sweet voiced’ or ‘well-sounding’? `,
  },
  {
    'MUTUALISM ': `Mycorrhizae are an example of what type of symbiotic relationship in which both species benefit? This is contrasted with commensalism, in which one benefits and the other is unaffected. `,
  },
  {
    'Susanna CLARKE': `Inspired by the Italian artist of the same name, which author won the 2021 Women's Prize for Fiction for the novel Piranesi? `,
  },
  {
    'LEO X': `The Medici family had four of its members rise to the Papacy. The first to do so was Giovanni, who was head of the Church from 1513 to 1521 under what Papal name and number? He promulgated the Papal Bull Exsurge Domine in response to the teachings of Martin Luther. `,
  },
  {
    'Микориза ': `Important for plant nutrition and improving soil conditions for growth, what term is given to a symbiotic association between the root system of a plant and a fungus?`,
  },
  {
    'KOREAN War (Пханмунджом)': `An armistice signed in 1953 in Panmunjom brought a de facto end to which Asian war? One of the nations involved claimed that their enemies - known today as one of the strictest totalitarian states - have violated the armistice terms over 200 times since being signed.`,
  },
  {
    'Barbara KINGSOLVER': `Inspired by Dickens David Copperfield, which author won the 2023 Women’s Prize for Fiction for the novel Demon Copperhead? `,
  },
  {
    'Лю Сяобо ': `When this Chinese (1955 - 2017), writer, literary critic, philosopher and human rights activist was laureate with the Nobel Peace Prize in 2010, he was under arrest. Who are we looking for? `,
  },
  {
    'Hugh Masekela (Отец южноафриканского джаза)': `Born in Johannesburg, South-Africa, in 1939, this man has covered the globe and played with almost every star you can think of. He performed with Paul Simon on the 'Graceland' tour and defended Simon vigorously when the tour was seen as a violation of the ANC's cultural boycott. His 1987 hit 'Bring Him Back Home' became the anthem for Nelson Mandela's world tour following his release from prison in 1992. But who are we looking for?              `,
  },
  {
    'Сирил Джеймс ': `This man from Trinidad and Tobago was a socialist historian whose extraordinary work on the victory of Haitian slaves against the mighty French Army in the Haitian Revolution, "The Black Jacobins" (1938), was immediately acclaimed. His 1963 book of autobiography and cricket writings, "Beyond a Boundary", is equally loved. But who was he? `,
  },
  {
    'Ground zero': `What two-word term denotes the point on the earth's surface directly above or below an exploding nuclear bomb? The term became widely used again in the second half of 2001. `,
  },
  {
    'The Last Waltz (Концерт The Band)': `The action of which acclaimed Martin Scorsese film takes place entirely in San Francisco on November 26, 1976? `,
  },
  {
    'Saul Bass': `In the same year he designed Continental Airlines' "jetstream" logo, which man directed the Academy Award-winning 1968 animated short documentary Why Man Creates? `,
  },
  {
    'Grigoris Lambrakis': `The 1969 Costa-Gavras film Z was inspired by the 1963 assassination of which man — who, in 1936, competed for Greece in the Olympic men's long-jump and triple-jump? `,
  },
  {
    Qantas: `Operating some of the longest flights in the world and boasting a sterling safety record, this is the flag carrier of Australia. `,
  },
  {
    WizzAir: `This Hungarian low-cost carrier is another leading European budget airline, and Luton (alongside Budapest) is one of its hubs. `,
  },
  {
    Avianca: `Based at El Dorado International Airport in Bogata, this flag carrier of Colombia is the second largest airline in South America. `,
  },
  {
    '1976 (Boris Onishchenko being the Soviet modern pentathlete who cheated in the fencing at the Summer Olympic Games in Montréal)': `In what year was the phrase "Boris DISonishchenko" coined?`,
  },
  {
    'New Zealander ': `What nationality is Nigel Richards, the five-time and current world Scrabble champion? `,
  },
  {
    'LOS ANGELES ': `Which city is scheduled to host the 2028 Summer Olympic Games? It will be the third time that this US city will host the Summer Games.`,
  },
  {
    'JEDDAH Tower': `Previously named the Kingdom Tower, which Saudi skyscraper - projected to be the first kilometre tall building in the world - resumed construction this year after five years of inactivity? `,
  },
  {
    'Who was the first Japanese Nobel laureate, receiving the Nobel Prize in Physics in 1949 for his prediction of the pi meson, or pion? ': `Hideki YUKAWA`,
  },
  {
    'KUALA LUMPUR': `Merdeka 118, formerly known as Menara Warisan Merdeka, is currently the 2nd highest building in the world and can be found in which Asian city? `,
  },
  {
    BRISBANE: `Which city, the capital of Queensland, is scheduled to host the 2032 Summer Olympic Games? It will follow Melbourne and Sydney as the third Australian city to host the Summer Games in its history. `,
  },
  {
    'Robert BROWNING': `Which writer composed the poem ‘Childe Roland to the Dark Tower Came’, the inspiration for Stephen King’s Dark Tower series of fantasy novels? The poem was published in 1855 as part of the collection Men and Women. `,
  },
  {
    AKRON: `According to the 2020 census, what is the fifth largest city in Ohio? This city, once known as the ‘Rubber Capital of the World’, has a name derived from the Greek for ‘summit’ or ‘high point’. `,
  },
  {
    'Безумства Зигфельда ': `Named after the American impresario who founded them in 1907, what was the name of the theatrical revue productions held on Broadway until 1931? Described as a mix of theatre, variety show and vaudeville, the series brought fame to figures including Sophie Tucker and Barbara Stanwyck. `,
  },
  {
    'Dorothy HODGKIN': `Which British scientist used X-ray crystallography techniques to determine the structure of insulin? In 1964, she became the third woman to win the Nobel Prize for Chemistry.`,
  },
  {
    'Вал Оффы': `Stretching around 150 miles, the large earthwork that roughly follows the boundary between England and Wales is named for which Anglo-Saxon king who ordered its construction?`,
  },
  {
    'The Field of the CLOTH OF GOLD': `Arranged to forge bonds of friendship between England and France, the lavish summit held by Henry VIII [the eighth] and King Francis I [the first] of France in Calais in 1520 was given what name? `,
  },
  {
    '4000 ': `What 4-digit number follows 'X-Seed' in the name of the conceptual megatall skyscraper proposed by the Taisei Corporation, which theoretically could house up to a million people? `,
  },
  {
    'Google SHEETs': `Which application included in the Google Drive service is compatible with Microsoft Excel file formats? `,
  },
  {
    'T. REX ': `In 1967 Marc Bolan founded which glam rock band that had number 1 singles including ‘Hot Love’ and ‘Get it On’? `,
  },
  {
    PANGOLINs: `What mammals of the order Pholidota have long sticky tongues that are attached near the pelvis and can be longer than the animal itself? These are the most trafficked animals in the world and are also known as ‘scaly anteaters’. `,
  },
  {
    'Нейроглия ': `What is the name given to the cells in the brain and nervous system which are non-neuronal and create no electrical impulses? They make up more than a half of the volume of neural tissue in the human body. `,
  },
  {
    'Jochen Rindt': `Which Austrian driver won the formula one world championship in 1970? He was killed during a practice session for the Italian Grand Prix that year, becoming the only driver to win the world title posthumously`,
  },
  {
    Maybelline: `Which makeup brand's name is derived from the founder's sister, who inspired him to create the company's first lash-darkening product in 1915? It's name is very similar to that of a 1955 Chuck Berry song. `,
  },
  {
    'METCALFE’s law': `Which eponymous law states that the financial value or influence of a telecommunications network is proportional to the square of the number of connected users? This law is named after the American engineer who co-invented ethernet and founded the company 3Com. `,
  },
  {
    Hatshepsut: `Who became ruler of Egypt around 1478 BC following the death of her husband Tuthmosis II? Initially regent for her stepson Tutmosis III, she later became his co-ruler, spending around two decades on the throne. `,
  },
  {
    'Forgetting curve': `What is the two-word name for the graphical hypothesis showing the decline of memory retention over time, originally postulated by psychologist Hermann Ebbinghaus in the 1880s? `,
  },
  {
    'YELLOWSTONE National Park': `Which was the USA’s first national park? Located primarily in Wyoming, this world-famous park spills into Montana and Idaho. `,
  },
  {
    'Jean-Luc PICARD': `Despite having had a long theatrical career, Patrick Stewart’s breakout television role came aged 47, when he played which character in Star Trek: The Next Generation? The captain of the USS Enterprise, this character also gives his name to a series that premiered in 2020 with Stewart in the lead role. `,
  },
  {
    'March ': `What is the surname of the four sisters who are the principal characters in Louisa May Alcott's 1868 novel Little Women? March 4a Which queen of England reigned from 1702 to 1714, becoming the first monarch to rule over the United Kingdom of England and Scotland?`,
  },
  {
    ELVIS: `Directed by Baz Luhrmann, which 2022 biopic starred Austin Butler in the title role and Tom Hanks as Colonel Tom Parker`,
  },
  {
    'ANDREA CHÉNIER ': `Italian composer Umberto Giordano [jor-DAN-o] is best known for which 1896 opera that is loosely based on the life of a French poet who was executed during the French Revolution? Jonas Kauffman played the title role in a 2015 Royal Opera production of this opera, which is being revived next year. `,
  },
  {
    'OLD FAITHFUL': `The first geyser to be named in Yellowstone National Park was which world-famous cone geyser named after its extreme predictability? Since the turn of the millennium, it has erupted at least once every two hours. `,
  },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  { '': `` },
  {
    'Красные принцы': `(в англоязычной литературе передаётся терминами «Princelings» и «Party’s Crown Princes») — термин для обозначения неформальной группировки детей и родственников представителей высшего руководства КНР.`,
  },
];
