# hk-tag-commander

Tag commander utilities for use with React applications

## TCVars

Used to set the tc vars

USAGE:

```javascript
import TCVars from '@axa-asia/hk-tag-commander/lib/TCVars';

...

<TCVars work_env="production"
        language="en"
        page_name="your::page::name"
        template="home"
        funnel_name="home"
        funnel_step="step1" />
```

##TCScript

Used to import your tc script containers, if work_env is not production it will pull containers from uat TC server

```javascript
import TCScript from '@axa-asia/hk-tag-commander/lib/TCScript';

...

<TCScript script_num="1" work_env="uat" />
```

##TagCommander

A higher order component that queues events based on parameters and data passed in on `componentDidMount()`. It expects there to be a context with the store inside.

MyComponent.js
```javascript
import TagCommander from '@axa-asia/hk-tag-commander/lib/TagCommander'

class MyComponent extends Component{
...
}

function tagCommanderParams(state) {
  return {
    id: 'virtualpage',
    data: {
      pagename: 'ecommerce::home::step1_quote',
      other_tc_event_var: state.yourData.otherTcEventValue
    }
  }
}

export default TagCommander(MyComponent, tagCommanderParams)

OR USE WITH CONNECT

export default connect(mapStateToProps)(TagCommander(MyComponent, tagCommanderParams));
```

also accepts an array of events

```javascript
function tagCommanderParams(state) {
  return [
    {
      id: 'virtualpage',
      data: {
        pagename: 'ecommerce::home::step1_quote',
        other_tc_event_var: state.yourData.otherTcEventValue
      }
    },
    {
      id: 'banana_event',
      data: {
        banana: state.monkey.hasBanana
      }
    }
  ]
}

export default TagCommander(MyComponent, tagCommanderParams)
```

## queueEvent

A function used to queue events to send to tag commander. If tc_events_4 or tc_events_3 exist, it will trigger those events with the args passed in. If they do not exist it will call itself with the same args after 100ms until tc_events_4 or tc_events_3 have been loaded.

```javascript
import { queueEvent } from '@axa-asia/hk-tag-commander/utils/tag-commander'

queueEvent(yourElement, 'eventId', { yourEvent: data });
```
