export interface IArticleAPI {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    content: [
        {
            _key:string;
            _type: string;
            children: [
                {
                    _key: string;
                    _type: string;
                    marks: string[];
                    text: string;
                }
            ]
            markDefs: []
            style: string;
        }
    ];
    slug: string;
    text: string;
    title: string;
}