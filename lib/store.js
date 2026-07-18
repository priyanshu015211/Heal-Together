// Minimal in-memory store for the MVP.
//
// This exists so the app is fully functional out of the box without a
// database. Data resets whenever the server restarts. Swap this out for
// MongoDB/Firebase (per the README tech stack) once persistence is needed —
// each function below is the seam to do that.

const globalStore = globalThis;

if (!globalStore.__healTogetherStore) {
  globalStore.__healTogetherStore = {
    moods: [],
    journalEntries: [],
    supportPosts: [
      {
        id: "seed-1",
        message:
          "Finals week is brutal this semester. Reminding myself that one bad grade isn't the end of the world.",
        createdAt: new Date().toISOString(),
      },
    ],
  };
}

export const store = globalStore.__healTogetherStore;

export function addMood(entry) {
  const record = { id: crypto.randomUUID(), createdAt: new Date().toISOString(), ...entry };
  store.moods.unshift(record);
  return record;
}

export function getMoods() {
  return store.moods;
}

export function addJournalEntry(entry) {
  const record = { id: crypto.randomUUID(), createdAt: new Date().toISOString(), ...entry };
  store.journalEntries.unshift(record);
  return record;
}

export function getJournalEntries() {
  return store.journalEntries;
}

export function addSupportPost(entry) {
  const record = { id: crypto.randomUUID(), createdAt: new Date().toISOString(), ...entry };
  store.supportPosts.unshift(record);
  return record;
}

export function getSupportPosts() {
  return store.supportPosts;
}
