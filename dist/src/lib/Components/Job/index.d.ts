import { GenerableType } from '../../Config/exports/Mapping';
import { Command } from '../Commands/exports/Command';
import { Executable } from '../Executors/types/ExecutorParameters.types';
import { Generable } from '../index';
import { EnvironmentParameter, IntegerParameter, StringParameter } from '../Parameters/types';
import { AnyExecutor, JobContentsShape, JobOptionalProperties, JobsShape } from './types/Job.types';
/**
 * Jobs define a collection of steps to be run within a given executor, and are orchestrated using Workflows.
 */
export declare class Job implements Generable, Executable {
    /**
     * The name of the current Job.
     */
    name: StringParameter;
    /**
     * The reusable executor to use for this job. The Executor must have already been instantiated and added to the config.
     */
    executor: AnyExecutor;
    /**
     * A list of Commands to execute within the job in the order which they were added.
     */
    steps: Command[];
    /**
     * Number of parallel instances of this job to run (defaults to 1 if undefined)
     */
    parallelism: IntegerParameter | undefined;
    environment?: EnvironmentParameter;
    shell?: StringParameter;
    working_directory?: StringParameter;
    /**
     * Instantiate a CircleCI Job
     * @param name - Name your job with a unique identifier
     * @param executor - The reusable executor to use for this job. The Executor must have already been instantiated and added to the config.
     * @param steps - A list of Commands to execute within the job in the order which they were added.
     * @param properties - Additional optional properties to further configure the job.
     * @see {@link https://circleci.com/docs/2.0/configuration-reference/?section=configuration#jobs}
     */
    constructor(name: string, executor: AnyExecutor, steps?: Command[], properties?: JobOptionalProperties);
    /**
     * Generates the contents of the Job.
     * @returns The generated JSON for the Job's contents.
     */
    generateContents(flatten?: boolean): JobContentsShape;
    /**
     * Generate Job schema
     * @returns The generated JSON for the Job.
     */
    generate(flatten?: boolean): JobsShape;
    /**
     * Add steps to the current Job. Chainable.
     * @param command - Command to use for step
     */
    addStep(command: Command): this;
    /**
     * Add an environment variable to the job.
     * This will be set in plain-text via the exported config file.
     * Consider using project-level environment variables or a context for sensitive information.
     * @see {@link https://circleci.com/docs/env-vars}
     * @example
     * ```
     * myJob.addEnvVar('MY_VAR', 'my value');
     * ```
     */
    addEnvVar(name: string, value: string): this;
    get generableType(): GenerableType;
}
//# sourceMappingURL=index.d.ts.map