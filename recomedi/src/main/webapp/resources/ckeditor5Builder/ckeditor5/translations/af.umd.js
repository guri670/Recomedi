/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'af' ]: { dictionary, getPluralForm } } = {"af":{"dictionary":{"Words: %0":"","Characters: %0":"","Widget toolbar":"","Insert paragraph before block":"","Insert paragraph after block":"","Press Enter to type after or press Shift + Enter to type before the widget":"","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"","Insert a new paragraph directly after a widget":"","Insert a new paragraph directly before a widget":"","Move the caret to allow typing directly before a widget":"","Move the caret to allow typing directly after a widget":"","Move focus from an editable area back to the parent widget":"","Upload in progress":"","Undo":"","Redo":"","Rich Text Editor":"","Edit block":"","Click to edit block":"","Drag to move":"","Next":"","Previous":"","Editor toolbar":"","Dropdown toolbar":"","Dropdown menu":"","Black":"","Dim grey":"","Grey":"","Light grey":"","White":"","Red":"","Orange":"","Yellow":"","Light green":"","Green":"","Aquamarine":"","Turquoise":"","Light blue":"","Blue":"","Purple":"","Editor block content toolbar":"","Editor contextual toolbar":"","HEX":"","No results found":"","No searchable items":"","Editor dialog":"","Close":"","Help Contents. To close this dialog press ESC.":"","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"","(may require <kbd>Fn</kbd>)":"","Accessibility":"","Accessibility help":"","Press %0 for help.":"","Move focus in and out of an active dialog window":"","MENU_BAR_MENU_FILE":"","MENU_BAR_MENU_EDIT":"Wysig","MENU_BAR_MENU_VIEW":"","MENU_BAR_MENU_INSERT":"","MENU_BAR_MENU_FORMAT":"","MENU_BAR_MENU_TOOLS":"","MENU_BAR_MENU_HELP":"","MENU_BAR_MENU_TEXT":"","MENU_BAR_MENU_FONT":"","Editor menu bar":"","Please enter a valid color (e.g. \"ff0000\").":"","Insert table":"","Header column":"","Insert column left":"","Insert column right":"","Delete column":"","Select column":"","Column":"","Header row":"","Insert row below":"","Insert row above":"","Delete row":"","Select row":"","Row":"","Merge cell up":"","Merge cell right":"","Merge cell down":"","Merge cell left":"","Split cell vertically":"","Split cell horizontally":"","Merge cells":"","Table toolbar":"","Table properties":"","Cell properties":"","Border":"","Style":"","Width":"","Height":"","Color":"","Background":"","Padding":"","Dimensions":"","Table cell text alignment":"","Alignment":"","Horizontal text alignment toolbar":"","Vertical text alignment toolbar":"","Table alignment toolbar":"","None":"","Solid":"","Dotted":"","Dashed":"","Double":"","Groove":"","Ridge":"","Inset":"","Outset":"","Align cell text to the left":"","Align cell text to the center":"","Align cell text to the right":"","Justify cell text":"","Align cell text to the top":"","Align cell text to the middle":"","Align cell text to the bottom":"","Align table to the left":"","Center table":"","Align table to the right":"","The color is invalid. Try \"#FF0000\" or \"rgb(255,0,0)\" or \"red\".":"","The value is invalid. Try \"10px\" or \"2em\" or simply \"2\".":"","Enter table caption":"","Keystrokes that can be used in a table cell":"","Move the selection to the next cell":"","Move the selection to the previous cell":"","Insert a new table row (when in the last cell of a table)":"","Navigate through the table":"","Table":"","Styles":"","Multiple styles":"","Block styles":"","Text styles":"","Special characters":"","Category":"","All":"","Arrows":"","Currency":"","Latin":"","Mathematical":"","Text":"","leftwards simple arrow":"","rightwards simple arrow":"","upwards simple arrow":"","downwards simple arrow":"","leftwards double arrow":"","rightwards double arrow":"","upwards double arrow":"","downwards double arrow":"","leftwards dashed arrow":"","rightwards dashed arrow":"","upwards dashed arrow":"","downwards dashed arrow":"","leftwards arrow to bar":"","rightwards arrow to bar":"","upwards arrow to bar":"","downwards arrow to bar":"","up down arrow with base":"","back with leftwards arrow above":"","end with leftwards arrow above":"","on with exclamation mark with left right arrow above":"","soon with rightwards arrow above":"","top with upwards arrow above":"","Dollar sign":"","Euro sign":"","Yen sign":"","Pound sign":"","Cent sign":"","Euro-currency sign":"","Colon sign":"","Cruzeiro sign":"","French franc sign":"","Lira sign":"","Currency sign":"","Bitcoin sign":"","Mill sign":"","Naira sign":"","Peseta sign":"","Rupee sign":"","Won sign":"","New sheqel sign":"","Dong sign":"","Kip sign":"","Tugrik sign":"","Drachma sign":"","German penny sign":"","Peso sign":"","Guarani sign":"","Austral sign":"","Hryvnia sign":"","Cedi sign":"","Livre tournois sign":"","Spesmilo sign":"","Tenge sign":"","Indian rupee sign":"","Turkish lira sign":"","Nordic mark sign":"","Manat sign":"","Ruble sign":"","Latin capital letter a with macron":"","Latin small letter a with macron":"","Latin capital letter a with breve":"","Latin small letter a with breve":"","Latin capital letter a with ogonek":"","Latin small letter a with ogonek":"","Latin capital letter c with acute":"","Latin small letter c with acute":"","Latin capital letter c with circumflex":"","Latin small letter c with circumflex":"","Latin capital letter c with dot above":"","Latin small letter c with dot above":"","Latin capital letter c with caron":"","Latin small letter c with caron":"","Latin capital letter d with caron":"","Latin small letter d with caron":"","Latin capital letter d with stroke":"","Latin small letter d with stroke":"","Latin capital letter e with macron":"","Latin small letter e with macron":"","Latin capital letter e with breve":"","Latin small letter e with breve":"","Latin capital letter e with dot above":"","Latin small letter e with dot above":"","Latin capital letter e with ogonek":"","Latin small letter e with ogonek":"","Latin capital letter e with caron":"","Latin small letter e with caron":"","Latin capital letter g with circumflex":"","Latin small letter g with circumflex":"","Latin capital letter g with breve":"","Latin small letter g with breve":"","Latin capital letter g with dot above":"","Latin small letter g with dot above":"","Latin capital letter g with cedilla":"","Latin small letter g with cedilla":"","Latin capital letter h with circumflex":"","Latin small letter h with circumflex":"","Latin capital letter h with stroke":"","Latin small letter h with stroke":"","Latin capital letter i with tilde":"","Latin small letter i with tilde":"","Latin capital letter i with macron":"","Latin small letter i with macron":"","Latin capital letter i with breve":"","Latin small letter i with breve":"","Latin capital letter i with ogonek":"","Latin small letter i with ogonek":"","Latin capital letter i with dot above":"","Latin small letter dotless i":"","Latin capital ligature ij":"","Latin small ligature ij":"","Latin capital letter j with circumflex":"","Latin small letter j with circumflex":"","Latin capital letter k with cedilla":"","Latin small letter k with cedilla":"","Latin small letter kra":"","Latin capital letter l with acute":"","Latin small letter l with acute":"","Latin capital letter l with cedilla":"","Latin small letter l with cedilla":"","Latin capital letter l with caron":"","Latin small letter l with caron":"","Latin capital letter l with middle dot":"","Latin small letter l with middle dot":"","Latin capital letter l with stroke":"","Latin small letter l with stroke":"","Latin capital letter n with acute":"","Latin small letter n with acute":"","Latin capital letter n with cedilla":"","Latin small letter n with cedilla":"","Latin capital letter n with caron":"","Latin small letter n with caron":"","Latin small letter n preceded by apostrophe":"","Latin capital letter eng":"","Latin small letter eng":"","Latin capital letter o with macron":"","Latin small letter o with macron":"","Latin capital letter o with breve":"","Latin small letter o with breve":"","Latin capital letter o with double acute":"","Latin small letter o with double acute":"","Latin capital ligature oe":"","Latin small ligature oe":"","Latin capital letter r with acute":"","Latin small letter r with acute":"","Latin capital letter r with cedilla":"","Latin small letter r with cedilla":"","Latin capital letter r with caron":"","Latin small letter r with caron":"","Latin capital letter s with acute":"","Latin small letter s with acute":"","Latin capital letter s with circumflex":"","Latin small letter s with circumflex":"","Latin capital letter s with cedilla":"","Latin small letter s with cedilla":"","Latin capital letter s with caron":"","Latin small letter s with caron":"","Latin capital letter t with cedilla":"","Latin small letter t with cedilla":"","Latin capital letter t with caron":"","Latin small letter t with caron":"","Latin capital letter t with stroke":"","Latin small letter t with stroke":"","Latin capital letter u with tilde":"","Latin small letter u with tilde":"","Latin capital letter u with macron":"","Latin small letter u with macron":"","Latin capital letter u with breve":"","Latin small letter u with breve":"","Latin capital letter u with ring above":"","Latin small letter u with ring above":"","Latin capital letter u with double acute":"","Latin small letter u with double acute":"","Latin capital letter u with ogonek":"","Latin small letter u with ogonek":"","Latin capital letter w with circumflex":"","Latin small letter w with circumflex":"","Latin capital letter y with circumflex":"","Latin small letter y with circumflex":"","Latin capital letter y with diaeresis":"","Latin capital letter z with acute":"","Latin small letter z with acute":"","Latin capital letter z with dot above":"","Latin small letter z with dot above":"","Latin capital letter z with caron":"","Latin small letter z with caron":"","Latin small letter long s":"","Less-than sign":"","Greater-than sign":"","Less-than or equal to":"","Greater-than or equal to":"","En dash":"","Em dash":"","Macron":"","Overline":"","Degree sign":"","Minus sign":"","Plus-minus sign":"","Division sign":"","Fraction slash":"","Multiplication sign":"","Latin small letter f with hook":"","Integral":"","N-ary summation":"","Infinity":"","Square root":"","Tilde operator":"","Approximately equal to":"","Almost equal to":"","Not equal to":"","Identical to":"","Element of":"","Not an element of":"","Contains as member":"","N-ary product":"","Logical and":"","Logical or":"","Not sign":"","Intersection":"","Union":"","Partial differential":"","For all":"","There exists":"","Empty set":"","Nabla":"","Asterisk operator":"","Proportional to":"","Angle":"","Vulgar fraction one quarter":"","Vulgar fraction one half":"","Vulgar fraction three quarters":"","Single left-pointing angle quotation mark":"","Single right-pointing angle quotation mark":"","Left-pointing double angle quotation mark":"","Right-pointing double angle quotation mark":"","Left single quotation mark":"","Right single quotation mark":"","Left double quotation mark":"","Right double quotation mark":"","Single low-9 quotation mark":"","Double low-9 quotation mark":"","Inverted exclamation mark":"","Inverted question mark":"","Two dot leader":"","Horizontal ellipsis":"","Double dagger":"","Per mille sign":"","Per ten thousand sign":"","Double exclamation mark":"","Question exclamation mark":"","Exclamation question mark":"","Double question mark":"","Copyright sign":"","Registered sign":"","Trade mark sign":"","Section sign":"","Paragraph sign":"","Reversed paragraph sign":"","Source":"","Show source":"","Show blocks":"","Select all":"","Disable editing":"","Enable editing":"","Previous editable region":"","Next editable region":"","Navigate editable regions":"","Remove Format":"Verwyder formatering","Page break":"","media widget":"","Media URL":"","Paste the media URL in the input.":"","Tip: Paste the URL into the content to embed faster.":"","The URL must not be empty.":"","This media URL is not supported.":"","Insert media":"","Media":"","Media toolbar":"","Open media in new tab":"","Numbered List":"","Bulleted List":"","To-do List":"","Bulleted list styles toolbar":"","Numbered list styles toolbar":"","Toggle the disc list style":"","Toggle the circle list style":"","Toggle the square list style":"","Toggle the decimal list style":"","Toggle the decimal with leading zero list style":"","Toggle the lower–roman list style":"","Toggle the upper–roman list style":"","Toggle the lower–latin list style":"","Toggle the upper–latin list style":"","Disc":"","Circle":"","Square":"","Decimal":"","Decimal with leading zero":"","Lower–roman":"","Upper-roman":"","Lower-latin":"","Upper-latin":"","List properties":"","Start at":"","Invalid start index value.":"","Start index must be greater than 0.":"","Reversed order":"","Keystrokes that can be used in a list":"","Increase list item indent":"","Decrease list item indent":"","Entering a to-do list":"","Leaving a to-do list":"","Unlink":"","Link":"","Link URL":"","Link URL must not be empty.":"","Link image":"","Edit link":"","Open link in new tab":"","This link has no URL":"","Open in a new tab":"","Downloadable":"","Create link":"","Move out of a link":"","Language":"","Choose language":"","Remove language":"","Increase indent":"","Decrease indent":"","image widget":"","Wrap text":"","Break text":"","In line":"","Side image":"","Full size image":"","Left aligned image":"","Centered image":"","Right aligned image":"","Change image text alternative":"","Text alternative":"","Enter image caption":"","Insert image":"","Replace image":"","Upload from computer":"","Replace from computer":"","Upload image from computer":"","Image from computer":"","From computer":"","Replace image from computer":"","Upload failed":"","You have no image upload permissions.":"","Image toolbar":"","Resize image":"","Resize image to %0":"","Resize image to the original size":"","Resize image (in %0)":"","Original":"","Custom image size":"","Custom":"","Image resize list":"","Insert image via URL":"","Insert via URL":"","Image via URL":"","Via URL":"","Update image URL":"","Caption for the image":"","Caption for image: %0":"","The value must not be empty.":"","The value should be a plain number.":"","Uploading image":"","Image upload complete":"","Error during image upload":"","Image":"","HTML object":"","Insert HTML":"","HTML snippet":"","Paste raw HTML here...":"","Edit source":"","Save changes":"","No preview available":"","Empty snippet content":"","Horizontal line":"","Yellow marker":"","Green marker":"","Pink marker":"","Blue marker":"","Red pen":"","Green pen":"","Remove highlight":"","Highlight":"","Text highlight toolbar":"","Heading":"","Choose heading":"","Heading 1":"","Heading 2":"","Heading 3":"","Heading 4":"","Heading 5":"","Heading 6":"","Type your title":"","Type or paste your content here.":"","Font Size":"","Tiny":"","Small":"","Big":"","Huge":"","Font Family":"","Default":"","Font Color":"","Font Background Color":"","Document colors":"","Find and replace":"Soek en vervang","Find in text…":"Soek in teks …","Find":"Soek","Previous result":"Vorige resultaat","Next result":"Volgende resultaat","Replace":"Vervang","Replace all":"Vervang alles","Match case":"Hooflettersensitief","Whole words only":"Slegs hele woorde","Replace with…":"Vervang met ...","Text to find must not be empty.":"Soekteks mag nie leeg wees nie.","Tip: Find some text first in order to replace it.":"Wenk: Soek eers 'n bietjie teks om dit te vervang.","Advanced options":"","Find in the document":"","Insert a soft break (a <code>&lt;br&gt;</code> element)":"","Insert a hard break (a new paragraph)":"","Cancel":"Kanselleer","Clear":"","Remove color":"Verwyder kleur","Restore default":"Herstel verstek","Save":"Stoor","Show more items":"Wys meer items","%0 of %1":"%0 van %1","Cannot upload file:":"Lêer nie opgelaai nie:","Rich Text Editor. Editing area: %0":"","Insert with file manager":"","Replace with file manager":"","Insert image with file manager":"","Replace image with file manager":"","File":"","With file manager":"","Toggle caption off":"","Toggle caption on":"","Content editing keystrokes":"","These keyboard shortcuts allow for quick access to content editing features.":"","User interface and content navigation keystrokes":"","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"","Close contextual balloons, dropdowns, and dialogs":"","Open the accessibility help dialog":"","Move focus between form fields (inputs, buttons, etc.)":"","Move focus to the menu bar, navigate between menu bars":"","Move focus to the toolbar, navigate between toolbars":"","Navigate through the toolbar or menu bar":"","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"","Accept":"","Paragraph":"","Color picker":"","Insert code block":"Voeg bronkodeblok in","Plain text":"Gewone skrif","Leaving %0 code snippet":"","Entering %0 code snippet":"","Entering code snippet":"","Leaving code snippet":"","Code block":"","Copy selected content":"","Paste content":"","Paste content as plain text":"","Insert image or file":"Voeg beeld of lêer in","Could not obtain resized image URL.":"Kon nie die beeld URL vir die aanpassing kry nie.","Selecting resized image failed":"Kon nie die beeld se grootte verander nie","Could not insert image at the current position.":"Beeld kan nie in die posisie toegevoeg word nie.","Inserting image failed":"Beeld kan nie toegevoeg word nie","Open file manager":"","Cannot determine a category for the uploaded file.":"","Cannot access default workspace.":"","You have no image editing permissions.":"","Edit image":"","Processing the edited image.":"","Server failed to process the image.":"","Failed to determine category of edited image.":"","Block quote":"Verwysingsaanhaling","Bold":"Vet","Italic":"Kursief","Underline":"Onderstreep","Code":"Bronkode","Strikethrough":"Deurstreep","Subscript":"Onderskrif","Superscript":"Boskrif","Italic text":"","Move out of an inline code style":"","Bold text":"","Underline text":"","Strikethrough text":"","Saving changes":"Veranderinge word gestoor","Revert autoformatting action":"","Align left":"Belyn links","Align right":"Belyn regs","Align center":"Belyn in die middel","Justify":"Belyn beide kante","Text alignment":"Teksbelyning","Text alignment toolbar":"Teksbelyning nutsbank"},getPluralForm(n){return (n != 1);}}};
e[ 'af' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'af' ].dictionary = Object.assign( e[ 'af' ].dictionary, dictionary );
e[ 'af' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
