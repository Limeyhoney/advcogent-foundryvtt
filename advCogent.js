import {advCogent} from "./config.js";
import advCogentItemSheet from "./sheets/advCogentItemSheet.js";
import advCogentItem from "./scripts/advCogentItem.js"

async function preloadHandlebarsTemplates() {
    const templatePaths = [
        "modules/advCogent/templates/sheets/weapon-list.hbs",
        "modules/advCogent/templates/sheets/melee-entry.hbs",
        "modules/advCogent/templates/sheets/ranged-entry.hbs",
        "modules/advCogent/templates/sheets/melee-options.hbs",
        "modules/advCogent/templates/sheets/ranged-options.hbs",
    ];
    return loadTemplates(templatePaths);
}

Hooks.once("init", function () {
    console.log("Adv Cogent | Initialising Cogent Advanced Combat");
    
    CONFIG.advCogent = advCogent;
    CONFIG.Item.entityClass = advCogentItem;
    Items.registerSheet("advCogent", advCogentItemSheet, {makeDefault:true});
    Handlebars.registerPartial("weapon-list", '{{> "modules/advCogent/templates/sheets/weapon-list.hbs"}}')
    Handlebars.registerHelper('or', function(a,b) {
        return a||b;
    })
    preloadHandlebarsTemplates();
})