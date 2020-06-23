import sleep from '../utils/sleep';

import decks from './mock/decks';

export const fetchUserDecks = async () => {
	// await sleep(500);

	return decks.owned;
}

export const fetchPurchaseDecks = async () => {
	// await sleep(500);

	return decks.purchase;
}
