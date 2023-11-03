import { Theme } from '../themes/defaultThemes';
import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme extends Theme {}
}
