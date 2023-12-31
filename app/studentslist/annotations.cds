using StudentBookService as service from '../../srv/cat-service';

annotate service.Students with @odata.draft.enabled;

annotate service.Students with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'name',
                Value : name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'surname',
                Value : surname,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Enrollments',
            ID : 'Enrollments',
            Target : 'enrollments/@UI.LineItem#Enrollments',
        },
    ]
);
annotate service.Students with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'name',
            Value : name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'surname',
            Value : surname,
        },
        {
            $Type : 'UI.DataField',
            Label : 'enrollments',           
            Value : enrollments.class.name,
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'StudentBookService.EntityContainer/resetStatus',
            Label : '{i18n>resetStatus}',
        }       
       
    ]
);
annotate service.Enrollment with @(
    UI.LineItem #Enrollments : [
       {
            $Type               : 'UI.DataField',
            Value               : status,
            Criticality         : status_code,     //Supported values 0,1,2,3,5
            CriticalityRepresentation   : #WithIcon,
            ![@UI.Importance]   : #High,
        },
        {
            $Type : 'UI.DataField',
            Value : class.name,
            Label : 'name',
        },
        {
            $Type : 'UI.DataField',
            Value : class.description,
            Label : 'description',
        }
        
        ]
);

annotate service.Students with @(
    UI.SelectionFields : [
        surname,
    ]
);
