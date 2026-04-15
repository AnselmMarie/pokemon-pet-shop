import { SwitchStatus } from './switch.type';
interface UseSwitchLogicReturn {
    getCircleThemeStyle: string;
    onInitLeftClick: () => void;
    onInitRightClick: () => void;
}
declare const useSwitchLogic: (defaultValue: SwitchStatus, val: SwitchStatus | null, onLeftClick: () => void, onRightClick: () => void) => UseSwitchLogicReturn;
export default useSwitchLogic;
//# sourceMappingURL=use.switch.logic.d.ts.map