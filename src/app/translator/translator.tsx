import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import * as translationsFetch from "../../api/translations_api.ts";
import * as translationVotesFetch from "../../api/translation_votes_api.ts";

import Translation from "../../interfaces/DB/translation.ts"
import TranslationVote from "../../interfaces/DB/translation_vote.ts"


export default function Translator() {
	const [translationList, setTranslationList] = useState<Translation[] | null>(null);
	const [translationVotesList, setTranslationVotesList] = useState<Map<number, TranslationVote[]>>(new Map());

	useEffect(() => {
		// Fetch translations
		translationsFetch.getBySourceStringId(1)
			.then(async (translations: Translation[]) => {
				setTranslationList(translations);

				// Fetch votes for each translation
				const votesMap = new Map<number, TranslationVote[]>();
				await Promise.all(translations.map(async (translation) => {
					try {
						const votes = await translationVotesFetch.getByTranslationId(translation.id);
						votesMap.set(translation.id, votes);
					} catch (error) {
						console.error(`Failed to fetch votes for translation ${translation.id}:`, error);
						votesMap.set(translation.id, []);
					}
				}));

				setTranslationVotesList(votesMap);
			})
			.catch((error) => {
				console.error("Failed to fetch translations:", error);
				setTranslationList(null);
			});
	}, []);


	return (
		<div>
			<div className="source-string-container-list">
				<div className="source-string-container"></div>
			</div>
			<div className="translation-container-list">
				{translationList === null ? (
					<p>Error loading translations.</p>
				) : (
					<Table striped hover>
						<thead>
							<tr>
								<th>Translation</th>
								<th>Votes</th>
								<th>Options</th>
							</tr>
						</thead>
						<tbody>
							{translationList.map((translation) => (
								<tr key={translation.id}>
									<td>
										<div>
											<p>{translation.translation1}</p>
										</div>
									</td>
									<td>
										{translationVotesList.get(translation.id)?.length ?? 0} votes
									</td>
									<td><button>Options</button></td>
								</tr>
							))}
						</tbody>
					</Table>
				)}
			</div>
		</div>
	)
}

