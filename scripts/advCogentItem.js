export default class advCogentItem extends Item {
    prepareData() {
        super.prepareData();

        let itemData=this.data;
        let data = itemData.data;

        let haftedDiceBonus = 1;
        let bluntDiceBonus = -1;
        let bluntArmorBonus = 3;
        let bladeArmorBonus = 1;
        let spearDiceBonus = 1;
        let spearArmorBonus = 1;

        switch(data.size) {
            case "small":
                data.diceBonus = 0;
                data.armorBonus = 0;
                break;
            case "medium":
                data.diceBonus = 1;
                data.armorBonus = 1;
                break;
            case "large":
                data.diceBonus = 2;
                data.armorBonus = 2;
                break;
            case "reach":
                data.diceBonus = 3;
                data.armorBonus = 3;
                break;
            default:
                data.diceBonus = 0;
                data.armorBonus = 0;
        }
        if(data.rangedType=="flexed") {
            if(data.size=="small") {
                data.bonus=1;
                data.malus=1;
            }
            else if(data.size=="large") {
                data.bonus=2;
                data.malus=2;
            }
        }
        if(data.rangedType=="ballistic") {
            if(data.size=="hand") {
                data.bonus=2;
                data.malus=3;
            }
            if(data.size=="stocked") {
                data.bonus=4;
                data.malus=4;
            }
            if(data.size=="heavy") {
                data.bonus=6;
                data.malus=100;
            }
        }
    }   
}