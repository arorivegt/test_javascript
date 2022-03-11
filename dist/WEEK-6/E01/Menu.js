"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const Input_1 = require("./Input");
const MenuElement_1 = require("./MenuElement");
const uuid_1 = require("uuid");
class Menu {
    constructor() {
        this.mainMenu = [];
        this.soupMenu = [];
        this.chefSpecialsMenu = [];
        this.chickenMenu = [];
        this.beefMenu = [];
        this.beveragesMenu = [];
        this.soupOptions = [];
        this.chefSpecialsOptions = [];
        this.chickenOptions = [];
        this.beefOptions = [];
        this.beveragesOptions = [];
        this.fillMainMenu();
        this.fillOptions();
        this.fillSubMenus();
    }
    fillMainMenu() {
        this.mainMenu.push({ option: 1, message: "Soup" });
        this.mainMenu.push({ option: 2, message: "Chef's SpecialsChef's Specials" });
        this.mainMenu.push({ option: 3, message: "Chicken" });
        this.mainMenu.push({ option: 4, message: "Beef" });
        this.mainMenu.push({ option: 5, message: "Beverages" });
        this.mainMenu.push({ option: 0, message: "Exit" });
    }
    fillOptions() {
        //********Soup Menu********
        let menu1 = new MenuElement_1.MenuElement((0, uuid_1.v4)(), "Wonton Soup (Chicken)", 2.25, "🍗");
        let menu2 = new MenuElement_1.MenuElement((0, uuid_1.v4)(), "Chicken Corn Soup", 1.95, "🍲");
        let menu3 = new MenuElement_1.MenuElement((0, uuid_1.v4)(), "Vegetable Corn Soup.", 1.95, "🥗");
        this.soupOptions.push(menu1, menu2, menu3);
        //********Chef's Specials Menu********
        menu1 = new MenuElement_1.MenuElement((0, uuid_1.v4)(), "Orange Beef.", 8.95, "🟠");
        menu2 = new MenuElement_1.MenuElement((0, uuid_1.v4)(), "Kung Pao Shrimp", 8.50, "🦐");
        this.chefSpecialsOptions.push(menu1, menu2);
        //********Chicken Menu********
        menu1 = new MenuElement_1.MenuElement((0, uuid_1.v4)(), "Lemon Chicken", 9.95, "🍋🍗");
        menu2 = new MenuElement_1.MenuElement((0, uuid_1.v4)(), "Sesame Chicken.", 9.95, "🥯");
        menu3 = new MenuElement_1.MenuElement((0, uuid_1.v4)(), "Hunan Chicken", 10.50, "🏴󠁣󠁮󠀴󠀳󠁿");
        this.chickenOptions.push(menu1, menu2, menu3);
        //********Beef Menu********
        menu1 = new MenuElement_1.MenuElement((0, uuid_1.v4)(), "Pepper Steak.", 9.95, "🌶️");
        menu2 = new MenuElement_1.MenuElement((0, uuid_1.v4)(), "Manchurian Beef.", 11.95, "🥟");
        this.beefOptions.push(menu1, menu2);
        //********Beverages Menu********
        menu1 = new MenuElement_1.MenuElement((0, uuid_1.v4)(), "Pepper Steak.", 3.00, "🍍");
        menu2 = new MenuElement_1.MenuElement((0, uuid_1.v4)(), "Spanish Coffee", 5.50, "☕");
        this.beveragesOptions.push(menu1, menu2);
    }
    fillSubMenus() {
        for (const opt of this.soupOptions) {
            this.soupMenu.push({ name: opt.id, message: opt.printOption() });
        }
        for (const opt of this.chefSpecialsOptions) {
            this.chefSpecialsMenu.push({ name: opt.id, message: opt.printOption() });
        }
        for (const opt of this.chickenOptions) {
            this.chickenMenu.push({ name: opt.id, message: opt.printOption() });
        }
        for (const opt of this.beefOptions) {
            this.beefMenu.push({ name: opt.id, message: opt.printOption() });
        }
        for (const opt of this.beveragesOptions) {
            this.beveragesMenu.push({ name: opt.id, message: opt.printOption() });
        }
    }
    showMainMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            let opt;
            console.clear();
            do {
                opt = (yield Input_1.Input.getSelect('Select a Menu', this.mainMenu)).data;
                switch (opt) {
                    case 1:
                        yield this.showSubMenu("Select a Soup option", this.soupMenu, this.soupOptions);
                        break;
                    case 2:
                        yield this.showSubMenu("Select a Chef's Specials option", this.chefSpecialsMenu, this.chefSpecialsOptions);
                        break;
                    case 3:
                        yield this.showSubMenu("Select a Chicken option", this.chickenMenu, this.chickenOptions);
                        break;
                    case 4:
                        yield this.showSubMenu("Select a Beef option", this.beefMenu, this.beefOptions);
                        break;
                    case 5:
                        yield this.showSubMenu("Select a Beverages option", this.beveragesMenu, this.beveragesOptions);
                        break;
                }
            } while (opt != 0);
        });
    }
    showSubMenu(message, subMenu, subMenuOption) {
        return __awaiter(this, void 0, void 0, function* () {
            let input = yield Input_1.Input.getSelectById(message, subMenu);
            for (const e of subMenuOption) {
                if (e.id === input.data) {
                    console.log(`============================================\n   Here is your ${e.emoji} at a $${e.price}\n============================================\n`);
                }
            }
        });
    }
}
exports.Menu = Menu;
