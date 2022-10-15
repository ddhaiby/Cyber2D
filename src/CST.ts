export const CST = {
    SCENES: {
        PRELOAD_ASSETS: "PRELOAD_ASSETS",
        GAME: "GAME",
        GAME_UI: "GAME_UI",
        GAMEMENU_UI: "GAMEMENU_UI",
        MAINMENU_UI: "MAINMENU_UI",
    },

    GAME: {
        WIDTH: 1300,
        HEIGHT: 650,
        ZOOM: 1.35
    },

    PHYSIC: {
        GRAVITY: 530,
        PAWN_MAX_SPEED: 950
    },

    MAIN_MENU: {
        MUSIC: "breaking-point"
    },

    LEVELS: [
        {
            TITLE: "Welcome to the Cyber World",
            DESCRIPTION: "",
            MUSIC: "8-bit-samba"
        },
        {
            TITLE: "The Cyber Odyssey continues",
            DESCRIPTION: "",
            MUSIC: "super-duper"
        },
        {
            TITLE: "Hunt them down",
            DESCRIPTION: "",
            MUSIC: "breaking-point"
        },
        {
            TITLE: "Woop woop",
            DESCRIPTION: "",
            MUSIC: "breaking-point"
        },
        {
            TITLE: "Crazy world, cyber world",
            DESCRIPTION: "",
            MUSIC: "breaking-point"
        },
        {
            TITLE: "Never say no to progress",
            DESCRIPTION: "",
            MUSIC: "breaking-point"
        },
        {
            TITLE: "May Cyber reach the sky",
            DESCRIPTION: "",
            MUSIC: "breaking-point"
        }
    ],

    PAWN: {
        ATTRIBUTES: {
            HEALTH: "health",
            MAX_HEALTH: "maxHealth",
            WALK_SPEED: "walkSpeed",
            FLY_SPEED: "flySpeed",
            CLIMB_SPEED: "climbSpeed",
            BODY_DAMAGE: "bodyDamage"
        }
    },

    STYLE: {
        COLOR: {
            ORANGE: "#FFBC32",
            BLACK: "#000000",
            WHITE: "#FFFFFF",
            CYBER_BACKGROUND: "0x171822",
            TEXT: {
                NORMAL: "#171822",
                HOVERED: "#FFFFFF",
                PRESSED: "#B2B2B2",
                DISABLED: "#555555"
            },
            ICON: {
                NORMAL: "#FFBC32",
                HOVERED: "#FFFFFF",
                PRESSED: "#B2B2B2",
                DISABLED: "#555555"
            }
        }
    }
}