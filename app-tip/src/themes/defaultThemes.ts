export interface Theme {
    colors: {
        cyan: {
            strong: string;
            dark: string;
            darkGrayish: string;
            grayish: string;
            lightGrayih: string;
            extraLightGrayish: string;
        };
        White: string;
    };
    font: {
        primary: string;
    }
    background: string;
    inputBackground: string;
}

export const defaultTheme: Theme  = {
    colors: {
      cyan: {
        strong: "hsl(172, 67%, 45%)",
        dark: "hsl(183, 100%, 15%)",
        darkGrayish: "hsl(186, 14%, 43%)",
        grayish: "hsl(184, 14%, 56%)",
        lightGrayih: "hsl(185, 41%, 84%)",
        extraLightGrayish: "hsl(189, 41%, 97%)",
      },
      White: "hsl(0, 0%, 100%)",
    },
    font: {
        primary: 'space mono'
    },
    background: "hsl(185, 41%, 84%)" ,
    inputBackground: '#F3F9FA',
  };