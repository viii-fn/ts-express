export interface CreateTaskDto {
    title: string;
};

export interface DeleteTaskDto {
    id: number;
}

export interface UpdateTaskDto {
    id: number;
    title: string;
    isCompleted: boolean;
}