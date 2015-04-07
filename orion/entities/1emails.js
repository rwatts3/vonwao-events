/**
 * This entity is to save emails
 */ 
orion.addEntity('emails', {
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        unique: true
    },
    userId: orion.attribute('user', {
        label: 'Owner',
        optional: true,
    }, {
        publicationName: 'emailsasdfasuser'
    }),
}, {
    icon: 'envelope',
    sidebarName: 'Emails',
    pluralName: 'Emails',
    singularName: 'Email',
    tableColumns: [
        { data:'email', title: 'Email' },
        orion.attributeColumn('user', 'userId', 'User'),
    ],
});

// null beacouse the client its automatically subscribed
if (Meteor.isServer) {
    Meteor.publish(null, function() {
        return orion.entities.emails.collection.find({ userId: this.userId });
    })
}