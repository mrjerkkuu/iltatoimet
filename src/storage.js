import { Preferences } from "@capacitor/preferences";

export async function sGet(k) {
  try {
    const { value } = await Preferences.get({ key: k });
    return value != null ? JSON.parse(value) : null;
  } catch { return null; }
}

export async function sSet(k, v) {
  try {
    await Preferences.set({ key: k, value: JSON.stringify(v) });
  } catch {}
}

export async function sDel(k) {
  try {
    await Preferences.remove({ key: k });
  } catch {}
}
