import { OptionsObjectType } from "../components/shared/OptionsList";

export const optionsFromSimpleList = (data: (string | number)[]): OptionsObjectType[] => {
    const _options: OptionsObjectType[] = data.map(item => ({ name: item, value: item }));
    return _options;
}

export const optionsFromObject = (data: any): OptionsObjectType[] => {
    const _options: OptionsObjectType[] = Object.keys(data).map(item => ({ name: item, value: data[item] }));
    return _options;
}
