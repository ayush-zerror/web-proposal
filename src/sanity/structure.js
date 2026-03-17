// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Dashboard')
    .items([
      S.documentTypeListItem('proposal').title('Web Proposals'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['proposal'].includes(item.getId()),
      ),
    ])
