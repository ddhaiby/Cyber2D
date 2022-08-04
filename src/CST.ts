export const CST = {
    SCENES: {
        PRELOAD_ASSETS: "PRELOAD_ASSETS",
        GAME: "GAME",
        GAME_UI: "GAME_UI",
        GAMEMENU_UI: "GAMEMENU_UI",
        MAINMENU_UI: "MAINMENU_UI",
    },

    PHYSIC: {
        GRAVITY: 530,
        PAWN_MAX_SPEED: 1000
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
            TITLE: "",
            DESCRIPTION: "",
            MUSIC: "super-duper"
        },
        {
            TITLE: "Cyber reach the moon",
            DESCRIPTION: "",
            MUSIC: "breaking-point"
        },
        {
            TITLE: "Woop woop",
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
                PRESSED: "#FFFFFFAA",
                DISABLED: "#000000"
            }
        }
    }
}