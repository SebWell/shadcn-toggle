export default {
  editor: {
    label: {
      en: "shadcn Toggle",
      fr: "Bouton toggle shadcn"
    },
    icon: 'fas fa-toggle-off',
    bubble: {
      icon: 'fas fa-toggle-off'
    },
    deprecated: false
  },
  properties: {
    pressed: {
      label: {
        en: "Pressed state",
        fr: "État pressé"
      },
      type: "OnOff",
      defaultValue: false,
      bindable: true,
      section: "data"
    },
    disabled: {
      label: {
        en: "Disabled",
        fr: "Désactivé"
      },
      type: "OnOff",
      defaultValue: false,
      bindable: true,
      section: "behavior"
    },
    variant: {
      label: {
        en: "Variant",
        fr: "Variante"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "default", label: { en: "Default", fr: "Par défaut" } },
          { value: "outline", label: { en: "Outline", fr: "Contour" } }
        ]
      },
      defaultValue: "default",
      section: "appearance"
    },
    size: {
      label: {
        en: "Size",
        fr: "Taille"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "sm", label: { en: "Small", fr: "Petit" } },
          { value: "default", label: { en: "Default", fr: "Par défaut" } },
          { value: "lg", label: { en: "Large", fr: "Grand" } }
        ]
      },
      defaultValue: "default",
      section: "appearance"
    },
    text: {
      label: {
        en: "Text",
        fr: "Texte"
      },
      type: "Text",
      defaultValue: "",
      bindable: true,
      translatable: true,
      section: "content"
    },
    icon: {
      label: {
        en: "Icon",
        fr: "Icône"
      },
      type: "Icon",
      bindable: true,
      section: "content"
    },
    wewebVariable: {
      label: {
        en: "Weweb variable",
        fr: "Variable Weweb"
      },
      type: "Variable",
      bindable: true,
      section: "data"
    },
    changeWorkflowId: {
      label: {
        en: "Change workflow",
        fr: "Workflow de changement"
      },
      type: "WorkflowId",
      bindable: true,
      section: "behavior"
    },
    customClasses: {
      label: {
        en: "Custom CSS classes",
        fr: "Classes CSS personnalisées"
      },
      type: "Text",
      bindable: true,
      section: "style"
    }
  },
  events: {
    change: {
      label: {
        en: "On toggle",
        fr: "Lors du basculement"
      },
      default: null
    }
  },
  sections: {
    content: {
      label: { en: "Content", fr: "Contenu" },
      expand: true
    },
    data: {
      label: { en: "Data", fr: "Données" },
      expand: true
    },
    appearance: {
      label: { en: "Appearance", fr: "Apparence" },
      expand: false
    },
    behavior: {
      label: { en: "Behavior", fr: "Comportement" },
      expand: false
    },
    style: {
      label: { en: "Style", fr: "Style" },
      expand: false
    }
  }
}; 