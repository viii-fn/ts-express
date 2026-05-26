// Data Transfer Oject -- sets the type of the data to be received from the body before carrying aut a request

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