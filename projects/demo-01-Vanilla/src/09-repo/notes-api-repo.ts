import type { Note } from "./types/note.ts";
import type { Repo } from "./types/repo.ts";

export class NotesApiRepo implements Repo<Note> {

    url = "https://api.example.com/notes";
    
    async getAll(): Promise<Note[]>{
        const response = await fetch(this.url);
        const data = await response.json();
        return data;
    }

    async getById(id: string): Promise<Note>{
        const response = await fetch(`${this.url}/${id}`);
        const data = await response.json();
        return data;
    }
    
    async create(item: Omit<Note, "id">): Promise<Note>{
        const response = await fetch(this.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        });
        const data = await response.json();
        return data;    
    }


    async update(id: string, item: Partial<Omit<Note, "id">>): Promise<Note>{
        const response = await fetch(`${this.url}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        });
        const data = await response.json();
        return data;
    }

    async delete(id: string): Promise<void>{
        await fetch(`${this.url}/${id}`, {
            method: "DELETE"
        });
    }

}
