import { OptionsObjectType } from "../components/shared/OptionsList";

export const optionsFromSimpleList = (data: (string | number)[]): OptionsObjectType[] => {
    const _options: OptionsObjectType[] = data.map(item => ({ label: item, value: item }));
    return _options;
}

export const optionsFromObject = (data: any): OptionsObjectType[] => {
    const _options: OptionsObjectType[] = Object.keys(data).map(item => ({ value: item, label: data[item] }));
    return _options;
}
