"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {

    /**
     * Inflection rules.
     *
     * @type {Array<object>}
     */
    shevchenko.rules = [{ "description": "чоловіче ім'я федір", "examples": ["федір"], "gender": ["male"], "priority": 10, "applications": ["firstName"], "regexp": { "find": "^федір$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "чоловічі імена дір та вір", "examples": ["дір", "вір"], "gender": ["male"], "priority": 10, "applications": ["firstName"], "regexp": { "find": "^(в|д)ір$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }, { "0": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "append", "value": "ові" } }, { "0": { "type": "append", "value": "у" } }], "vocative": [{ "0": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / м'яка група / на -кріль", "examples": ["кріль"], "gender": ["male"], "priority": 6, "applications": [], "regexp": { "find": "кріль$", "modify": "(.{1})(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "еві" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "еві" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "ю" } }] } }, { "description": "друга відміна / чоловічий рід / м'яка група / на -(голосна)лець", "examples": ["стрілець"], "gender": ["male"], "priority": 6, "applications": [], "regexp": { "find": "(а|о|у|е|и|і)лець$", "modify": "(.{1})(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "ь" }, "2": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "ь" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "ь" }, "2": { "type": "replace", "value": "еві" } }], "accusative": [{ "0": { "type": "replace", "value": "ь" }, "2": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "ь" }, "2": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "ь" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "ь" }, "2": { "type": "replace", "value": "еві" } }], "vocative": [{ "0": { "type": "replace", "value": "ь" }, "2": { "type": "replace", "value": "ю" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -батіг", "examples": ["батіг"], "gender": ["male"], "priority": 6, "applications": [], "regexp": { "find": "батіг$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "replace", "value": "зі" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "replace", "value": "гу" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -кінь", "examples": ["кінь"], "gender": ["male"], "priority": 5, "applications": [], "regexp": { "find": "кінь$", "modify": "(.{1})(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "еві" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "і" } }, { "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "еві" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "ю" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -куліш", "examples": ["поле"], "gender": ["male", "female"], "priority": 5, "applications": [], "regexp": { "find": "куліш$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "ем" } }], "locative": [{ "0": { "type": "append", "value": "еві" } }], "vocative": [{ "0": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / м'яка група / на -.мінь", "examples": ["кремінь"], "gender": ["male"], "priority": 5, "applications": [], "regexp": { "find": ".мінь$", "modify": "(.{1})(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "еві" } }], "accusative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "еві" } }], "vocative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "ю" } }] } }, { "description": "друга відміна / чоловічий рід / м'яка група / на -(голосна)(тверда_приголосна)ець", "examples": ["половець"], "gender": ["male"], "priority": 5, "applications": [], "regexp": { "find": "(а|о|у|е|и|і)(б|в|г|ґ|д|дз|дж|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ець$", "modify": "(.{1})(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "" }, "2": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "" }, "2": { "type": "replace", "value": "еві" } }], "accusative": [{ "0": { "type": "replace", "value": "" }, "2": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "" }, "2": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "" }, "2": { "type": "replace", "value": "еві" } }], "vocative": [{ "0": { "type": "replace", "value": "" }, "2": { "type": "replace", "value": "ю" } }] } }, { "description": "друга відміна / чоловічий рід / м'яка група / на -.міль", "examples": ["хміль"], "gender": ["male"], "priority": 5, "applications": [], "regexp": { "find": ".міль$", "modify": "(.{1})(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "ю" } }], "accusative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "ю" } }], "vocative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / м'яка група / на -(тверда_приголосна)(тверда_приголосна)ець", "examples": ["жнець"], "gender": ["male"], "priority": 5, "applications": [], "regexp": { "find": "(б|в|г|ґ|д|дз|дж|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)(б|в|г|ґ|д|дз|дж|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ець$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "еві" } }], "accusative": [{ "0": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "еві" } }], "vocative": [{ "0": { "type": "replace", "value": "ю" } }] } }, { "description": "друга відміна / чоловічий рід / м'яка група / на -сіль", "examples": ["кисіль"], "gender": ["male"], "priority": 5, "applications": [], "regexp": { "find": "сіль$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "еві" } }], "accusative": [{ "0": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "еві" } }], "vocative": [{ "0": { "type": "replace", "value": "ю" } }] } }, { "description": "друга відміна / чоловічий рід / м'яка група / на -.бідь", "examples": ["лебідь"], "gender": ["male"], "priority": 5, "applications": [], "regexp": { "find": ".бідь$", "modify": "(.{1})(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "еві" } }], "accusative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "еві" } }], "vocative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "ю" } }] } }, { "description": "слово сіль", "examples": ["сіль"], "gender": ["male"], "priority": 4, "applications": ["lastName"], "regexp": { "find": "^сіль$", "modify": "(.{1})(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "і" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "і" } }], "accusative": [], "ablative": [{ "2": { "type": "replace", "value": "лю" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "і" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -тер", "examples": ["вітер"], "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "тер$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "у" } }], "accusative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "чоловіче ім'я ігор", "examples": ["ігор"], "gender": ["male"], "priority": 4, "applications": ["firstName"], "regexp": { "find": "^ігор$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "я" } }], "dative": [{ "0": { "type": "append", "value": "ю" } }, { "0": { "type": "append", "value": "еві" } }], "accusative": [{ "0": { "type": "append", "value": "я" } }], "ablative": [{ "0": { "type": "append", "value": "ем" } }], "locative": [{ "0": { "type": "append", "value": "ю" } }, { "0": { "type": "append", "value": "еві" } }], "vocative": [{ "0": { "type": "append", "value": "ю" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -ишин", "examples": ["ковалишин"], "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "ишин$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "им" } }], "locative": [{ "0": { "type": "append", "value": "у" } }], "vocative": [{ "0": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / м'яка група / на -(голосна)єць", "examples": ["заєць"], "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "(а|о|у|е|и|і)єць$", "modify": "(.{1})(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "й" }, "2": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "й" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "й" }, "2": { "type": "replace", "value": "еві" } }], "accusative": [{ "0": { "type": "replace", "value": "й" }, "2": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "й" }, "2": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "й" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "й" }, "2": { "type": "replace", "value": "еві" } }], "vocative": [{ "0": { "type": "replace", "value": "й" }, "2": { "type": "replace", "value": "ю" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -кіт", "examples": ["кіт"], "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "кіт$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "і" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -віз", "examples": ["узвіз"], "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "віз$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "і" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -.ків", "examples": ["яків"], "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": ".ків$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "і" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -.(к|р)іп", "examples": ["прокіп"], "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": ".(к|р)іп$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "і" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -піп", "examples": ["прокіп"], "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "піп$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "і" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -ніс", "examples": ["кривоніс"], "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "ніс$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "і" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -зір", "examples": ["дивозір"], "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "зір$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "і" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -вір", "examples": ["вір"], "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "вір$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }, { "0": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "append", "value": "і" } }, { "0": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -віл", "examples": ["рябовіл"], "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "віл$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "і" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -ріг", "examples": ["пиріг"], "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "пиріг$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "replace", "value": "зі" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "replace", "value": "гу" } }] } }, { "description": "жіночий рід / на -(ц|с)ька", "examples": ["ільницька", "сумська"], "gender": ["female"], "priority": 4, "applications": ["lastName"], "regexp": { "find": "(с|ц)ька$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "ої" } }], "dative": [{ "0": { "type": "replace", "value": "ій" } }], "accusative": [{ "0": { "type": "replace", "value": "у" } }], "ablative": [{ "0": { "type": "replace", "value": "ою" } }], "locative": [{ "0": { "type": "replace", "value": "ій" } }], "vocative": [] } }, { "description": "перша відміна / чоловічий рід / тверда група / на -світ", "examples": ["світ"], "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "світ$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -(их|аго|ово)", "examples": ["бряних"], "gender": ["male"], "priority": 3, "applications": [], "regexp": { "find": "(их|аго|ово)$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [], "dative": [], "accusative": [], "ablative": [], "locative": [], "vocative": [] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -кіш", "examples": ["розкіш"], "gender": ["male"], "priority": 3, "applications": [], "regexp": { "find": "кіш$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "еві" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "еві" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -ен", "examples": ["семен"], "gender": ["male"], "priority": 3, "applications": [], "regexp": { "find": "ен$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -пес", "examples": ["пес"], "gender": ["male"], "priority": 3, "applications": [], "regexp": { "find": "пес$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "у" } }], "accusative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий, жіночий роди / м'яка група / на -(і|ь)я", "examples": ["юлія"], "gender": ["male", "female"], "priority": 2, "applications": [], "regexp": { "find": "(і|ь)я$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "ї" } }], "dative": [{ "0": { "type": "replace", "value": "ї" } }], "accusative": [{ "0": { "type": "replace", "value": "ю" } }], "ablative": [{ "0": { "type": "replace", "value": "єю" } }], "locative": [{ "0": { "type": "replace", "value": "ї" } }], "vocative": [{ "0": { "type": "replace", "value": "є" } }] } }, { "description": "чоловічий рід / на -ів", "examples": ["ковалів"], "gender": ["male"], "priority": 2, "applications": ["lastName"], "regexp": { "find": "ів$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "им" } }], "locative": [{ "0": { "type": "append", "value": "у" } }], "vocative": [{ "0": { "type": "append", "value": "е" } }] } }, { "description": "жіночі імена / друга відміна / чоловічий рід / м'яка група / на -(тверда_приголосна)я", "examples": ["неля"], "gender": ["female"], "priority": 2, "applications": ["firstName"], "regexp": { "find": "(б|в|г|ґ|д|дз|дж|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)я$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "і" } }], "dative": [{ "0": { "type": "replace", "value": "і" } }], "accusative": [{ "0": { "type": "replace", "value": "ю" } }], "ablative": [{ "0": { "type": "replace", "value": "ею" } }], "locative": [{ "0": { "type": "replace", "value": "і" } }], "vocative": [{ "0": { "type": "replace", "value": "ю" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -яр", "examples": ["скляр"], "gender": ["male"], "priority": 2, "applications": [], "regexp": { "find": "яр$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }, { "0": { "type": "append", "value": "еві" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "ем" } }], "locative": [{ "0": { "type": "append", "value": "еві" } }, { "0": { "type": "append", "value": "у" } }], "vocative": [{ "0": { "type": "append", "value": "е" } }] } }, { "description": "жіночий рід / на -(в|н)а", "examples": ["іванова", "зеленкіна"], "gender": ["female"], "priority": 2, "applications": ["lastName"], "regexp": { "find": "(в|н)а$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "ої" } }], "dative": [{ "0": { "type": "replace", "value": "ій" } }], "accusative": [{ "0": { "type": "replace", "value": "у" } }], "ablative": [{ "0": { "type": "replace", "value": "ою" } }], "locative": [{ "0": { "type": "replace", "value": "ій" } }], "vocative": [] } }, { "description": "друга відміна / чоловічий рід / м'яка група / на -ьо", "examples": ["іваньо"], "gender": ["male"], "priority": 2, "applications": [], "regexp": { "find": "ьо$", "modify": "(.{2})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "ьові" } }], "accusative": [{ "0": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "ьом" } }], "locative": [{ "0": { "type": "replace", "value": "ьові" } }], "vocative": [] } }, { "description": "друга відміна / чоловічий рід / тверда, м'яка група / на -(о|ь|приголосна)", "examples": ["шевченко"], "gender": ["female"], "priority": 2, "applications": [], "regexp": { "find": "(о|ь|(б|в|г|ґ|д|дз|дж|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ))$", "modify": "(.{2})$" }, "cases": { "nominative": [], "genitive": [], "dative": [], "accusative": [], "ablative": [], "locative": [], "vocative": [] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -ок", "examples": ["сашок"], "gender": ["male"], "priority": 2, "applications": [], "regexp": { "find": "ок$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "у" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -е(тверда_прилосона)", "examples": ["марек"], "gender": ["male"], "priority": 2, "applications": [], "regexp": { "find": "е(б|в|г|ґ|д|дз|дж|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "append", "value": "у" } }] } }, { "description": "жіночі по батькові / на -на", "examples": ["юріївна"], "gender": ["female"], "priority": 2, "applications": ["middleName"], "regexp": { "find": "на$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "и" } }], "dative": [{ "0": { "type": "replace", "value": "і" } }], "accusative": [{ "0": { "type": "replace", "value": "у" } }], "ablative": [{ "0": { "type": "replace", "value": "ою" } }], "locative": [{ "0": { "type": "replace", "value": "і" } }], "vocative": [{ "0": { "type": "replace", "value": "о" } }] } }, { "description": "чоловічий рід / на -ов", "examples": ["павлов"], "gender": ["male"], "priority": 2, "applications": ["lastName"], "regexp": { "find": "ов$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "им" } }], "locative": [{ "0": { "type": "append", "value": "у" } }], "vocative": [{ "0": { "type": "append", "value": "е" } }] } }, { "description": "чоловічі по батькові та прізвища / на -ич", "examples": ["валерійович", "риндич"], "gender": ["male"], "priority": 2, "applications": ["middleName", "lastName"], "regexp": { "find": "ич$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "ем" } }], "locative": [{ "0": { "type": "append", "value": "у" } }], "vocative": [{ "0": { "type": "append", "value": "у" } }] } }, { "description": "друга відміна / чоловічий рід / м'яка група / на -(тверда_приголосна)я", "examples": ["гмиря"], "gender": ["male", "female"], "priority": 2, "applications": [], "regexp": { "find": "(б|в|г|ґ|д|дз|дж|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)я$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "і" } }], "dative": [{ "0": { "type": "replace", "value": "і" } }], "accusative": [{ "0": { "type": "replace", "value": "ю" } }], "ablative": [{ "0": { "type": "replace", "value": "ею" } }], "locative": [{ "0": { "type": "replace", "value": "і" } }], "vocative": [{ "0": { "type": "replace", "value": "е" } }] } }, { "description": "жіночі імена / на -ов", "examples": ["любов"], "gender": ["female"], "priority": 2, "applications": ["firstName"], "regexp": { "find": "ов$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "і" } }], "dative": [{ "0": { "type": "append", "value": "і" } }], "accusative": [], "ablative": [{ "0": { "type": "append", "value": "'ю" } }], "locative": [{ "0": { "type": "append", "value": "і" } }], "vocative": [{ "0": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / мішана група / на -(дж|ж|ч|ш)", "examples": ["януш", "джордж"], "gender": ["male"], "priority": 2, "applications": [], "regexp": { "find": "(дж|ж|ч|ш)$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }, { "0": { "type": "append", "value": "еві" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "ем" } }], "locative": [{ "0": { "type": "append", "value": "еві" } }, { "0": { "type": "append", "value": "і" } }, { "0": { "type": "append", "value": "у" } }], "vocative": [{ "0": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -ко", "examples": ["марко"], "gender": ["male"], "priority": 2, "applications": [], "regexp": { "find": "ко$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "у" } }, { "0": { "type": "replace", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "ові" } }, { "0": { "type": "replace", "value": "у" } }], "vocative": [{ "0": { "type": "replace", "value": "у" } }] } }, { "description": "жіночий рід / на -ня", "examples": ["задорожня"], "gender": ["female"], "priority": 2, "applications": ["lastName"], "regexp": { "find": "ня$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "ьої" } }], "dative": [{ "0": { "type": "replace", "value": "ій" } }], "accusative": [{ "0": { "type": "replace", "value": "ю" } }], "ablative": [{ "0": { "type": "replace", "value": "ьою" } }], "locative": [{ "0": { "type": "replace", "value": "ій" } }], "vocative": [] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -к", "examples": ["кузик", "мисяк"], "gender": ["male"], "priority": 2, "applications": [], "regexp": { "find": "к$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }, { "0": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "append", "value": "ові" } }, { "0": { "type": "append", "value": "у" } }], "vocative": [{ "0": { "type": "append", "value": "у" } }] } }, { "description": "перша відміна / чоловічий рід / тверда група / на -ле", "examples": ["поле"], "gender": ["male", "female"], "priority": 2, "applications": [], "regexp": { "find": "ле$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "ю" } }], "accusative": [{ "0": { "type": "replace", "value": "е" } }], "ablative": [{ "0": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "і" } }], "vocative": [] } }, { "description": "перша відміна / чоловічий рід / тверда група / на -ка", "examples": ["чіпка"], "gender": ["male"], "priority": 2, "applications": [], "regexp": { "find": "ка$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "1": { "type": "replace", "value": "и" } }], "dative": [{ "0": { "type": "replace", "value": "ц" }, "1": { "type": "replace", "value": "і" } }], "accusative": [{ "1": { "type": "replace", "value": "у" } }], "ablative": [{ "1": { "type": "replace", "value": "ою" } }], "locative": [{ "0": { "type": "replace", "value": "ц" }, "1": { "type": "replace", "value": "і" } }], "vocative": [{ "1": { "type": "replace", "value": "о" } }] } }, { "description": "перша відміна / чоловічий, жіночий роди / тверда група / на -ха", "examples": ["старуха"], "gender": ["male", "female"], "priority": 2, "applications": [], "regexp": { "find": "ха$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "1": { "type": "replace", "value": "и" } }], "dative": [{ "0": { "type": "replace", "value": "с" }, "1": { "type": "replace", "value": "і" } }], "accusative": [{ "1": { "type": "replace", "value": "у" } }], "ablative": [{ "1": { "type": "replace", "value": "ою" } }], "locative": [{ "0": { "type": "replace", "value": "с" }, "1": { "type": "replace", "value": "і" } }], "vocative": [{ "1": { "type": "replace", "value": "о" } }, { "1": { "type": "replace", "value": "а" } }] } }, { "description": "чоловічий рід / на -ий", "examples": ["сухомлинський"], "gender": ["male"], "priority": 2, "applications": ["lastName"], "regexp": { "find": "ий$", "modify": "(.{2})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "ого" } }], "dative": [{ "0": { "type": "replace", "value": "ому" } }], "accusative": [{ "0": { "type": "replace", "value": "ого" } }], "ablative": [{ "0": { "type": "replace", "value": "им" } }], "locative": [{ "0": { "type": "replace", "value": "ому" } }], "vocative": [] } }, { "description": "перша відміна / чоловічий, жіночий рід / тверда група / на -йо", "examples": ["йойо"], "gender": ["male", "female"], "priority": 2, "applications": [], "regexp": { "find": "йо$", "modify": "(.{2})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "append", "value": "ві" } }], "accusative": [{ "0": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "append", "value": "м" } }], "locative": [{ "0": { "type": "append", "value": "ві" } }], "vocative": [] } }, { "description": "перша відміна / чоловічий, жіночий рід / тверда група / на -(тверда_приголосна)о", "examples": ["петро", "павло"], "gender": ["male", "female"], "priority": 2, "applications": [], "regexp": { "find": "(б|в|г|ґ|д|дз|дж|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)о$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "у" } }], "accusative": [{ "0": { "type": "replace", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "е" } }] } }, { "description": "перша відміна / чоловічий, жіночий роди / мішана група / на -а", "examples": ["мойша"], "gender": ["male", "female"], "priority": 2, "applications": [], "regexp": { "find": "(дж|ж|ч|ш)а$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "і" } }], "dative": [{ "0": { "type": "replace", "value": "і" } }], "accusative": [{ "0": { "type": "replace", "value": "у" } }], "ablative": [{ "0": { "type": "replace", "value": "ею" } }], "locative": [{ "0": { "type": "replace", "value": "і" } }], "vocative": [{ "0": { "type": "replace", "value": "о" } }] } }, { "description": "перша відміна / чоловічий, жіночий рід / м'яка група / на -ь", "examples": ["петрунь"], "gender": ["male", "female"], "priority": 1, "applications": [], "regexp": { "find": "ь$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "ю" } }], "accusative": [{ "0": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "еві" } }], "vocative": [{ "0": { "type": "replace", "value": "ю" } }] } }, { "description": "перша відміна / жіночий рід / тверда група / на -(г|ґ)а", "examples": ["ольга"], "gender": ["female"], "priority": 1, "applications": [], "regexp": { "find": "(г|ґ)а$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "1": { "type": "replace", "value": "и" } }], "dative": [{ "0": { "type": "replace", "value": "з" }, "1": { "type": "replace", "value": "і" } }], "accusative": [{ "1": { "type": "replace", "value": "у" } }], "ablative": [{ "1": { "type": "replace", "value": "ою" } }], "locative": [{ "0": { "type": "replace", "value": "з" }, "1": { "type": "replace", "value": "і" } }], "vocative": [{ "1": { "type": "replace", "value": "о" } }] } }, { "description": "друга відміна / чоловічий, жіночий роди / на -е", "examples": ["прізвище"], "gender": ["male", "female"], "priority": 1, "applications": [], "regexp": { "find": "е$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "у" } }], "accusative": [], "ablative": [{ "0": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "і" } }], "vocative": [] } }, { "description": "друга відміна / чоловічий рід / м'яка група / на -й", "examples": ["валерій"], "gender": ["male"], "priority": 1, "applications": [], "regexp": { "find": "й$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "єві" } }], "accusative": [{ "0": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "єм" } }], "locative": [{ "0": { "type": "replace", "value": "єві" } }, { "0": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "ї" } }], "vocative": [{ "0": { "type": "replace", "value": "ю" } }] } }, { "description": "перша відміна / чоловічий, жіночий роди / тверда група / на -а", "examples": ["анна"], "gender": ["male", "female"], "priority": 1, "applications": [], "regexp": { "find": "а$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "и" } }], "dative": [{ "0": { "type": "replace", "value": "і" } }], "accusative": [{ "0": { "type": "replace", "value": "у" } }], "ablative": [{ "0": { "type": "replace", "value": "ою" } }], "locative": [{ "0": { "type": "replace", "value": "і" } }], "vocative": [{ "0": { "type": "replace", "value": "о" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -(тверда_приголосна)", "examples": ["олександр"], "gender": ["male"], "priority": 1, "applications": [], "regexp": { "find": "(б|в|г|ґ|д|дз|дж|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }, { "0": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "append", "value": "ові" } }, { "0": { "type": "append", "value": "у" } }], "vocative": [{ "0": { "type": "append", "value": "е" } }] } }];

    /**
     * Male gender.
     *
     * @type {string}
     */
    shevchenko.genderMale = "male";

    /**
     * Female gender.
     *
     * @type {string}
     */
    shevchenko.genderFemale = "female";

    /**
     * Nominative case.
     *
     * @type {string}
     */
    shevchenko.caseNameNominative = "nominative";

    /**
     * Genitive case.
     *
     * @type {string}
     */
    shevchenko.caseNameGenitive = "genitive";

    /**
     * Dative case.
     *
     * @type {string}
     */
    shevchenko.caseNameDative = "dative";

    /**
     * Accusative case.
     *
     * @type {string}
     */
    shevchenko.caseNameAccusative = "accusative";

    /**
     * Ablative case.
     *
     * @type {string}
     */
    shevchenko.caseNameAblative = "ablative";

    /**
     * Locative case.
     *
     * @type {string}
     */
    shevchenko.caseNameLocative = "locative";

    /**
     * Vocative case.
     *
     * @type {string}
     */
    shevchenko.caseNameVocative = "vocative";

    /**
     * Get available rules.
     *
     * @returns {Array<object>}
     */
    shevchenko.getRules = function () {
        return shevchenko.rules.slice(0);
    };

    /**
     * Get available genders.
     *
     * @returns {Array<string>}
     */
    shevchenko.getGenders = function () {
        return [shevchenko.genderMale, shevchenko.genderFemale];
    };

    /**
     * Get available case names.
     *
     * @returns {Array<string>}
     */
    shevchenko.getCaseNames = function () {
        return [shevchenko.caseNameNominative, shevchenko.caseNameGenitive, shevchenko.caseNameDative, shevchenko.caseNameAccusative, shevchenko.caseNameAblative, shevchenko.caseNameLocative, shevchenko.caseNameVocative];
    };

    /**
     * Inflect the person first, last and middle names in nominative case.
     *
     * @param {Object} person
     * @returns {Object}
     */
    shevchenko.inNominative = function (person) {
        return shevchenko(person, shevchenko.caseNameNominative);
    };

    /**
     * Inflect the person first, last and middle names in genitive case.
     *
     * @param {Object} person
     * @returns {Object}
     */
    shevchenko.inGenitive = function (person) {
        return shevchenko(person, shevchenko.caseNameGenitive);
    };

    /**
     * Inflect the person first, last and middle names in dative case.
     *
     * @param {Object} person
     * @returns {Object}
     */
    shevchenko.inDative = function (person) {
        return shevchenko(person, shevchenko.caseNameDative);
    };

    /**
     * Inflect the person first, last and middle names in accusative case.
     *
     * @param {Object} person
     * @returns {Object}
     */
    shevchenko.inAccusative = function (person) {
        return shevchenko(person, shevchenko.caseNameAccusative);
    };

    /**
     * Inflect the person first, last and middle names in ablative case.
     *
     * @param {Object} person
     * @returns {Object}
     */
    shevchenko.inAblative = function (person) {
        return shevchenko(person, shevchenko.caseNameAblative);
    };

    /**
     * Inflect the person first, last and middle names in locative case.
     *
     * @param {Object} person
     * @returns {Object}
     */
    shevchenko.inLocative = function (person) {
        return shevchenko(person, shevchenko.caseNameLocative);
    };

    /**
     * Inflect the person first, last and middle names in vocative case.
     *
     * @param {Object} person
     * @returns {Object}
     */
    shevchenko.inVocative = function (person) {
        return shevchenko(person, shevchenko.caseNameVocative);
    };

    /**
     * Inflect the person first, last and middle names.
     *
     * @example var result = shevchenko({
     *     gender: "male",  // or "female"
     *     lastName: "Шевченко",
     *     firstName: "Тарас",
     *     middleName: "Григорович"
     * }, shevchenko.caseNameVocative);
     *
     * @param {Object} person
     * @param {string} caseName
     * @returns {Object}
     */
    function shevchenko(person, caseName) {
        validator.validatePersonParameter(person);
        validator.validateCaseNameParameter(caseName);

        var result = {};

        if (typeof person.lastName === "string") {
            var inflectedName = personInflector.inflectLastName(person.gender, person.lastName.toLowerCase(), caseName);
            result.lastName = stringCaseMask.applyByExample(person.lastName, inflectedName || person.lastName);
        }

        if (typeof person.firstName === "string") {
            var _inflectedName = personInflector.inflectFirstName(person.gender, person.firstName.toLowerCase(), caseName);
            result.firstName = stringCaseMask.applyByExample(person.firstName, _inflectedName || person.firstName);
        }

        if (typeof person.middleName === "string") {
            var _inflectedName2 = personInflector.inflectMiddleName(person.gender, person.middleName.toLowerCase(), caseName);
            result.middleName = stringCaseMask.applyByExample(person.middleName, _inflectedName2 || person.middleName);
        }

        return result;
    }

    var personInflector = {};

    personInflector.inflectLastName = function (gender, lastName, caseName) {
        var doubleLastName = lastName.split("-");
        if (doubleLastName.length > 1) {
            return doubleLastName.map(function (lastName) {
                return personInflector.inflectLastName(gender, lastName, caseName);
            }).join("-");
        }

        var rule = shevchenko.getRules().filter(function (rule) {
            return filter.rulesByGender(rule, gender);
        }).filter(function (rule) {
            return filter.rulesByApplication(rule, "lastName");
        }).filter(function (rule) {
            return filter.rulesByRegexp(rule, lastName);
        }).sort(function (firstRule, secondRule) {
            return sort.rulesByApplicationDesc(firstRule, secondRule, "lastName");
        }).shift();

        return inflector.inflectByRule(rule, caseName, lastName);
    };

    personInflector.inflectFirstName = function (gender, firstName, caseName) {
        var rule = shevchenko.getRules().filter(function (rule) {
            return filter.rulesByGender(rule, gender);
        }).filter(function (rule) {
            return filter.rulesByApplication(rule, "firstName");
        }).filter(function (rule) {
            return filter.rulesByRegexp(rule, firstName);
        }).sort(function (firstRule, secondRule) {
            return sort.rulesByApplicationDesc(firstRule, secondRule, "firstName");
        }).shift();

        return inflector.inflectByRule(rule, caseName, firstName);
    };

    personInflector.inflectMiddleName = function (gender, middleName, caseName) {
        var rule = shevchenko.getRules().filter(function (rule) {
            return filter.rulesByGender(rule, gender);
        }).filter(function (rule) {
            return filter.rulesByApplication(rule, "middleName", true);
        }).filter(function (rule) {
            return filter.rulesByRegexp(rule, middleName);
        }).sort(function (firstRule, secondRule) {
            return sort.rulesByApplicationDesc(firstRule, secondRule, "middleName");
        }).shift();

        return inflector.inflectByRule(rule, caseName, middleName);
    };

    var inflector = {};

    /**
     * Inflect a value by inflection rule.
     *
     * @param {Object} rule
     * @param {string} caseName
     * @param {string} value
     * @returns {string}
     */
    inflector.inflectByRule = function (rule, caseName, value) {
        if (typeof rule === "undefined") return value;
        var regexp = rule.regexp.modify;
        var modifiers = rule.cases[caseName][0]; // Retrieve the first group modifiers object by case name.
        return value.replace(new RegExp(regexp, "gm"), function (match) {
            var replacement = "";
            var count = inflector.countRegexpGroups(regexp);
            var index = 0;
            while (index < count) {
                var modifier = typeof modifiers === "undefined" ? modifiers : modifiers[index];
                replacement += inflector.applyGroupModifier(modifier, arguments.length <= index + 1 ? undefined : arguments[index + 1]);
                index++;
            }
            return replacement;
        });
    };

    /**
     * Apply a group modifier to the value.
     *
     * @see inflector.inflectByRule
     *
     * @param {Object} modifier
     * @param {string} value
     * @returns {string}
     */
    inflector.applyGroupModifier = function (modifier, value) {
        if (typeof modifier === "undefined") return value;
        switch (modifier.type) {
            case "append":
                return value + modifier.value;
            case "replace":
                return modifier.value;
            default:
                return value;
        }
    };

    /**
     * Count a number of groups in regular expression string.
     *
     * @param {string} regexp
     * @returns {number}
     */
    inflector.countRegexpGroups = function (regexp) {
        return new RegExp(regexp.toString() + "|").exec("").length - 1;
    };

    var assert = {};

    /**
     * Assert than a value is an object.
     *
     * @param value
     * @param {string} error
     */
    assert.object = function (value, error) {
        if ((typeof value === "undefined" ? "undefined" : _typeof(value)) !== "object") assert.throw(error);
    };

    /**
     * Assert than a value is a string.
     *
     * @param value
     * @param {string} error
     */
    assert.string = function (value, error) {
        if (typeof value !== "string") assert.throw(error);
    };

    /**
     * Assert than a value exists in array.
     *
     * @param {Array} array
     * @param value
     * @param {string} error
     */
    assert.inArray = function (array, value, error) {
        if (array.indexOf(value) === -1) assert.throw(error);
    };

    /**
     * Throw an assertion error.
     *
     * @param {string} error
     */
    assert.throw = function (error) {
        throw new Error(error);
    };

    var validator = {};

    validator.validatePersonParameter = function (person) {
        assert.object(person, "Invalid person parameter type.");
        if (!person.hasOwnProperty("gender")) assert.throw("No gender property found in the person parameter.");
        assert.string(person.gender, "Invalid gender property type provided in the person parameter.");
        assert.inArray(shevchenko.getGenders(), person.gender, "Invalid gender property value provided in the person parameter.");
        if (!person.hasOwnProperty("firstName") && !person.hasOwnProperty("middleName") && !person.hasOwnProperty("lastName")) {
            assert.throw("No name properties found in the person parameter.");
        }
        if (person.hasOwnProperty("lastName")) assert.string(person.lastName, "Invalid person lastName parameter type.");
        if (person.hasOwnProperty("firstName")) assert.string(person.firstName, "Invalid person firstName parameter type.");
        if (person.hasOwnProperty("middleName")) assert.string(person.middleName, "Invalid person middleName parameter type.");
    };

    validator.validateCaseNameParameter = function (caseName) {
        assert.string(caseName, "Invalid caseName parameter type.");
        assert.inArray(shevchenko.getCaseNames(), caseName, "Invalid caseName parameter value.");
    };

    var sort = {};

    sort.rulesByApplicationDesc = function (firstRule, secondRule, application) {
        return !firstRule.applications.length && secondRule.applications.length && secondRule.applications.indexOf(application) !== -1;
    };

    var filter = {};

    filter.rulesByApplication = function (rule, application, strict) {
        if (rule.applications.length) {
            return rule.applications.some(function (ruleApplication) {
                return ruleApplication === application;
            });
        }
        return !strict;
    };

    filter.rulesByGender = function (rule, gender) {
        return rule.gender.indexOf(gender) !== -1;
    };

    filter.rulesByRegexp = function (rule, value) {
        return new RegExp(rule.regexp.find, "gm").test(value);
    };

    var stringCaseMask = {};

    /**
     * Load the case mask from the string.
     *
     * @param {string} string
     * @returns {Array}
     */
    stringCaseMask.loadMask = function (string) {
        assert.string(string);
        var mask = [];
        var index = 0;
        while (index < string.length) {
            var char = string.charAt(index);
            if (char === char.toUpperCase()) mask.push("u");else if (char === char.toLowerCase()) mask.push("l");else mask.push(null);
            index++;
        }
        return mask;
    };

    /**
     * Apply the case mask to the string.
     *
     * @param {Array} mask
     * @param {string} string
     * @returns {string}
     */
    stringCaseMask.applyByMask = function (mask, string) {
        var result = "";
        var index = 0;
        while (index < string.length) {
            var char = string.charAt(index);
            var charMask = mask[index];
            if (typeof charMask === "undefined") charMask = mask[mask.length - 1];
            if (charMask === "u") char = char.toUpperCase();else if (charMask === "l") char = char.toLowerCase();
            result += char;
            index++;
        }
        return result;
    };

    /**
     * Apply the case mask of the example string to the string.
     *
     * @param {string} exampleString
     * @param {string} string
     * @returns {string}
     */
    stringCaseMask.applyByExample = function (exampleString, string) {
        var mask = stringCaseMask.loadMask(exampleString);
        var result = "";
        var index = 0;
        while (index < string.length) {
            var char = string.charAt(index);
            var charMask = mask[index];
            if (typeof charMask === "undefined") charMask = mask[mask.length - 1];
            if (charMask === "u") char = char.toUpperCase();else if (charMask === "l") char = char.toLowerCase();
            result += char;
            index++;
        }
        return result;
    };

    if (typeof module !== "undefined" && module.hasOwnProperty("exports")) {
        // Export for Node.js environment.
        module.exports = shevchenko;
    } else if (typeof window !== "undefined") {
        // Export for a browser environment.
        window.shevchenko = shevchenko;
    } else {
        throw new Error("Unknown environment.");
    }
})();