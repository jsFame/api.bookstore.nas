
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class AuthInput {
    wallet: string;
}

export class CreateBoardInput {
    name: string;
    isActive?: Nullable<boolean>;
    walletId?: Nullable<number>;
}

export class UpdateBoardInput {
    name: string;
    isActive?: Nullable<boolean>;
}

export class OrderByParams {
    field?: Nullable<string>;
    direction?: Nullable<string>;
}

export class CreateColumnInput {
    name: string;
    boardId: number;
}

export class UpdateColumnInput {
    id: number;
    name: string;
}

export class CreateSubTaskInput {
    title: string;
    taskId: number;
    isCompleted?: Nullable<boolean>;
}

export class UpdateSubTaskInput {
    id: number;
    title?: Nullable<string>;
    taskId?: Nullable<number>;
    isCompleted?: Nullable<boolean>;
}

export class CreateTaskInput {
    title: string;
    columnId: number;
    description?: Nullable<string>;
}

export class UpdateTaskInput {
    id: number;
    title?: Nullable<string>;
    columnId?: Nullable<number>;
    description?: Nullable<string>;
}

export class AuthPayload {
    access_token: string;
}

export abstract class IMutation {
    abstract signIn(data: AuthInput): Nullable<AuthPayload> | Promise<Nullable<AuthPayload>>;

    abstract createBoard(data: CreateBoardInput): Board | Promise<Board>;

    abstract updateBoard(id: number, data: UpdateBoardInput): Board | Promise<Board>;

    abstract deleteBoard(id: number): Board | Promise<Board>;

    abstract createColumn(createColumnInput: CreateColumnInput): Column | Promise<Column>;

    abstract updateColumn(updateColumnInput: UpdateColumnInput): Column | Promise<Column>;

    abstract removeColumn(id: number): Nullable<Column> | Promise<Nullable<Column>>;

    abstract createSubTask(createSubTaskInput: CreateSubTaskInput): SubTask | Promise<SubTask>;

    abstract updateSubTask(updateSubTaskInput: UpdateSubTaskInput): SubTask | Promise<SubTask>;

    abstract removeSubTask(id: number): Nullable<SubTask> | Promise<Nullable<SubTask>>;

    abstract createTask(createTaskInput: CreateTaskInput): Task | Promise<Task>;

    abstract updateTask(updateTaskInput: UpdateTaskInput): Task | Promise<Task>;

    abstract removeTask(id: number): Nullable<Task> | Promise<Nullable<Task>>;
}

export class Board {
    id: number;
    name: string;
    isActive?: Nullable<boolean>;
    walletId: number;
    createdAt: DateTime;
    updatedAt?: Nullable<DateTime>;
    columns?: Nullable<Nullable<Column>[]>;
}

export abstract class IQuery {
    abstract boards(orderBy?: Nullable<OrderByParams>): Board[] | Promise<Board[]>;

    abstract board(id: number): Board | Promise<Board>;

    abstract columns(): Nullable<Column>[] | Promise<Nullable<Column>[]>;

    abstract column(id: number): Nullable<Column> | Promise<Nullable<Column>>;

    abstract subtasks(): Nullable<SubTask>[] | Promise<Nullable<SubTask>[]>;

    abstract subtask(id: number): Nullable<SubTask> | Promise<Nullable<SubTask>>;

    abstract tasks(): Nullable<Task>[] | Promise<Nullable<Task>[]>;

    abstract task(id: number): Nullable<Task> | Promise<Nullable<Task>>;
}

export class Column {
    id: number;
    name: string;
    boardId: number;
    createdAt: DateTime;
    updatedAt?: Nullable<DateTime>;
    tasks?: Nullable<Nullable<Task>[]>;
}

export class SubTask {
    id: number;
    title: string;
    taskId: number;
    isCompleted?: Nullable<boolean>;
    createdAt: DateTime;
    updatedAt?: Nullable<DateTime>;
}

export class Task {
    id: number;
    title: string;
    description?: Nullable<string>;
    columnId: number;
    createdAt: DateTime;
    updatedAt?: Nullable<DateTime>;
    subtasks?: Nullable<Nullable<SubTask>[]>;
}

export type DateTime = any;
type Nullable<T> = T | null;
