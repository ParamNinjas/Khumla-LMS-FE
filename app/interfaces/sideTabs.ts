export default interface SideTab {
    name: string;
    url?: string;
    icon?: string;
    children?: SideTab[]
}
