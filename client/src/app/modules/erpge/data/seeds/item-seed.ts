import { ItemType } from '../../flags/asset-enums';
import {
  Armor,
  BodyLotion,
  HairDye,
  Item,
  SkinOil,
  Weapon,
} from '../../models/item';

class ItemSeed {
  readonly data: Item[];

  constructor() {
    this.data = [
      // Corruption of Champions

      // --------- KeyItemTypeContainer --------

      // Books
      new Item(ItemType.Key, 'Book - Dangerous Plants'),
      new Item(ItemType.Key, 'Book - Hentai Comic'),
      new Item(ItemType.Key, 'Book - Travel Guide'),
      new Item(ItemType.Key, 'Book - Yoga Guide'),
      // Toys
      new Item(ItemType.Key, 'Toy - All-Natural Belt'),
      new Item(ItemType.Key, 'Toy - All-Natural Onahole'),
      new Item(ItemType.Key, 'Toy - Centaur Pole'),
      new Item(ItemType.Key, 'Toy - Deluxe Dildo'),
      new Item(ItemType.Key, 'Toy - Deluxe Onahole'),
      new Item(ItemType.Key, 'Toy - Dildo'),
      new Item(ItemType.Key, 'Toy - Dual Belt'),
      new Item(ItemType.Key, 'Toy - Fake Mare'),
      new Item(ItemType.Key, 'Toy - Onahole'),
      new Item(ItemType.Key, 'Toy - Stimulation Belt'),
      // Milker Stuff
      new Item(ItemType.Key, 'Breast Milker'),
      new Item(ItemType.Key, "Breast Milker - Installed at Whitney's Farm"),
      new Item(ItemType.Key, 'Cock Milker'),
      new Item(ItemType.Key, "Cock Milker - Installed at Whitney's Farm"),
      // Storage Containers
      new Item(ItemType.Key, 'Equipment Rack - Armor'),
      new Item(ItemType.Key, 'Equipment Rack - Weapons'),
      new Item(ItemType.Key, 'Equipment Rack - Shields'),
      // Others
      new Item(ItemType.Key, 'Bow'),
      new Item(ItemType.Key, 'Potent Mixture'),
      new Item(ItemType.Key, "Tamani's Satchel"),
      new Item(ItemType.Key, "Traveler's Guide"),
      new Item(ItemType.Key, 'Deluxe Dildo'),
      new Item(ItemType.Key, 'All-Natural Onahole'),
      new Item(ItemType.Key, 'Divine Bark Plates'),
      new Item(ItemType.Key, 'Tentacled Bark Plates'),
      new Item(ItemType.Key, "Rathazul's Purity Potion"),
      new Item(ItemType.Key, 'Dangerous Plants'),

      // --------- ItemConsumables --------

      //------------
      // STANDARD
      //------------
      new Item(
        ItemType.Consumable,
        'Bee Honey',
        'BeeHony',
        'a small vial filled with giant-bee honey',
        'This fine crystal vial is filled with a thick amber liquid that glitters dully in the light. You can smell a sweet scent, even though it is tightly corked.',
      ),
      new Item(
        ItemType.Consumable,
        'Canine Pp',
        'CanineP',
        'a canine pepper',
        'The pepper is shiny and red, bulbous at the base but long and narrow at the tip. It smells spicy.',
      ),
      new Item(
        ItemType.Consumable,
        'Large Pp',
        'Large P',
        'an overly large canine pepper',
        "This large canine pepper is much bigger than any normal peppers you've seen.",
        10,
      ),
      new Item(
        ItemType.Consumable,
        'Double Pp',
        'DoubleP',
        'a double canine pepper',
        'This canine pepper is actually two that have grown together due to some freak coincidence.',
        10,
      ),
      new Item(
        ItemType.Consumable,
        'Black Pp',
        'Black P',
        'a solid black canine pepper',
        "This solid black canine pepper is smooth and shiny, but something about it doesn't seem quite right...",
        10,
      ),
      new Item(
        ItemType.Consumable,
        'Knotty Pp',
        'KnottyP',
        'a knotty canine pepper',
        'This knotted pepper is very swollen, with a massive, distended knot near the base.',
        10,
      ),
      new Item(
        ItemType.Consumable,
        'Bulby Pp',
        'Bulby P',
        'a bulbous canine pepper',
        'This bulbous pepper has a slightly different shape than the other canine peppers, with two large orb-like protrusions at the base.',
        10,
      ),
      new Item(
        ItemType.Consumable,
        'Equinum',
        'Equinum',
        'a vial of Equinum',
        'This is a long flared vial with a small label that reads, "<i>Equinum</i>". It is likely this potion is tied to horses in some way.',
      ),
      new Item(
        ItemType.Consumable,
        'Goblin Ale',
        'Gob.Ale',
        'a flagon of potent goblin ale',
        "This sealed flagon of 'Goblin Ale' sloshes noisily with alcoholic brew. Judging by the markings on the flagon, it's a VERY strong drink, and not to be trifled with.",
      ),
      new Item(
        ItemType.Consumable,
        'Golden Seed',
        'G.Seed',
        'a golden seed',
        'This seed looks and smells absolutely delicious.  Though it has an unusual color, the harpies prize these nuts as delicious treats.  Eating one might induce some physical transformations.',
      ),
      new Item(
        ItemType.Consumable,
        'Hummanus',
        'Hummus ',
        'a small jar of hummus',
        'This is a small jar with label that reads, "<i>Hummanus</i>". If the name clues you in, this might be how humanity is regained.',
      ),
      new Item(
        ItemType.Consumable,
        'Imp Food',
        'ImpFood',
        'a parcel of imp food',
        'This is a small parcel of reddish-brown bread stuffed with some kind of meat. It smells delicious.',
      ),
      new Item(
        ItemType.Consumable,
        'La Bova',
        'LaBova',
        'a bottle containing a misty fluid labeled "LaBova"',
        'A bottle containing a misty fluid with a grainy texture, it has a long neck and a ball-like base.  The label has a stylized picture of a well endowed cowgirl nursing two guys while they jerk themselves off.',
      ),
      new Item(
        ItemType.Consumable,
        'Lactaid',
        'Lactaid',
        'a pink bottle labelled "Lactaid"',
        "Judging by the name printed on this bottle, 'Lactaid' probably has an effect on the ability to lactate, and you doubt that effect is a reduction.",
      ),
      new Item(
        ItemType.Consumable,
        'MinoBlood',
        'M.Blood',
        'a vial of Minotaur blood',
        "You've got a scratched up looking vial full of bright red minotaur blood.  Any time you move it around it seems to froth up, as if eager to escape.",
      ),
      new Item(
        ItemType.Consumable,
        'MinoCum',
        'M.Cum',
        'a sealed bottle of minotaur cum',
        'This bottle of minotaur cum looks thick and viscous.  You know it has narcotic properties, but aside from that its effects are relatively unknown.',
      ),
      new Item(
        ItemType.Consumable,
        'Pig Truffle',
        'PigTruf',
        'a pigtail truffle',
        "It's clear where this fungus gets its name. A small, curly sprig resembling a pig's tail can be seen jutting out of it.",
      ),
      new Item(
        ItemType.Consumable,
        'Pure Honey',
        'PurHon',
        'a crystal vial filled with glittering honey',
        'This fine crystal vial is filled with a thick amber liquid that glitters in the light.  You can smell a sweet scent, even though it is tightly corked.',
      ),
      new Item(
        ItemType.Consumable,
        'Reptilum',
        'Reptilum',
        'a vial of Reptilum',
        'This is a rounded bottle with a small label that reads, "<i>Reptilum</i>".  It is likely this potion is tied to reptiles in some way.',
      ),
      new Item(
        ItemType.Consumable,
        'Snake Oil',
        'SnakeOil',
        'a vial of snake oil',
        'A vial the size of your fist made of dark brown glass. It contains what appears to be an oily, yellowish liquid. The odor is abominable.',
      ),
      new Item(
        ItemType.Consumable,
        'Special Honey',
        'SPHoney',
        'a bottle of special bee honey',
        'A clear crystal bottle of a dark brown fluid that you got from the bee handmaiden.  It gives off a strong sweet smell even though the bottle is still corked.',
        20,
      ),
      new Item(
        ItemType.Consumable,
        'TrapOil',
        'TrapOil',
        'a vial of trap oil.',
        'A round, opaque glass vial filled with a clear, viscous fluid.  It has a symbol inscribed on it, a circle with a cross and arrow pointing out of it in opposite directions.  It looks and smells entirely innocuous.',
      ),
      new Item(
        ItemType.Consumable,
        'Wet Cloth',
        'W.Cloth',
        'a wet cloth dripping with slippery slime',
        "Dripping with a viscous slime, you've no doubt rubbing this cloth on your body would have some kind of strange effect.",
      ),
      new Item(
        ItemType.Consumable,
        'W.Fruit',
        'W.Fruit',
        'a piece of whisker-fruit',
        'This small, peach-sized fruit has tiny whisker-like protrusions growing from the sides.',
      ),
      //------------
      // DEMONIC
      //------------
      new Item(
        ItemType.Consumable,
        'I.Draft',
        'I.Draft',
        'a flask of Incubi draft',
        'The cork-topped flask swishes with a slimy looking off-white fluid, purported to give incubi-like powers. A stylized picture of a humanoid with a huge penis is etched into the glass.',
      ),
      new Item(
        ItemType.Consumable,
        'P.Draft',
        'P.Draft',
        'an untainted flask of purified Incubi draft',
        'The cork-topped flask swishes with a slimy looking off-white fluid, purported to give incubi-like powers. A stylized picture of a humanoid with a huge penis is etched into the glass. Rathazul has purified this to prevent corruption upon use.',
        20,
      ),
      new Item(
        ItemType.Consumable,
        'SucMilk',
        'SucMilk',
        'a bottle of Succubi milk',
        'This milk-bottle is filled to the brim with a creamy white milk of dubious origin. A pink label proudly labels it as "<i>Succubi Milk</i>". In small text at the bottom of the label it reads: "<i>To bring out the succubus in YOU!</i>"',
      ),
      new Item(
        ItemType.Consumable,
        'P.S.Milk',
        'P.S.Mlk',
        'an untainted bottle of Succubi milk',
        'This milk-bottle is filled to the brim with a creamy white milk of dubious origin. A pink label proudly labels it as "<i>Succubi Milk</i>". In small text at the bottom of the label it reads: "<i>To bring out the succubus in YOU!</i>" Rathazul has purified this to prevent corruption upon use.',
        20,
      ),
      new Item(
        ItemType.Consumable,
        'S.Delite',
        'SDelite',
        "a bottle of 'Succubi's Delight'",
        'This precious fluid is often given to men a succubus intends to play with for a long time.',
      ),
      new Item(
        ItemType.Consumable,
        'PSDelit',
        'PSDelit',
        'an untainted bottle of "Succubi\'s Delight"',
        'This precious fluid is often given to men a succubus intends to play with for a long time.  It has been partially purified by Rathazul to prevent corruption.',
        20,
      ),
      //------------
      // NON-TFs
      //------------
      new Item(
        ItemType.Consumable,
        'Black Book',
        'B.Book',
        'a small book with a midnight-black cover',
        'This solid black book is totally unmarked, saved for a blood red clasp that holds the covers closed until you are ready to read it.  The pages are edged with gold, like some of the fancy books in the monastary back home.',
        40,
      ),
      new Item(
        ItemType.Consumable,
        'Condom',
        'Condom',
        'a condom packet',
        "This wrapper contains a latex condom that can be worn over penis. It's designed to prevent pregnancy most of the time. Can be used in certain sex scenes.",
        6,
      ),
      new Item(
        ItemType.Consumable,
        'F. Fillet',
        'FishFil',
        'a fish fillet',
        'A perfectly cooked piece of fish. You\'re not sure what type of fish is, since you\'re fairly certain "delicious" is not a valid species.',
      ),
      new Item(
        ItemType.Consumable,
        'Lust Draft',
        'L.Draft',
        'a vial of roiling bubble-gum pink fluid',
        'This vial of bright pink fluid bubbles constantly inside the glass, as if eager to escape. It smells very sweet, and has "Lust" inscribed on the side of the vial.',
        20,
      ),
      new Item(
        ItemType.Consumable,
        'Fuck Draft',
        'F.Draft',
        'a vial of roiling red fluid labeled "Fuck Draft".',
        'This vial of red fluid bubbles constantly inside the glass, as if eager to escape.  It smells very strongly, though its odor is difficult to identify.  The word "Fuck" is inscribed on the side of the vial.',
        20,
      ),
      new Item(
        ItemType.Consumable,
        'Ovi Elixir',
        'OviElix',
        "a salve marked as 'Ovulation Exlixir'",
        'This hexagonal container with an egg-shaped label can help you or others lay eggs.',
        30,
      ),
      new Item(
        ItemType.Consumable,
        'Reducto',
        'Reducto',
        "a salve marked as 'Reducto'",
        'This container full of paste can be used to shrink a body part down by a significant amount.',
        30,
      ),
      new Item(
        ItemType.Consumable,
        'Scholars T.',
        'Smart T',
        "a cup of scholar's tea",
        'This potent tea supposedly has mind-strengthening effects.',
      ),
      new Item(
        ItemType.Consumable,
        'Tattered Scroll',
        'T.Scroll',
        'a tattered scroll',
        'This tattered scroll is written in strange symbols, yet you have the feeling that if you tried to, you could decipher it.',
      ),
      new Item(
        ItemType.Consumable,
        'Vitality T.',
        'Vital T',
        'a fish fillet',
        'This powerful brew is supposedly good for the strengthening the body.',
      ),
      new Item(
        ItemType.Consumable,
        'White Book',
        'W.Book',
        'a small book with a pristine white cover',
        'This white book is totally unmarked, and the cover is devoid of any lettering or title.  A shiny brass clasp keeps the covers closed until you are ready to read it.',
        40,
      ),
      //------------
      // DYES/OILS/LOTIONS
      //------------
      HairDye('AuburnD', 'Auburn'),
      HairDye('Black D', 'Black'),
      HairDye('Blond D', 'Blond'),
      HairDye('BlueDye', 'Blue'),
      HairDye('Brown D', 'Brown'),
      HairDye('GrayDye', 'Gray'),
      HairDye('Green D', 'Green'),
      HairDye('OrangeD', 'Orange'),
      HairDye('PinkDye', 'Pink'),
      HairDye('PurpleD', 'Purple'),
      HairDye('RainDye', 'Rainbow'),
      HairDye('Red Dye', 'Red'),
      HairDye('White D', 'White'),

      SkinOil('DarkOil', 'Dark'),
      SkinOil('EbonyOl', 'Ebony'),
      SkinOil('FairOil', 'Fair'),
      SkinOil('LightOl', 'Light'),
      SkinOil('MahogOl', 'Mahogany'),
      SkinOil('OliveOl', 'Olive'),
      SkinOil('RussOil', 'Russet'),

      BodyLotion('ClearLn', 'Clear', 'smooth thick creamy liquid'),
      BodyLotion('RoughLn', 'Rough', 'thick abrasive cream'),
      BodyLotion('SexyLtn', 'Sexy', 'pretty cream like substance'),
      BodyLotion('SmthLtn', 'Smooth', 'smooth thick creamy liquid'),

      //-------------
      // EGGS
      //-------------

      // Needed for Amily transformation code to work. Flesh out when we can obtain the items.
      new Item(ItemType.Consumable, 'Black Egg', 'BlEgg', 'a black egg'),
      new Item(
        ItemType.Consumable,
        'L.Black Egg',
        'LBlEgg',
        'a large black egg',
      ),

      // --------- ItemMaterials --------

      new Item(
        ItemType.Material,
        'Green Gel',
        'GreenGl',
        'a clump of green gel',
        'This tough substance has no obvious use that you can discern.',
      ),
      new Item(
        ItemType.Material,
        'B.Chitin',
        'B.Chitn',
        'a large shard of chitinous plating',
        'A perfect piece of black chitin from a bee-girl. It still has some fuzz on it.',
      ),
      new Item(ItemType.Material, 'Imp Skull', 'ImpSkull'),
      new Item(ItemType.Material, 'Spider Silk', 'SpiderSilk'),
      new Item(ItemType.Material, 'T_SSILK', 'T_SSILK'),
      new Item(ItemType.Material, 'Dragon Scale', 'DragonScale'),

      // --------- ItemArmor --------

      Armor(
        'C.Cloth',
        'C.Cloth',
        'a set of comfortable clothes',
        'These loose fitting and comfortable clothes allow you to move freely while protecting you from the elements.',
        'comfortable clothes',
        6,
        0,
      ),
      Armor(
        'Gel Armor',
        'GelArmr',
        'a suit of gel armour',
        'This suit of interlocking plates is made from a strange green material. It feels spongy to the touch but is amazingly resiliant.',
        'glistening gel-armor plates',
        150,
        10,
      ),
      Armor(
        'Bee Armor',
        'BeeArmr',
        'a set of chitinous armour',
        'A suit of armour cleverly fashioned from giant bee chitin. It comes with a silken loincloth to protect your modesty.',
        'sexy black chitin armour-plating',
        200,
        18,
        3,
      ),
      new Item(ItemType.Armor, "Lusty Maiden's Armor", 'L.Mad.Arm.'),
      new Item(ItemType.Armor, 'Goo Armor', 'GooArmor'),
      new Item(ItemType.Armor, 'Lethicite Armor', 'LethiciteArmor'),
      new Item(ItemType.Armor, 'Spider Silk Armor', 'SpiderSilkArmor'),
      new Item(ItemType.Armor, 'Spider Silk Robes', 'SpiderSilkRobes'),
      new Item(ItemType.Armor, 'Dragonscale Armor', 'DragonscaleArmor'),
      new Item(ItemType.Armor, 'Dragonscale Robes', 'DragonscaleRobes'),
      new Item(ItemType.Armor, 'DSCLARM', 'DSCLARM'),
      new Item(ItemType.Armor, 'Tentacled Bark Armor', 'TentacledBarkArmor'),
      new Item(ItemType.Armor, 'Divine Bark Armor', 'DivineBarkArmor'),
      new Item(ItemType.Armor, 'Divine Bark Plates', 'DivineBarkPlates'),

      // --------- ItemUndergarments --------

      new Item(ItemType.Undergarment, 'Spider Silk Bra', 'SpiderSilkBra'),
      new Item(
        ItemType.Undergarment,
        'Spider Silk Panties',
        'SpiderSilkPanties',
      ),
      new Item(
        ItemType.Undergarment,
        'Spider Silk Loincloth',
        'SpiderSilkLoincloth',
      ),
      new Item(ItemType.Undergarment, 'Dragonscale Bra', 'DragonscaleBra'),
      new Item(ItemType.Undergarment, 'Dragonscale Thong', 'DragonscaleThong'),
      new Item(
        ItemType.Undergarment,
        'Dragonscale Loincloth',
        'DragonscaleLoincloth',
      ),
      new Item(ItemType.Undergarment, 'Dragonscale Thone', 'DragonscaleThone'),

      // --------- ItemWeapon --------

      Weapon(
        'B. Sword',
        'B.Sword',
        'a beautiful sword',
        'This beautiful sword shines brilliantly in the light, showing the flawless craftsmanship of its blade. The pommel and guard are heavily decorated in gold and brass. Some craftsman clearly poured his heart and soul into this blade.',
        'beautiful sword',
        'slash',
        400,
        16,
      ),
      Weapon(
        'Pipe',
        'Pipe',
        'a pipe',
        "This is a simple rusted pipe of unknown origins. It's hefty and could probably be used as an effective bludgeoning tool.",
        'pipe',
        'smash',
        25,
        5,
      ),
      Weapon(
        'W.Staff',
        'W. Staff',
        "a wizard's staff",
        'This staff is made of very old wood and seems to tingle to the touch.  The top has an odd zig-zag shape to it, and the wood is worn smooth from lots of use.  It probably belonged to a wizard at some point and would aid magic use.',
        "wizard's staff",
        'smack',
        350,
        3,
      ),
      new Item(ItemType.Weapon, 'JewelRapier', 'JewelRapier'),
      new Item(ItemType.Weapon, 'Katana', 'Katana'),
      new Item(ItemType.Weapon, 'SPEAR', 'SPEAR'),
    ];
  }
}

export { ItemSeed };
