import { NotesApiRepo } from './notes-api-repo.ts';
import type { Note } from './types/note.ts';

globalThis.fetch = vi.fn();

const NOTES: Note[] = [
    {
        id: '1',
        title: 'Note 1',
        content: 'Content of Note 1',
        isImportant: true,
    },
    { id: '2', title: 'Note 2', content: 'Content of Note 2' },
    {
        id: '3',
        title: 'Note 3',
        content: 'Content of Note 3',
        isImportant: false,
    },
];

describe('Note API Repository', () => {
    let repo: NotesApiRepo;
    let notes: Note[];

    afterEach(() => {
        vi.clearAllMocks();
    });

    beforeEach(() => {
        repo = new NotesApiRepo();
        notes = [...NOTES];
    });

    it('should return all notes', async () => {
        (globalThis.fetch as any).mockResolvedValueOnce({
            json: async () => notes,
        });
        const result = await repo.getAll();
        expect(result.length).toBe(3);
    });

    it('should return a note by id', async () => {
        (globalThis.fetch as any).mockResolvedValueOnce({
            json: async () => notes[0],
        });
        const result = await repo.getById('1');
        expect(result).toEqual({
            id: '1',
            title: 'Note 1',
            content: 'Content of Note 1',
            isImportant: true,
        });
    });

    it('should create a new note', async () => {
        const newNoteData = { title: 'New Note', content: 'New Content' };
        (globalThis.fetch as any).mockResolvedValueOnce({
            json: async () => ({ id: '4', ...newNoteData }),
        });
        const newNote = await repo.create(newNoteData);
        expect(newNote).toEqual({ id: '4', ...newNoteData });
    });

    it('should update an existing note', async () => {
        (globalThis.fetch as any).mockResolvedValueOnce({
            json: async () => ({  ...notes[0],title: 'Updated Note'}),
        });
        const updatedNote = await repo.update('1', { title: 'Updated Note' });
        expect(updatedNote).toEqual({ ...notes[0], title: 'Updated Note' });
    });

    it('should delete a note', async () => {
        (globalThis.fetch as any).mockResolvedValueOnce({
            json: async () => ({}),
        });
        const result = await repo.delete('1');
        //const notes = await repo.();
        expect(result).toBe(undefined); // The length is reduced by 1 since the note is deleted
    });
});
