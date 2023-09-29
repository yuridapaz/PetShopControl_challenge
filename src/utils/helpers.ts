export const formatNotes = (notes: string) => {
  if (notes.length == 0) return [];
  if (Array.isArray(notes) && notes.length > 0) return notes;

  return notes
    .split(/[\n,]/)
    .map((o) => o.trim())
    .filter(Boolean);
};
