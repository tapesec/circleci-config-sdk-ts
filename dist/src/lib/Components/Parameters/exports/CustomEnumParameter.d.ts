import { GenerableType } from '../../../Config/exports/Mapping';
import { CustomEnumParameterContentsShape } from '../types';
import { EnumParameterLiteral } from '../types/CustomParameterLiterals.types';
import { CustomParameter } from './CustomParameter';
/**
 * An enum parameter can be passed to a component.
 * @param name - The name of the parameter.
 * @param enumValues - The values of the enum.
 * @param defaultValue - The optional default value of the parameter.
 * Optional, but will be marked as required if not provided.
 * @param description - An optional description of the parameter.
 *
 */
export declare class CustomEnumParameter extends CustomParameter<EnumParameterLiteral> {
    enumValues: string[];
    constructor(name: string, enumValues: string[], defaultValue?: unknown, description?: string);
    generateContents(): CustomEnumParameterContentsShape;
    get generableType(): GenerableType;
}
//# sourceMappingURL=CustomEnumParameter.d.ts.map