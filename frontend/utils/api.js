import sleep from '../utils/sleep';

import decks from './mock/decks';
import flashCards from './mock/flash-cards';

export const fetchUserDecks = async () => {
	// await sleep(500);

	return decks.owned;
}

export const fetchPurchaseDecks = async () => {
	// await sleep(500);

	return decks.purchase;
}

export const fetchFlashCards = async () => {
	// await.sleep(500);

	return flashCards.demo;
}